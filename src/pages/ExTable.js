import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(vehType, pheno, note, location, caused, problematicPhe, problem) {
  return { vehType, pheno, note, location, caused, problematicPhe, problem };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0,0,0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3,23,23),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>차종</StyledTableCell>
            <StyledTableCell align="right">현상</StyledTableCell>
            <StyledTableCell align="right">특이사항&nbsp;</StyledTableCell>
            <StyledTableCell align="right">위치&nbsp;</StyledTableCell>
            <StyledTableCell align="right">원인부품&nbsp;</StyledTableCell>
            <StyledTableCell align="right">문제현상&nbsp;</StyledTableCell>
            <StyledTableCell align="right">문제점&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.vehType}>
              <StyledTableCell component="th" scope="row">
                {row.vehType}
              </StyledTableCell>
              <StyledTableCell align="right">{row.pheno}</StyledTableCell>
              <StyledTableCell align="right">{row.note}</StyledTableCell>
              <StyledTableCell align="right">{row.location}</StyledTableCell>
              <StyledTableCell align="right">{row.caused}</StyledTableCell>
              <StyledTableCell align="right">{row.problematicPhe}</StyledTableCell>
              <StyledTableCell align="right">{row.problem}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}