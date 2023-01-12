import { filter } from 'lodash';
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";

// material
import {
  Card,
  Paper,
  Grid,
  Stack,
  Button,
  Container,
  Typography,
  TablePagination,
  Table,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// components
import Page from '../components/Page';
import SearchNotFound from '../components/SearchNotFound';
import { UserListHead, UserListToolbar } from '../sections/@dashboard/user';
import NaverCafeTable from './NaverCafeTable';
// mock
import USERLIST from '../_mock/user';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: '카페이름', alignRight: false },
  { id: 'title', label: '제목', alignRight: false },
  { id: 'keyword', label: '키워드', alignRight: false },
];

const exstyle = `padding: 10px 10px;`;

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

const columns = [
  {
    field: 'cafeName',
    headerName: '카페 이름',
    width: 300,
  },
  {
    field: 'title',
    headerName: '제목',
    width: 500,
  },
  {
    field: 'keywords',
    headerName: '키워드',
    width: 300,
  },
];

export default function LearnMore({bigcategory}) {

  const [pageSize, setPageSize] = React.useState(25);

  const [selectedRow, setSelectedRow] = useState();

  const location = useLocation();
	
  const pageTitle= location.state.bigcategory;

  // API 호출
  const [USERLIST, setUSERLIST] = useState([]);

  useEffect(() => {
    const fetchNaverCafe = async () => {
      
        const response = await axios.get( 'https://kw-dormitory.k-net.kr/api/CAs/all', {params : {bigPhenom : pageTitle}});
        console.log(pageTitle);
        setUSERLIST(response.data);
    };

    fetchNaverCafe();
  }, []);
  
  console.log(USERLIST);

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
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    lineHeight: '30px', 
  }));
  
  return (
      <Page title="Dashboard: Learnmore">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h3" gutterBottom>
          # {pageTitle} 
          </Typography>
      
        <Button size="small" component={Link} to ="/LearnMore/information" state={{ clickedcell: selectedRow}} >표의 Cell 클릭시 이동할 페이지(임시버튼)</Button>

        </Stack>
        <Card>
        <Grid container rowSpacing={4} columnSpacing={{ sm: 10, md: 10 }}>
   
        <Grid item xs={20}> 
        <Item elevation={4}>
          <Typography variant="h3" gutterBottom style={{color:'#000000',marginTop:'10px',marginLeft:'10px'}}>
            Naver Cafe Data
          </Typography>
          </Item>
          </Grid>
          </Grid>
          </Card>

          {/* <Card>              
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={USERLIST.length}
                  onRequestSort={handleRequestSort}
                />
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { id, cafeName, title, keywords } = row;

                    return (
                      <TableRow>
                        <TableCell style={{width:'2%'}} > {}</TableCell>
                        <TableCell style={{width:'30%'}} component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="left" spacing={2}>
                          <Typography>{}</Typography>
                          <Typography >
                            {cafeName}
                          </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell style={{width:"40"}}> {title}</TableCell>
                        <TableCell align="left" style={{fontSize:'18px', fontWeight:'bold'}}>{keywords}</TableCell>
                        
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isUserNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6}  >
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
          
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={USERLIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          
        </Card> */}

        <Card>
        <div style={{ height: 550, width: '100%' }}>
      <DataGrid
        rows={USERLIST}
        columns={columns} 
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[25, 50, 100]}
        onSelectionModelChange={(selection) => {
          const selectedRowData = USERLIST[Number(selection)];
          setSelectedRow(selection);
        }}        
        />
      </div>
        </Card>
        </Container>
        </Page>
  );
}