import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

const initialState = {
  mouseX: null,
  mouseY: null,
};

export default function ContextMenu() {
  const [state, setState] = React.useState(initialState);

  const handleClick = (event) => {
    event.preventDefault();
    setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };

  const handleClose = () => {
    setState(initialState);
  };

  return (
    <div>
      <h1>Context Menu</h1>
      <div onContextMenu={handleClick} style={{ cursor: 'context-menu' }}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum
          purus, bibendum sit amet vulputate eget, porta semper ligula. Donec
          bibendum vulputate erat, ac fringilla mi finibus nec. Donec ac dolor sed
          dolor porttitor blandit vel vel purus.
        </Typography>
        <Menu
          keepMounted
          open={state.mouseY !== null}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={
            state.mouseY !== null && state.mouseX !== null
              ? { top: state.mouseY, left: state.mouseX }
              : undefined
          }
        >
          <MenuItem onClick={handleClose}>Copy</MenuItem>
          <MenuItem onClick={handleClose}>Print</MenuItem>
          <MenuItem onClick={handleClose}>Highlight</MenuItem>
          <MenuItem onClick={handleClose}>Email</MenuItem>
        </Menu>
      </div>
    </div>
  );
}
