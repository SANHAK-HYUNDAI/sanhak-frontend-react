import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState, useEffect, React } from 'react';
import { spacing } from '@mui/system';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
// material
import {
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  InputAdornment,
  Grid,
  Paper,
} from '@mui/material';
// components
import { styled } from '@mui/material/styles';
import Page from '../components/Page';
import ROsimilarityTable from './ROsimilarityTable';
import SelectedTable from './SelectedTable';
import SelectedContent from './SelectedContent';

// mock
import USERLIST from '../_mock/user';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'company', label: 'Company', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: 'isVerified', label: 'Verified', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
];

const exstyle = `
padding: 10px 10px;`;


// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function AfterLearnMore() {

  const location = useLocation();
  console.log(location.state.clickedcell);

  const [selectId, setSelectId] = useState(location.state.clickedcell);

  // API 호출
  const [row, setRow] = useState([]);

  useEffect(() => {
    const fetchOneRow = async () => {
      
        const response = await axios.get(`https://kw-dormitory.k-net.kr/api/CAs/${Number(selectId)}`);
        setRow(response.data);
    };

    fetchOneRow();
  }, []);


  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    lineHeight: '30px',
    
  }));

  return (
    <Page title="User">
      <Container>
        <Grid container rowSpacing={5} columnSpacing={{ sm: 20, md: 10 }} >
        <Grid item xs={20} style={{marginTop:'50px'}}>
        <Item elevation={4}>
          <Typography variant="h4" gutterBottom style={{color:'#000000',  margin:'20px', marginLeft:'10px'}}>
            Naver Cafe Data
          </Typography>
          <SelectedTable selectId = {selectId}/>
        </Item>
        
        </Grid>

      <Grid item xs={20}> 
        <Item elevation={4}>
           <SelectedContent selectId = {selectId}/>
           </Item>
      </Grid>
      
      <Grid item xs={20}>
        <Item elevation={4}>
        <Typography variant="h4" gutterBottom style={{color:'#000000', margin:'20px', marginLeft:'10px'}}>Ro Data</Typography>
        <ROsimilarityTable selectId = {selectId}/>
        </Item>
      </Grid>
      <Grid item xs={20}>
        {}
      </Grid>

    </Grid>
    </Container>
    </Page>
  );
}
   