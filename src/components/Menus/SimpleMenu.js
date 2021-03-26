import React from 'react';

import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import TypographyMenu from "./IconsMenu";
import SelectedMenu from "./SelectedMenu";
import LongMenu from "./LongMenu";

export default function BasicMenu(args) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentMenu, setMenu] = React.useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    setMenu(event.currentTarget.textContent);
  };

  return (
    <div>
      <h1>Menus</h1>
      <h2>Simple menu</h2>
      <Button onClick={handleClick}>Open Menu</Button>
      <Menu
        {...args}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <p id={"selectedItem"}>Selected menu: {currentMenu}</p>
      <h2>Icon menu</h2>
      <TypographyMenu id={"iconMenu"} />
      <h2>Selected menu</h2>
      <SelectedMenu id={"selectedMenu"} />
      <h2>Max height menu</h2>
      <LongMenu id={"longMenu"} />
    </div>
  );
}
