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
   // backgroundColor: theme.palette.common.white,
    backgroundColor:theme.palette.common.black,
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

function createData(name, calories, fat, carbs, protein,a,b) {
  return { name, calories, fat, carbs, protein,a,b};
}

const rows = [
  createData('KH', '시트 작동 소음/이음_착좌시','리어 유격 이음 리어 파워 프레임 유격이 음조치 리어 파워 프레임 교환','시트 작동 소음이 음에 착좌 시트 작동 소음이 음에 착좌','2열','2열 트랙','소음','2열트랙 소음'),
  createData('RP', '시트 작동 소음/이음_착좌시','시트 작동 소음이 음에 착좌 시트 작동 소음이 음에 착좌','운전석','백프레임','소음','백프레임 작동 소음'),
  createData('CK', '시트 작동불량_전후진','운전석 시트 전후 진작 동시 한 번에 다 안가고 작동이 부자연스러움 작동 불량 트랙 교환','운전석','트랙','작동','트랙 PSM 작동불량'),
  createData('QL', '시트 작동불량_허리지지대','시트 작동 불량 허리 지지대','운전석','백프레임','작동','백프레임 작동불량'),
]

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">차종</StyledTableCell>
            <StyledTableCell align="center">현상</StyledTableCell>
            <StyledTableCell align="center">특이사항&nbsp;</StyledTableCell>
            <StyledTableCell align="center">위치&nbsp;</StyledTableCell>
            <StyledTableCell align="center">원인부품&nbsp;</StyledTableCell>
            <StyledTableCell align="center">문제현상&nbsp;</StyledTableCell>
            <StyledTableCell align="center">문제점&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
              <StyledTableCell align="center">{row.a}</StyledTableCell>
              <StyledTableCell align="center">{row.b}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}