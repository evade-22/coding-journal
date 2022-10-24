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

const ContactList = ({details,handleRemove,handleUpdate}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">First Name</StyledTableCell>
            <StyledTableCell align="center">Last Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Message</StyledTableCell>
            <StyledTableCell align="center">
            <button type="button" onClick={handleRemove}>Clear All</button>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {details.map((detail) => (
            <StyledTableRow>
              <StyledTableCell align="center">{detail.id}</StyledTableCell>
              <StyledTableCell align="center">{detail.firstName}</StyledTableCell>
              <StyledTableCell align="center">{detail.lastName}</StyledTableCell>
              <StyledTableCell align="center">{detail.email}</StyledTableCell>
              <StyledTableCell align="center">{detail.message}</StyledTableCell>
              <StyledTableCell align="center">
                <button type="button" id={detail.id} 
                onClick={handleRemove}> Remove </button>
                <button type="button" id={detail.id} 
                onClick={handleUpdate}> Update </button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ContactList