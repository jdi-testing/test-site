import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing(1),
  },
}));

function BreakpointDown(props) {
  const classes = useStyles();
  const { width } = props;

  return (
    <div className={classes.root}>
      <h1>Hidden</h1>
      <Typography variant="subtitle1">
        Current width: {width}
      </Typography>
      <div className={classes.container}>
        <Hidden xsDown id={"hiddenXsDown"}>
          <Paper className={classes.paper}>xsDown</Paper>
        </Hidden>
        <Hidden smDown id={"hiddenSmDown"}>
          <Paper className={classes.paper}>smDown</Paper>
        </Hidden>
        <Hidden mdDown id={"hiddenMdDown"}>
          <Paper className={classes.paper}>mdDown</Paper>
        </Hidden>
        <Hidden lgDown id={"hiddenLgDown"}>
          <Paper className={classes.paper}>lgDown</Paper>
        </Hidden>
        <Hidden xlDown id={"hiddenXlDown"}>
          <Paper className={classes.paper}>xlDown</Paper>
        </Hidden>
      </div>
    </div>
  );
}

BreakpointDown.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(BreakpointDown);