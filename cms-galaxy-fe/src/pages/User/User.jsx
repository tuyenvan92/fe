import React,{useState,useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SvgIcon from '@mui/material/SvgIcon';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function User() {

  return (
    <div className='users'>
      <div className="group">
        <h2>User</h2>
        <Button variant="contained" size="small" sx={{ bgcolor: 'secondary.main' }}>
          + ADD
        </Button>
      </div>

      <Dialog open={false} onClose={() => {}}>
        <DialogTitle>Add user</DialogTitle>
        <DialogContent>
          {/* <DialogContentText></DialogContentText> */}
          <TextField margin="dense" id="" label="Name" type="text" fullWidth variant="standard" name="lastName" />
          <TextField margin="dense" id="" label="Email" type="email" fullWidth variant="standard" name="email" />
          <TextField margin="dense" id="" label="Role" type="text" fullWidth variant="standard" name="role" />
        </DialogContent>
        <DialogActions>
          <Button>Cancel</Button>
          <Button>Submit</Button>
        </DialogActions>
      </Dialog>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[1,2,3,4,5].map((user) => (
              <TableRow
                key={user}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user}
                </TableCell>
                <TableCell>{user}</TableCell>
                <TableCell>{user}</TableCell>
                <TableCell><SvgIcon component={ModeEditIcon} inheritViewBox sx={{ color: 'primary.main' }} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
