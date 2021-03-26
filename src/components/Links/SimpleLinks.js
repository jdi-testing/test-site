import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Links() {
  const classes = useStyles();

  return (
    <div>
      <h1>Link</h1>
      <Typography className={classes.root}>
        <Link href="#link1" >
          Link
        </Link>
        <Link href="#link2" color="inherit">
          {'color="inherit"'}
        </Link>
        <Link href="#link3" variant="body2">
          {'variant="body2"'}
        </Link>
      </Typography>
      <br/>
      <br/>
      <br/>
      <Typography id={"link1"}>Link1</Typography>
      <Typography id={"link2"}>Link2</Typography>
      <Typography id={"link3"}>Link3</Typography>
    </div>
  );
}