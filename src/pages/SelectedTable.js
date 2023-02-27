import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import host from "../api/host";

const hostName = host;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.root}`]: {
    border: '1px solid #B9B9B9',
    radius: '4px',
    '&$focusVisible': {
      backgroundColor: theme.palette.action.selected,
    },
    '&$selected, &$selected:hover': {
      backgroundColor: theme.palette.action.selected,
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
        transition: theme.transitions.create('backgroundcolor', {
        duration: theme.transitions.duration.shortest,
      }), 
      textDecoration: 'none',
      backgroundColor: theme.palette.action.hover,
    },
    },
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    }
  ));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor:theme.palette.common.white,
  },
  
}));


export default function SelectedTable({selectId}) {

  console.log("selectedtable page : ", Number(selectId));

  // API 호출
  const [row, setRow] = useState([]);
  
  useEffect(() => {
    const fetchOneRow = async () => {
      
        const response = await axios.get(`${hostName}/api/CAs/${Number(selectId)}`);
        setRow(response.data);
    };

    fetchOneRow();
  }, []);

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
            <StyledTableRow key={row.cafeName}>
              <StyledTableCell component="th" scope="row">{row.cafeName}</StyledTableCell>
              <StyledTableCell align="center">{row.title}</StyledTableCell>
              <StyledTableCell align="center">{row.keywords}</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}