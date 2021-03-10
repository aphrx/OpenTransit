import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Hidden } from '@material-ui/core';

import { useSelector } from 'react-redux';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable() {
  const classes = useStyles();
  const trains = useSelector((state) => state.trains)


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Train ID</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Line</TableCell>
            <TableCell align="right">Next Station</TableCell>
            <TableCell align="right">Direction</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trains.map((train) => (
            <TableRow key={train.train_id} >
              <TableCell component="th" scope="row">Train {train.train_id}</TableCell>
              <TableCell align="right">{train.train_id}</TableCell>
              <TableCell align="right">Line {train.line}</TableCell>
              <TableCell align="right">{train.stations[train.current][0]} Station</TableCell>
              <TableCell align="right">{train.direction}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
