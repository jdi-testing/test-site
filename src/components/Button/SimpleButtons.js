import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();
  const [text, setText] = useState("");
  const handleClick = (event) => {
    setText(event.target.textContent);
  };

  return (
    <div className={classes.root}>
      <Button variant="contained" onClick={(event) => handleClick(event)}>Default</Button>
      <Button variant="contained" onClick={(event) => handleClick(event)} color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary" onClick={(event) => handleClick(event)}>
        Secondary
      </Button>
      <Button variant="contained" disabled onClick={(event) => handleClick(event)}>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#simpleLastClick" onClick={(event) => handleClick(event)}>
        Link
      </Button>
      <p id={"simpleLastClick"}>Last click: {text}</p>
    </div>
  );
}
