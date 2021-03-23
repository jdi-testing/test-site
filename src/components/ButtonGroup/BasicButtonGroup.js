import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BasicButtonGroup() {
  const classes = useStyles();
  const [text, setText] = useState("");
  const handleClick = (event) => {
    setText(event.target.textContent);
  };

  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={(event) => handleClick(event)}>One</Button>
        <Button onClick={(event) => handleClick(event)}>Two</Button>
        <Button onClick={(event) => handleClick(event)}>Three</Button>
      </ButtonGroup>
      <p id={"basicLastClick"}>Last click: {text}</p>
    </div>
  );
}
