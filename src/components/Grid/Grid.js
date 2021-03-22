import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ComplexGrid from "./ComplexGrid";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div>
      <h1>Grids</h1>
      <h2>Basic grid</h2>
      <div className={classes.root}>
        <Grid container spacing={3} id={"basicGrid"}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={3}>
            <TextField className={classes.paper} defaultValue={"xs=31"}/>
          </Grid>
          <Grid item xs={3}>
            <TextField className={classes.paper} defaultValue={"xs=32"}/>
          </Grid>
          <Grid item xs={3}>
            <TextField className={classes.paper} defaultValue={"xs=33"}/>
          </Grid>
          <Grid item xs={3}>
            <TextField className={classes.paper} defaultValue={"xs=34"}/>
          </Grid>
        </Grid>
      </div>
      <h2>Complex grid</h2>
      <ComplexGrid />
    </div>
  );
}
