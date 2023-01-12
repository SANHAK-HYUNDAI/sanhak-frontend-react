import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
import { spacing } from '@mui/system';
import { useLocation } from 'react-router-dom';
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
import { ProductList, GuideGrid } from '../sections/@dashboard/products';
import Page from '../components/Page';
import NaverCafeTable from './NaverCafeTable';
import ExTable from './ExTable';
import SelectedTable from './SelectedTable';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import Iconify from '../components/Iconify';
import SearchNotFound from '../components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../sections/@dashboard/user';
// mock
import USERLIST from '../_mock/user';
import NaverCafe from './NaverCafe';

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

  console.log(location.state.clickedcell)


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
          <SelectedTable />
        </Item>
        
        </Grid>

      {/* 6이 절반 넓이 */}
      <Grid item xs={20}> 
        <Item elevation={4}>
            <h4 style={{color : "#6E6E6E" , marginLeft:'20px', marginTop:'20px'}}>content</h4>   
            <hr style={{width : 60, color: '#BCBCBC' , marginLeft:'20px', marginBottom:'20px'}}/>
            <div style={{color:'#000000', letterSpacing:'0.01em', margin:'20px'}}>
          광주에 서식하면서 여행차 경주에 와 있습니다 
              맛집도 많고 보문호 풍광도 좋아서 만족중입니다 
              공기도 참 깨끗하네요 아니고언제 나올지 어떻게 
              만들어질지 모르지만제가 계약한 옵션 중에 프리미엄
              패키지이지도어가 있는데요 궁금한 점은 뒷좌석를 선택하지 
              않았으므로 당연히뒷좌석 만 적용받을텐데 이렇게 되면 
              좌석이 어느 눕혀지면서 레그레스트가 올라오고 뒷좌석가 
              없으므로 조수석 등받이에 발을 대야하는 형편이맞는거죠를 
              안해놓고 쇼품에서는 풀옵만 타봤으니  뻘짓만 한것은 아닌지 
              궁금한 점을 정리하자면 발 올릴 곳 없으니 올리려면 조수석 
              등받이에 대는 거 그나마 원터치로 이루어지는지 궁금하네요미처 
              생각못한 부분이고 제가 아무리봐도 정확히 파악을 없어서 질문으로
              올립니다햐이거 옵션 추가하여 계약을 변경해야는지 갑자기 심난한 
              밤입니다요 심난하지는 않고뭐 그렇다고요
              </div>
        </Item>
      </Grid>
      
      <Grid item xs={20}>
        <Item elevation={4}>
        <Typography variant="h4" gutterBottom style={{color:'#000000', margin:'20px', marginLeft:'10px'}}>Ro Data</Typography>
        <ExTable/>
        <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={USERLIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Item>
      </Grid>
    </Grid>
    </Container>
    </Page>
  );
}


             /* {/*
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={USERLIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { id, name, role, status, company, avatarUrl, isVerified } = row;
                    const isItemSelected = selected.indexOf(name) !== -1;

                    return (
                      <TableRow
                        hover
                        key={id}
                        tabIndex={-1}
                        role="checkbox"
                        selected={isItemSelected}
                        aria-checked={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox checked={isItemSelected} onChange={(event) => handleClick(event, name)} />
                        </TableCell>
                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar alt={name} src={avatarUrl} />
                            <Typography variant="subtitle2" noWrap>
                              {name}
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell align="left">{company}</TableCell>
                        <TableCell align="left">{role}</TableCell>
                        <TableCell align="left">{isVerified ? 'Yes' : 'No'}</TableCell>
                        <TableCell align="left">
                          <Label variant="ghost" color={(status === 'banned' && 'error') || 'success'}>
                            {sentenceCase(status)}
                          </Label>
                        </TableCell>

                        <TableCell align="right">
                          <UserMoreMenu />
                        </TableCell>
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
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
              */
   