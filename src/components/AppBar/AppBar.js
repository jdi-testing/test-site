import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@icons/material/MenuIcon';
import MButton from '@material-ui/core/Button';

export default function BuildAppBar(props) {

    return (
    <AppBar {...props}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <MButton color="inherit">Login</MButton>
      </Toolbar>
    </AppBar>
    );
}