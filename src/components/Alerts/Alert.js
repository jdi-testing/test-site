import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Alerts() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <div className={classes.root}>
      <h1>Alerts</h1>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
      <h2>Description</h2>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert —
        {' '}
        <strong>check it out!</strong>
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert —
        {' '}
        <strong>check it out!</strong>
      </Alert>
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert —
        {' '}
        <strong>check it out!</strong>
      </Alert>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert —
        {' '}
        <strong>check it out!</strong>
      </Alert>
      <h2>Actions</h2>
      <Collapse in={open}>
        <Alert
          action={(
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          )}
        >
          Close me!
        </Alert>
      </Collapse>
      <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Re-open
      </Button>
      <h2>Icon</h2>
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        This is a success alert — check it out!
      </Alert>
      <Alert iconMapping={{ success: <CheckCircleOutlineIcon fontSize="inherit" /> }}>
        This is a success alert — check it out!
      </Alert>
      <Alert icon={false} severity="success">
        This is a success alert — check it out!
      </Alert>
      <h2>Variants</h2>
      <Alert variant="outlined" severity="error">
        This is an error alert — outlined
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is a warning alert — outlined
      </Alert>
      <Alert variant="filled" severity="info">
        This is an info alert — filled
      </Alert>
      <Alert variant="filled" severity="success">
        This is a success alert — filled
      </Alert>
    </div>
  );
}
