import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();
  const [text, setText] = useState("");

  const handlePaperClick = (event) => {
    setText(event.target.textContent);
  };

  return (
    <div>
      <h1>Paper</h1>
      <div className={classes.root}>
        <Paper elevation={0} id="paperElevation0" onClick={(event) => handlePaperClick(event)}>Paper with elevation = 0</Paper>
        <Paper id="paperElevationDefault" onClick={(event) => handlePaperClick(event)}>Paper with default elavation</Paper>
        <Paper elevation={3} id="paperElevation3" onClick={(event) => handlePaperClick(event)}>Paper with elevation = 3</Paper>
        <Paper variant="outlined" id="paperOutlined" onClick={(event) => handlePaperClick(event)}>Outlined paper</Paper>
        <Paper variant="outlined" square id="paperOutlinedZero" onClick={(event) => handlePaperClick(event)}>Outlined square paper</Paper>
        <Paper id="lastClickContent">You clicked: {text}</Paper>
      </div>
    </div>
  );
}
