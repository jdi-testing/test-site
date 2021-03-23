import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function GroupOrientation() {
  const classes = useStyles();
  const [text, setText] = useState("");
  const handleClick = (event) => {
    setText(event.target.textContent);
  };

  return (
    <div className={classes.root}>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="contained"
      >
        <Button onClick={(event) => handleClick(event)}>One</Button>
        <Button onClick={(event) => handleClick(event)}>Two</Button>
        <Button onClick={(event) => handleClick(event)}>Three</Button>
      </ButtonGroup>
      <p id={"verticalLastClick"}>Last click: {text}</p>
    </div>
  );
}
