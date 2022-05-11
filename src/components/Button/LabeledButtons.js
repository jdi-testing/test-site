import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons({id}) {
  const classes = useStyles();
  const [text, setText] = useState("");
  const handleClick = (event) => {
    setText(event.target.textContent);
  };

  return (
    <div>
      <Button
        id={`${id}-delete`}
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={(event) => handleClick(event)}
      >
        Delete
      </Button>
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
      <Button
        id={`${id}-send`}
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon />}
        onClick={(event) => handleClick(event)}
      >
        Send
      </Button>
      <Button
        id={`${id}-upload`}
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
        onClick={(event) => handleClick(event)}
      >
        Upload
      </Button>
      <Button
        id={`${id}-talk`}
        variant="contained"
        disabled
        color="secondary"
        className={classes.button}
        startIcon={<KeyboardVoiceIcon />}
        onClick={(event) => handleClick(event)}
      >
        Talk
      </Button>
      <Button
        id={`${id}-save`}
        variant="contained"
        color="secondary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
        onClick={(event) => handleClick(event)}
      >
        Save
      </Button>
      <Button
        id={`${id}-save-all`}
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        onClick={(event) => handleClick(event)}
      >
        Save all
      </Button>
      <p id={`${id}-last-click`}>Last click: {text}</p>
    </div>
  );
}
