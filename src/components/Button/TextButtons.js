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

export default function TextButtons({id}) {
  const classes = useStyles();
  const [text, setText] = useState("");
  const handleClick = (event) => {
    setText(event.target.textContent);
  };

  return (
    <div className={classes.root}>
      <Button id={`${id}-default`} onClick={(event) => handleClick(event)}>Default</Button>
      <Button id={`${id}-primary`} color="primary" onClick={(event) => handleClick(event)}>Primary</Button>
      <Button id={`${id}-secondary`} color="secondary" onClick={(event) => handleClick(event)}>Secondary</Button>
      <Button id={`${id}-disabled`} disabled onClick={(event) => handleClick(event)}>Disabled</Button>
      <Button id={`${id}-link`} href="#textLastClick" color="primary" onClick={(event) => handleClick(event)}>
        Link
      </Button>
      <p id={`${id}-last-click`}>Last click: {text}</p>
    </div>
  );
}
