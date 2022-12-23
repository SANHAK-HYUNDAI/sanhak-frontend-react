import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import shadows from '@mui/material/styles/shadows';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.root}`]: {
    border: '1px solid #B9B9B9',
    radius: '4px',
    '&$focusVisible': {
      backgroundColor: theme.palette.action.selected,
     // boxshadow:theme.palette.action.selected,
    },
    '&$selected, &$selected:hover': {
      backgroundColor: theme.palette.action.selected,
     // boxshadow:theme.palette.action.selected,
    },
    '&$disabled': {
      opacity: 0.5,
    },
  },
 
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:'#90EE90',
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    focusVisible: {},
    '&:hover': {
    /*  transition: theme.transitions.create('backgroundcolor', {
        duration: theme.transitions.duration.shortest,
      }), */
      textDecoration: 'none',
      backgroundColor: theme.palette.action.hover,
      border: '1px solid #FFFFFF' ,
      // border: customShadows(theme.palette.grey[500]),
    },
    },
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    }
  ));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    // backgroundColor: theme.palette.action.hover,
    backgroundColor:theme.palette.common.white,
  },
  
}));

function createData(cafe, title, keyword ) {
  return { cafe, title, keyword };
}

const rows = [
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차', '뒷좌석 관련 (급) 질문드립니다','좌석 선택 좌석 선택 좌석 좌석 적용 좌석 경주 맛집 선택 좌석 적용'),
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차', '뒷좌석 관련 (급) 질문드립니다','좌석 선택 좌석 선택 좌석 좌석 적용 좌석 경주 맛집 선택 좌석 적용'),
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차', '뒷좌석 관련 (급) 질문드립니다','좌석 선택 좌석 선택 좌석 좌석 적용 좌석 경주 맛집 선택 좌석 적용'),
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차', '뒷좌석 관련 (급) 질문드립니다','좌석 선택 좌석 선택 좌석 좌석 적용 좌석 경주 맛집 선택 좌석 적용'),
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차', '뒷좌석 관련 (급) 질문드립니다','좌석 선택 좌석 선택 좌석 좌석 적용 좌석 경주 맛집 선택 좌석 적용'),
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차', '뒷좌석 관련 (급) 질문드립니다','좌석 선택 좌석 선택 좌석 좌석 적용 좌석 경주 맛집 선택 좌석 적용'),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
     
      <Table sx={{ minWidth: 500 }} aria-label="customized table" >
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">카페이름</StyledTableCell>
            <StyledTableCell align="center">제목</StyledTableCell>
            <StyledTableCell align="center">키워드&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.cafe}>
              <StyledTableCell component="th" scope="row">{row.cafe}</StyledTableCell>
              <StyledTableCell align="center">{row.title}</StyledTableCell>
              <StyledTableCell align="center">{row.keyword}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}