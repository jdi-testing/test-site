import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import FakedReferencePopper from "./FakedReferencePopper";

const useStyles = makeStyles((theme) => ({
  root: {
    hight: 800,
    width: 600,
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function PositionedPopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const classes = useStyles();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <div>
      <h1>Poppers</h1>
      <h2>Positioned popper</h2>
      <div className={classes.root} >
        <Popper open={open} anchorEl={anchorEl}  placement={placement} transition id={"positionedPopper"}>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <Typography className={classes.typography}>The content of the Popper.</Typography>
              </Paper>
            </Fade>
          )}
        </Popper>

        <Grid container justify="center">
          <Grid item container xs={6} alignItems="center" direction="column">
            <Grid item>
               <Button onClick={handleClick('top')}>top</Button>
            </Grid>
            <Grid item>
              <Button onClick={handleClick('left')}>left</Button>
            </Grid>
            <Grid item>
              <Button onClick={handleClick('right')}>right</Button>
            </Grid>
            <Grid item>
              <Button onClick={handleClick('bottom')}>bottom</Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <h2>Fake reference object</h2>
      <FakedReferencePopper />
    </div>
  );
}

