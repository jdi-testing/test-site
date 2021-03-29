import React from 'react';
import PortalClickAway from "./Portal";
import ClickAway from "./SimpleClickAwayListener";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  click_root: {
    position: 'relative',
    display: 'flex',
  },

}));


export default function ClickAwayListeners() {
  const classes = useStyles();

  return (
    <div>
      <h1>Click Away Listener</h1>
      <h2>Example</h2>
      <div className={classes.click_root}>
      <ClickAway id={"simpleClickAway"} className={classes.click_root}/>
      </div>
      <h2>Portal</h2>
      <div className={classes.click_root}>
      <PortalClickAway id={"portalClickAway"} className={classes.click_root}/>
      </div>
    </div>
  );
}