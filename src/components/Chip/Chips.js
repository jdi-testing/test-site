import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Chips(args) {
  const classes = useStyles();

  const [lastClick, setClick] = useState("");
  const [lastDelete, setDelete] = useState("");

  const handleClick = (event) => {
    setClick(event.target.textContent);
  };

  return (
    <div>
      <h1>Chips</h1>
      <div className={classes.root}>
        <Chip label="Basic" />
        <Chip label="Disabled" disabled />
        <Chip avatar={<Avatar>M</Avatar>}
              label="Clickable"
              onClick={(event) => handleClick(event)} />
        <Chip
          avatar={<Avatar {...args}>{args.children}</Avatar>}
          label="Deletable"
          onDelete={() => setDelete("Deletable")}
        />
        <Chip
          icon={<FaceIcon />}
          label="Clickable deletable"
          onClick={(event) => handleClick(event)}
          onDelete={() => setDelete("Clickable deletable")}
        />
        <Chip
          label="Custom delete icon"
          onClick={(event) => handleClick(event)}
          onDelete={() => setDelete("Custom delete icon")}
          deleteIcon={<DoneIcon />}
        />
        <Chip label="Clickable Link" component="a" href="#chip" clickable />
        <Chip
          avatar={<Avatar>M</Avatar>}
          label="Primary clickable"
          clickable
          color="primary"
          onDelete={() => setDelete("Primary clickable")}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          icon={<FaceIcon />}
          label="Primary clickable with face"
          clickable
          onClick={(event) => handleClick(event)}
          color="primary"
          onDelete={() => setDelete("Primary clickable with face")}
          deleteIcon={<DoneIcon />}
        />
        <Chip label="Deletable primary"
              onDelete={() => setDelete("Deletable primary")}
              color="primary" />
        <Chip
          icon={<FaceIcon />}
          label="Deletable secondary"
          onDelete={() => setDelete("Deletable secondary")}
          color="secondary"
        />
      </div>
      <p id={"lastClickInfo"}>You clicked on: {lastClick}</p>
      <p id={"lastDeleteInfo"}>You delete : {lastDelete}</p>
      <p id="chip">Clickable link paragraph</p>
    </div>
  );
}
