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

export default function OutlinedChips(args) {
  const classes = useStyles();

  const [lastClick, setClick] = useState("");
  const [lastDelete, setDelete] = useState("");

  const handleClick = (event) => {
    setClick(event.target.textContent);
  };

  return (
    <div>
      <div className={classes.root}>
        <Chip label="Basic" variant="outlined" onClick={(event) => handleClick(event)}/>
        <Chip label="Disabled" disabled variant="outlined" onClick={(event) => handleClick(event)}/>
        <Chip
          avatar={<Avatar>M</Avatar>}
          label="Clickable"
          onClick={(event) => handleClick(event)}
          variant="outlined"
        />
        <Chip
          avatar={<Avatar {...args}>{args.children}</Avatar>}
          label="Deletable"
          onClick={(event) => handleClick(event)}
          onDelete={() => setDelete("Deletable")}
          variant="outlined"
        />
        <Chip
          icon={<FaceIcon />}
          label="Clickable deletable"
          onClick={(event) => handleClick(event)}
          onDelete={() => setDelete("Clickable deletable")}
          variant="outlined"
        />
        <Chip
          label="Custom delete icon"
          onClick={(event) => handleClick(event)}
          onDelete={() => setDelete("Custom delete icon")}
          deleteIcon={<DoneIcon />}
          variant="outlined"
        />
        <Chip label="Clickable link" component="a" href="#chip" clickable variant="outlined" />
        <Chip
          avatar={<Avatar>M</Avatar>}
          label="Primary clickable"
          clickable
          color="primary"
          onClick={(event) => handleClick(event)}
          onDelete={() => setDelete("Primary clickable")}
          deleteIcon={<DoneIcon />}
          variant="outlined"
        />
        <Chip
          icon={<FaceIcon />}
          label="Primary clickable with face"
          clickable
          color="primary"
          onClick={(event) => handleClick(event)}
          onDelete={() => setDelete("Primary clickable with face")}
          deleteIcon={<DoneIcon />}
          variant="outlined"
        />
        <Chip label="Deletable primary"
              onClick={(event) => handleClick(event)}
              onDelete={() => setDelete("Deletable primary")}
              color="primary"
              variant="outlined" />
        <Chip
          icon={<FaceIcon />}
          label="Deletable secondary"
          onClick={(event) => handleClick(event)}
          onDelete={() => setDelete("Deletable secondary")}
          color="secondary"
          variant="outlined"
        />
      </div>
      <p id={"lastOutlinedClickInfo"}>You clicked on: {lastClick}</p>
      <p id={"lastOutlinedDeleteInfo"}>You delete : {lastDelete}</p>
    </div>
  );
}
