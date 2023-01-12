import React, {useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";

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

export default function ROsimilarityTable({selectId}) {

  // API 호출
  const [similarRO, setsimilarRO] = useState([]);
  
  useEffect(() => {
    const fetchsimilarRO = async () => {
      
        const response = await axios.get(`https://kw-dormitory.k-net.kr/api/CAs/${Number(selectId)}`);
        setsimilarRO(response.data.ros);

    };

    fetchsimilarRO();
  }, []);

  console.log("ROsimilarityTable.js ",similarRO)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{width: '5%'}} align="center">차종</StyledTableCell>
            <StyledTableCell style={{width: '20%'}} align="center">현상</StyledTableCell>
            <StyledTableCell style={{width: '30%'}} align="center">특이사항&nbsp;</StyledTableCell>
            <StyledTableCell style={{width: '7%'}} align="center">위치&nbsp;</StyledTableCell>
            <StyledTableCell style={{width: '7%'}} align="center">문제현상&nbsp;</StyledTableCell>
            <StyledTableCell style={{width: '13%'}} align="center">문제점&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {similarRO.map((row) => (
            <StyledTableRow key={row.vehicleType}>
              <StyledTableCell style={{width: '5%'}} align="center" component="th" scope="row">
                {row.vehicleType}
              </StyledTableCell>
              <StyledTableCell style={{width: '20%'}} align="center">{row.subPhenom}</StyledTableCell>
              <StyledTableCell style={{width: '30%'}} align="center">{row.specialNote}</StyledTableCell>
              <StyledTableCell style={{width: '7%'}} align="center">{row.location}</StyledTableCell>
              <StyledTableCell style={{width: '7%'}} align="center">{row.problematic}</StyledTableCell>
              <StyledTableCell style={{width: '13%'}} align="center">{row.cause}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}