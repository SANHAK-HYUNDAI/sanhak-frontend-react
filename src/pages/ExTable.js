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
    backgroundColor: theme.palette.common.red,
    color: theme.palette.common.black,
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차', '뒷좌석 관련 (급) 질문드립니다','좌석 선택 좌석 선택 좌석 좌석 적용 좌석 경주 맛집 선택 좌석 적용'),
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차', 'sandwich', 237 ),
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차', 'sandwich', 237 ),
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차', 'sandwich', 237 ),
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차', 'sandwich', 237 ),
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차', 'sandwich', 237 ),
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차', 'sandwich', 237 ),
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차', 'sandwich', 237 ),
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차', 'sandwich', 237 ),
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차', 'sandwich', 237 ),
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차', 'sandwich', 237 ),
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차', 'sandwich', 237 ),
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차', 'sandwich', 237 ),
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차', 'sandwich', 237 ),
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차', 'sandwich', 237 ),
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차', 'sandwich', 237 ),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>카페이름</StyledTableCell>
            <StyledTableCell align="right">제목</StyledTableCell>
            <StyledTableCell align="right">키워드&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}