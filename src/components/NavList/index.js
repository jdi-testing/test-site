import React, { useState } from 'react';
import Link from 'next/link';

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const NavList = () => {
  const [openLists, setOpenLists] = useState([]);

  const handleClick = (id) => {
    console.log(openLists, 'openLists');
    console.log(id, 'id');
    let newList = [...openLists];
    const isOpen = newList.some((i) => i === id);

    if (isOpen) {
      newList = newList.filter((i) => i !== id);
      return setOpenLists(newList);
    }

    newList.push(id);
    setOpenLists(newList);
  };

  const checkIfOpen = (id) => {
    const isOpen = openLists.some((i) => i === id);
    return isOpen;
  };

  return (
    <div>
      <ListSubheader component="div" id="nested-list-subheader-inputs" disableSticky>
        Inputs
      </ListSubheader>

      <List component="div" disablePadding>
        <Link href="/buttons">
          <ListItem button>
            <ListItemText primary="Buttons" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/button_groups">
          <ListItem button>
            <ListItemText primary="Button Groups" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/checkboxes">
          <ListItem button>
            <ListItemText primary="Checkbox" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/floating_action_button">
          <ListItem button>
            <ListItemText primary="Floating Action Button" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/date_picker">
          <ListItem button>
            <ListItemText primary="Date / Time" />
          </ListItem>
        </Link>
      </List>

      <List component="div" disablePadding>
        <Link href="/radio">
          <ListItem button>
            <ListItemText primary="Radio" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/selects">
          <ListItem button>
            <ListItemText primary="Select" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/sliders">
          <ListItem button>
            <ListItemText primary="Slider" />
          </ListItem>
        </Link>
      </List>

      <List component="div" disablePadding>
        <Link href="/basic_switches">
          <ListItem button>
            <ListItemText primary="Switch" />
          </ListItem>
        </Link>
      </List>

      <List component="div" disablePadding>
        <Link href="/text_field">
          <ListItem button>
            <ListItemText primary="Text Field" />
          </ListItem>
        </Link>
      </List>

      <ListItem button onClick={() => handleClick(10)}>
        <ListItemText primary="Transfer List" />
        {checkIfOpen(10) ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={checkIfOpen(10)} timeout="auto">
        <List component="div" disablePadding>
          <Link href="/simple_transfer_list">
            <ListItem button>
              <ListItemText primary="Simple Transfer List" />
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/enhanced_transfer_list">
            <ListItem button>
              <ListItemText primary="Enhanced Transfer List" />
            </ListItem>
          </Link>
        </List>
      </Collapse>

      <ListSubheader component="div" id="nested-list-subheader-navigation" disableSticky>
        Navigation
      </ListSubheader>
      <List component="div" disablePadding>
        <Link href="/bottom_navigation">
          <ListItem button>
            <ListItemText primary="Bottom Navigation" />
          </ListItem>
        </Link>
      </List>

      <ListItem button onClick={() => handleClick(11)}>
        <ListItemText primary="Breadcrumbs" />
        {checkIfOpen(11) ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={checkIfOpen(11)} timeout="auto">
        <List component="div" disablePadding>
          <Link href="/simple_breadcrumbs">
            <ListItem button>
              <ListItemText primary="Simple Breadcrumbs" />
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/router_breadcrumbs">
            <ListItem button>
              <ListItemText primary="Router Breadcrumbs" />
            </ListItem>
          </Link>
        </List>
      </Collapse>

      <ListItem button onClick={() => handleClick(12)}>
        <ListItemText primary="Drawer" />
        {checkIfOpen(12) ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={checkIfOpen(12)} timeout="auto">
        <List component="div" disablePadding>
          <Link href="/temporary_drawer">
            <ListItem button>
              <ListItemText primary="Temporary Drawer" />
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/swipeable_drawer">
            <ListItem button>
              <ListItemText primary="Swipeable Drawer" />
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/responsive_drawer">
            <ListItem button>
              <ListItemText primary="Responsive Drawer" />
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/persistent_drawer">
            <ListItem button>
              <ListItemText primary="Persistent Drawer" />
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/mini_drawer">
            <ListItem button>
              <ListItemText primary="Mini Drawer" />
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/permanent_drawer">
            <ListItem button>
              <ListItemText primary="Permanent Drawer" />
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/clipped_drawer">
            <ListItem button>
              <ListItemText primary="Clipped Drawer" />
            </ListItem>
          </Link>
        </List>
      </Collapse>
      <List component="div" disablePadding>
        <Link href="/link">
          <ListItem button>
            <ListItemText primary="Link" />
          </ListItem>
        </Link>
      </List>

      <ListItem button onClick={() => handleClick(13)}>
        <ListItemText primary="Menu" />
        {checkIfOpen(13) ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={checkIfOpen(13)} timeout="auto">
        <List component="div" disablePadding>
          <Link href="/simple_menu">
            <ListItem button>
              <ListItemText primary="Simple Menu" />
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/context_menu">
            <ListItem button>
              <ListItemText primary="Context Menu" />
            </ListItem>
          </Link>
        </List>
      </Collapse>

      <List component="div" disablePadding>
        <Link href="/steppers">
          <ListItem button>
            <ListItemText primary="Stepper" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/tabs">
          <ListItem button>
            <ListItemText primary="Tabs" />
          </ListItem>
        </Link>
      </List>

      <ListSubheader component="div" id="nested-list-subheader-navigation" disableSticky>
        Feedback
      </ListSubheader>
      <List component="div" disablePadding>
        <Link href="/progress">
          <ListItem button>
            <ListItemText primary="Progress" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/dialog">
          <ListItem button>
            <ListItemText primary="Dialog" />
          </ListItem>
        </Link>
      </List>

      <List component="div" disablePadding>
        <Link href="/snackbar">
          <ListItem button>
            <ListItemText primary="Snackbar" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/backdrop">
          <ListItem button>
            <ListItemText primary="Backdrop" />
          </ListItem>
        </Link>
      </List>

      <ListSubheader component="div" id="nested-list-subheader-navigation" disableSticky>
        Surfaces
      </ListSubheader>
      <ListItem button onClick={() => handleClick(15)}>
        <ListItemText primary="App Bar" />
        {checkIfOpen(15) ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={checkIfOpen(15)} timeout="auto">
        <List component="div" disablePadding>
          <Link href="/appbar_surface">
            <ListItem button>
              <ListItemText primary="Simple App Bars" />
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/appbar_bottom">
            <ListItem button>
              <ListItemText primary="Bottom App Bar" />
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/appbar_scroll_hide">
            <ListItem button>
              <ListItemText primary="Hide App Bar" />
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/appbar_elevate">
            <ListItem button>
              <ListItemText primary="Elevate App Bar" />
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/appbar_back_to_top">
            <ListItem button>
              <ListItemText primary="Back to top" />
            </ListItem>
          </Link>
        </List>
      </Collapse>

      <List component="div" disablePadding>
        <Link href="/accordion_surface">
          <ListItem button>
            <ListItemText primary="Accordion" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/paper_surface">
          <ListItem button>
            <ListItemText primary="Paper" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/card_surface">
          <ListItem button>
            <ListItemText primary="Card" />
          </ListItem>
        </Link>
      </List>

      <ListSubheader component="div" id="nested-list-subheader-navigation" disableSticky>
        Data Display
      </ListSubheader>
      <List component="div" disablePadding>
        <Link href="/avatar">
          <ListItem button>
            <ListItemText primary="Avatar" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/badge">
          <ListItem button>
            <ListItemText primary="Badge" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/chips">
          <ListItem button>
            <ListItemText primary="Chips" />
          </ListItem>
        </Link>
      </List>
      <ListItem button onClick={() => handleClick(19)}>
        <ListItemText primary="Dividers" />
        {checkIfOpen(19) ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={checkIfOpen(19)} timeout="auto">
        <List component="div" disablePadding>
          <Link href="/inset_divider">
            <ListItem button>
              <ListItemText primary="Inset Divider" />
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/vertical_divider">
            <ListItem button>
              <ListItemText primary="Vertical Divider" />
            </ListItem>
          </Link>
        </List>
      </Collapse>
      <List component="div" disablePadding>
        <Link href="/icons">
          <ListItem button>
            <ListItemText primary="Icons" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/material_icons">
          <ListItem button>
            <ListItemText primary="Material Icons" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/simple_list">
          <ListItem button>
            <ListItemText primary="List" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/simple_table">
          <ListItem button>
            <ListItemText primary="Table" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/tooltip">
          <ListItem button>
            <ListItemText primary="Tooltip" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/typography">
          <ListItem button>
            <ListItemText primary="Typography" />
          </ListItem>
        </Link>
      </List>

      <ListSubheader component="div" id="nested-list-subheader-navigation" disableSticky>
        Layout
      </ListSubheader>
      <List component="div" disablePadding>
        <Link href="/box_layout">
          <ListItem button>
            <ListItemText primary="Box" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/container_layout">
          <ListItem button>
            <ListItemText primary="Container" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/grid_layout">
          <ListItem button>
            <ListItemText primary="Grid" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/grid_list_layout">
          <ListItem button>
            <ListItemText primary="Grid List" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/hidden_layout">
          <ListItem button>
            <ListItemText primary="Hidden" />
          </ListItem>
        </Link>
      </List>

      <ListSubheader component="div" id="nested-list-subheader-navigation" disableSticky>
        Utils
      </ListSubheader>
      <List component="div" disablePadding>
        <Link href="/click_away_listener">
          <ListItem button>
            <ListItemText primary="Click Away Listener" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/modal">
          <ListItem button>
            <ListItemText primary="Modal" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/popover">
          <ListItem button>
            <ListItemText primary="Popover" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/popper">
          <ListItem button>
            <ListItemText primary="Popper" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/portal">
          <ListItem button>
            <ListItemText primary="Portal" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/textarea_autosize">
          <ListItem button>
            <ListItemText primary="Textarea Autosize" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/transitions">
          <ListItem button>
            <ListItemText primary="Transitions" />
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/use_media_query">
          <ListItem button>
            <ListItemText primary="Use Media Query" />
          </ListItem>
        </Link>
      </List>

    </div>
  );
};

export default NavList;