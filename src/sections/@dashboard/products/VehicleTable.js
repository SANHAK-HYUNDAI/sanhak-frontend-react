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

function createData(projectName, type) {
  return { projectName, type };
}

const rows = [
  createData('BD', 'k3'),
  createData('CK', '스팅어'),
  createData('HM', '모하비'),
  createData('JX1', 'gv80'),
  createData('KH', 'k9'),
  createData('LF', '소나타'),
  createData('LFE', '소나타 하이브리드'),
  createData('PS', '쏘울'),
  createData('QL', '스포티지'),
  createData('RG3', 'g80'),
  createData('RJ', 'k9'),
  createData('RP', '카렌스'),
  createData('SK3', '쏘울 후속'),
  createData('SK3EV', '쏘울 전기차'),
  createData('SL', '스포티지'),
  createData('SP2', '카렌스 후속'),
  createData('YD', 'k3')
];

export default function MakeTable() {
  return (
    <TableContainer component={Paper}  sx={{ width: '50%', margin: 4 }}>
      <Table aria-label="customized table" size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell>Project Name</StyledTableCell>
            <StyledTableCell>Type</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.projectName}>
              <StyledTableCell component="th" scope="row">
                {row.projectName}
              </StyledTableCell>
              <StyledTableCell>{row.type}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

