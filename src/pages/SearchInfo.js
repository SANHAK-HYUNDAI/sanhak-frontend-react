import { filter } from 'lodash';
import React, {useEffect, useState} from "react";
import axios from "axios";

// material
import {
  Card,
  Table,
  Stack,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TablePagination,
} from '@mui/material';
// components
import Page from '../components/Page';
import SearchNotFound from '../components/SearchNotFound';
import { UserListHead, UserListToolbar } from '../sections/@dashboard/user';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'vehicleType', label: '차종', alignRight: false },
  { id: 'bigPhenom', label: '현상', alignRight: false },
  { id: 'specialNote', label: '특이사항', alignRight: false },
  { id: 'location', label: '위치', alignRight: false },
  { id: 'problematic',label: '문제현상', alignRight: false },
  { id: 'cause',label: '문제점', alignRight: false },
];

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
    return filter(array, (_user) => _user.specialNote.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function SearchInfo() {
  
// ----------------------------------------------------------------------

const [USERLIST, setUSERLIST] = useState([]);

useEffect(() => {
  const fetchUsers = async () => {
   
      const response = await axios.get(
        'https://kw-dormitory.k-net.kr/api/ROs/all'
      );
      setUSERLIST(response.data);
  };

  fetchUsers();
}, [USERLIST]);

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
      const newSelecteds = USERLIST.map((n) => n.specialNote);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, specialNote) => {
    const selectedIndex = selected.indexOf(specialNote);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, specialNote);
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

  return (
    <Page title="User">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Search Info
          </Typography>
        </Stack>

        <Card>
          <UserListToolbar filterName={filterName} onFilterName={handleFilterByName} />
              
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
                    const { vehicleType, bigPhenom, specialNote, location, problematic, cause } = row;

                    return (
                      <TableRow>
                        <TableCell style={{width:'2%'}} > {}</TableCell>
                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="left" spacing={2}>
                          <Typography>{}</Typography>
                          <Typography variant="subtitle1" noWrap>
                            {vehicleType}
                          </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell style={{width:'15%'}} variant="subtitle2" > {bigPhenom}</TableCell>
                        <TableCell style={{width:'40%'}} align="left">{specialNote}</TableCell>
                        <TableCell align="left">{location}</TableCell>
                        <TableCell align="left">{problematic}</TableCell>
                        <TableCell align="left">{cause}</TableCell>
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
          
        </Card>
      </Container>
    </Page>
  );
}
