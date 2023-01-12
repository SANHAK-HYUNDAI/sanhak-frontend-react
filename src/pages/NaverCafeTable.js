import * as React from 'react';
import { Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import shadows from '@mui/material/styles/shadows';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.root}`]: {
    border: '1px solid #B9B9B9',
    radius: '4px',
    '&$focusVisible': {
      backgroundColor: theme.palette.action.selected,
      boxshadow:theme.palette.action.selected,
    },
    '&$selected, &$selected:hover': {
      backgroundColor: theme.palette.action.selected,
      boxshadow:theme.palette.action.selected,
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

// 여기 작업 중 클릭할 시 새 창 띄워지며 이동해야 함 
    '&:visited' : {
      textDecoration: 'none',
      color: theme.palette.common.black,
  },
  '&selected' : {
    textDecoration: 'none',
    color: theme.palette.common.black,
    onClick : "location='./LearnMore/information'",
  },
    '&:hover': {
    /*  transition: theme.transitions.create('backgroundcolor', {
        duration: theme.transitions.duration.shortest,
      }), */
      textDecoration: 'none',
      backgroundColor: theme.palette.action.hover,
     // border: '1px solid #FFFFFF' ,
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

function createData(cafe,title,key1,key2,key3,key4,key5) {
  return { cafe, title, key1, key2, key3, key4, key5};
}

const rows = [
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차', '뒷좌석 관련 (급) 질문드립니다','좌석 선택', '좌석 선택', '좌석 좌석 적용', '좌석 경주 맛집', '선택 좌석 적용'),
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차','뒷좌석은 진짜 G90이 압권이네요 ㄷㄷ','해도 최고', '지금 진짜 수준', '완성 지금 진짜', '좌석 독일 나은', '전작 해도 최고'),
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차','이번 지구공의 운전석에 대한 소감','실망 화면 높낮이', '디자인 실망 화면', '디자인 실망', '내비게이션 디자인 실망', '감성 무시 대충'),
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차','회원님들 보르도브라운 시트 색상 어떠신가요! 실제로 받으신분들이용 ㅜㅜ','가요 신가 용저', '용저 개인', '용저 개인 의견', '실제 보르도', '시트 보시 가요'),
  createData('★제네시스 G90 풀체인지 공식대표카페★RS4가격,출시일,전기차','시트 관리.','시트 관리 시트', '시트 노하우', '관리 시트 노하우', '노하우 신분', '시트 노하우 신분'),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} >
     
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
              <StyledTableCell scope="row" component="th">{row.cafe}</StyledTableCell>
              <StyledTableCell align="center">{row.title}</StyledTableCell>
              <StyledTableCell align="center">{row.key1},{row.key2},
              {row.key3},{row.key4},{row.key5}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}