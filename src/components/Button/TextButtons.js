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

export default function TextButtons() {
  const classes = useStyles();
  const [text, setText] = useState("");
  const handleClick = (event) => {
    setText(event.target.textContent);
  };

  return (
    <div className={classes.root}>
      <Button onClick={(event) => handleClick(event)}>Default</Button>
      <Button color="primary" onClick={(event) => handleClick(event)}>Primary</Button>
      <Button color="secondary" onClick={(event) => handleClick(event)}>Secondary</Button>
      <Button disabled onClick={(event) => handleClick(event)}>Disabled</Button>
      <Button href="#textLastClick" color="primary" onClick={(event) => handleClick(event)}>
        Link
      </Button>
      <p id={"textLastClick"}>Last click: {text}</p>
    </div>
  );
}
