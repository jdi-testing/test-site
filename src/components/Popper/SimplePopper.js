import React from 'react';
import Popper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/core/styles';

//const SimplePopper = (props) => <div>
//                                                                <button aria-describedby='popper' type="button">
//                                                                  Toggle Popper
//                                                                </button>
//                                                                <MP {...props}>
//                                                                  <div>The content of the Popper.</div>
//                                                                </MP>
//                                                              </div>
//                                                              ;

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

function SimplePopper() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <button aria-describedby="buttonPopper" type="button" onClick={handleClick}>
        Toggle Popper
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>The content of the Popper.</div>
      </Popper>
    </div>
  );
}

export default SimplePopper;