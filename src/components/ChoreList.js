import React from 'react'
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

const ChoreList = (props) => {
  let propData = props.data;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Chore Name</StyledTableCell>
            <StyledTableCell align="center">Chore Desc</StyledTableCell>
            <StyledTableCell align="center">Chore Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {propData.map((e) => (
            <StyledTableRow>
              <StyledTableCell align="center">{e.name}</StyledTableCell>
              <StyledTableCell align="center">{e.desc}</StyledTableCell>
              <StyledTableCell align="center">{e.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    // <table style={{display: "flex", justifyContent: "center"}}> <br/>
    //     <tr>
    //         <th>Chore Name</th>
    //         <th>Chore Description</th>
    //         <th>Chore Date</th>
    //     </tr>
    //     {propData.map((e) =>
    //     <tr>
    //         <td>{e.name}</td>
    //         <td>{e.desc}</td>
    //         <td>{e.date}</td>
    //     </tr>
    //     )}
    // </table>
  )
}

export default ChoreList