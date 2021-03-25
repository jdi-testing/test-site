import React, {useState} from 'react'
import Link from 'next/link'

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


const NavList = () => {
  const [openLists, setOpenLists] = useState([])

  const handleClick = (id) => {
    console.log(openLists, 'openLists')
    console.log(id, 'id')
    let newList = [...openLists]
    const isOpen = newList.some(i => i === id)

    if (isOpen) {
      newList = newList.filter(i => i !== id)
      return setOpenLists(newList)
    }

    newList.push(id)
    setOpenLists(newList)
  }

  const checkIfOpen = (id) => {
    const isOpen = openLists.some(i => i === id)
    return isOpen
  }

  return (
    <div>
      <ListSubheader component="div" id="nested-list-subheader-inputs" disableSticky>
        Inputs
      </ListSubheader>

      <List component="div" disablePadding>
        <Link href="/buttons">
          <ListItem button>
            <ListItemText primary="Buttons"/>
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/button_groups">
          <ListItem button>
            <ListItemText primary="Button Groups"/>
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/checkboxes">
          <ListItem button>
            <ListItemText primary="Checkboxes"/>
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/floating_action_button">
          <ListItem button>
            <ListItemText primary="Floating Action Button"/>
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/date_picker">
          <ListItem button>
            <ListItemText primary="Date / Time"/>
          </ListItem>
        </Link>
      </List>

      <List component="div" disablePadding>
        <Link href="/radio">
          <ListItem button>
            <ListItemText primary="Radio"/>
          </ListItem>
        </Link>
      </List>

      <ListItem button onClick={() => handleClick(8)}>
        <ListItemText primary="Select"/>
        {checkIfOpen(8) ? <ExpandLess/> : <ExpandMore/>}
      </ListItem>
      <Collapse in={checkIfOpen(8)} timeout="auto">
        <List component="div" disablePadding>
          <Link href="/simple_select">
            <ListItem button>
              <ListItemText primary="Simple Select"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/disabled_select">
            <ListItem button>
              <ListItemText primary="Disabled Select"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/multiple_select">
            <ListItem button>
              <ListItemText primary="Multiple Select"/>
            </ListItem>
          </Link>
        </List>
      </Collapse>

      <ListItem button onClick={() => handleClick(9)}>
        <ListItemText primary="Slider"/>
        {checkIfOpen(9) ? <ExpandLess/> : <ExpandMore/>}
      </ListItem>
      <Collapse in={checkIfOpen(9)} timeout="auto">
        <List component="div" disablePadding>
          <Link href="/slider">
            <ListItem button>
              <ListItemText primary="Slider"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/range_slider">
            <ListItem button>
              <ListItemText primary="Range Slider"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/vertical_slider">
            <ListItem button>
              <ListItemText primary="Vertical Slider"/>
            </ListItem>
          </Link>
        </List>
      </Collapse>

      <List component="div" disablePadding>
        <Link href="/basic_switches">
          <ListItem button>
            <ListItemText primary="Switches"/>
          </ListItem>
        </Link>
      </List>

      <List component="div" disablePadding>
        <Link href="/text_field">
          <ListItem button>
            <ListItemText primary="Text Field"/>
          </ListItem>
        </Link>
      </List>

      <ListItem button onClick={() => handleClick(10)}>
        <ListItemText primary="Transfer List"/>
        {checkIfOpen(10) ? <ExpandLess/> : <ExpandMore/>}
      </ListItem>
      <Collapse in={checkIfOpen(10)} timeout="auto">
        <List component="div" disablePadding>
          <Link href="/simple_transfer_list">
            <ListItem button>
              <ListItemText primary="Simple Transfer List"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/enhanced_transfer_list">
            <ListItem button>
              <ListItemText primary="Enhanced transfer list"/>
            </ListItem>
          </Link>
        </List>
      </Collapse>

      <ListSubheader component="div" id="nested-list-subheader-navigation" disableSticky>
        Navigation
      </ListSubheader>
      <List component="div" disablePadding>
        <Link href="/button_navigation">
          <ListItem button>
            <ListItemText primary="Button Navigation"/>
          </ListItem>
        </Link>
      </List>

      <ListItem button onClick={() => handleClick(11)}>
        <ListItemText primary="Breadcrumbs"/>
        {checkIfOpen(11) ? <ExpandLess/> : <ExpandMore/>}
      </ListItem>
      <Collapse in={checkIfOpen(11)} timeout="auto">
        <List component="div" disablePadding>
          <Link href="/simple_breadcrumbs">
            <ListItem button>
              <ListItemText primary="Simple Breadcrumbs"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/router_breadcrumbs">
            <ListItem button>
              <ListItemText primary="Router Breadcrumbs"/>
            </ListItem>
          </Link>
        </List>
      </Collapse>

      <ListItem button onClick={() => handleClick(12)}>
        <ListItemText primary="Drawer"/>
        {checkIfOpen(12) ? <ExpandLess/> : <ExpandMore/>}
      </ListItem>
      <Collapse in={checkIfOpen(12)} timeout="auto">
        <List component="div" disablePadding>
          <Link href="/temporary_drawer">
            <ListItem button>
              <ListItemText primary="Temporary Drawer"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/responsive_drawer">
            <ListItem button>
              <ListItemText primary="Responsive Drawer"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/persistent_drawer">
            <ListItem button>
              <ListItemText primary="Persistent Drawer"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/mini_drawer">
            <ListItem button>
              <ListItemText primary="Mini Drawer"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/permanent_drawer">
            <ListItem button>
              <ListItemText primary="Permanent Drawer"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/clipped_drawer">
            <ListItem button>
              <ListItemText primary="Clipped Drawer"/>
            </ListItem>
          </Link>
        </List>
      </Collapse>
      <List component="div" disablePadding>
        <Link href="/link">
          <ListItem button>
            <ListItemText primary="Link"/>
          </ListItem>
        </Link>
      </List>

      <ListItem button onClick={() => handleClick(13)}>
        <ListItemText primary="Menu"/>
        {checkIfOpen(13) ? <ExpandLess/> : <ExpandMore/>}
      </ListItem>
      <Collapse in={checkIfOpen(13)} timeout="auto">
        <List component="div" disablePadding>
          <Link href="/simple_menu">
            <ListItem button>
              <ListItemText primary="Simple Menu"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/context_menu">
            <ListItem button>
              <ListItemText primary="Context Menu"/>
            </ListItem>
          </Link>
        </List>
      </Collapse>

      <ListItem button onClick={() => handleClick(14)}>
        <ListItemText primary="Stepper"/>
        {checkIfOpen(14) ? <ExpandLess/> : <ExpandMore/>}
      </ListItem>
      <Collapse in={checkIfOpen(14)} timeout="auto">
        <List component="div" disablePadding>
          <Link href="/simple_stepper">
            <ListItem button>
              <ListItemText primary="Simple Stepper"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/mobile_stepper">
            <ListItem button>
              <ListItemText primary="Mobile Stepper"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/stepper_with_option">
            <ListItem button>
              <ListItemText primary="Stepper With Option"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/non_linear_stepper">
            <ListItem button>
              <ListItemText primary="Non Linear Stepper"/>
            </ListItem>
          </Link>
        </List>
      </Collapse>

      <ListItem button onClick={() => handleClick(15)}>
        <ListItemText primary="Tabs"/>
        {checkIfOpen(15) ? <ExpandLess/> : <ExpandMore/>}
      </ListItem>
      <Collapse in={checkIfOpen(15)} timeout="auto">
        <List component="div" disablePadding>
          <Link href="/tab_panel">
            <ListItem button>
              <ListItemText primary="Tab Panel"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/vertical_tab">
            <ListItem button>
              <ListItemText primary="Vertical Tab"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/disabled_tab">
            <ListItem button>
              <ListItemText primary="Disabled Tab"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/prevent_scroll_buttons">
            <ListItem button>
              <ListItemText primary="Prevent Scroll Buttons"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/scrollable_tab">
            <ListItem button>
              <ListItemText primary="Scrollable Tab"/>
            </ListItem>
          </Link>
        </List>

      </Collapse>

      <ListSubheader component="div" id="nested-list-subheader-navigation" disableSticky>
        Feedback
      </ListSubheader>
      <ListItem button onClick={() => handleClick(16)}>
        <ListItemText primary="Progress"/>
        {checkIfOpen(16) ? <ExpandLess/> : <ExpandMore/>}
      </ListItem>
      <Collapse in={checkIfOpen(16)} timeout="auto">
        <List component="div" disablePadding>
          <Link href="/circular_indeterminate">
            <ListItem button>
              <ListItemText primary="Circular Indeterminate Menu"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/circular_determinate">
            <ListItem button>
              <ListItemText primary="Circular Determinate"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/circular_with_value_label">
            <ListItem button>
              <ListItemText primary="Circular With Value Label"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/linear_indeterminate">
            <ListItem button>
              <ListItemText primary="Linear Indeterminate"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/linear_determinate">
            <ListItem button>
              <ListItemText primary="Linear Determinate"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/linear_buffer">
            <ListItem button>
              <ListItemText primary="Linear Buffer"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/linear_with_value_label">
            <ListItem button>
              <ListItemText primary="Linear With Value Label"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/customized_progress_bars">
            <ListItem button>
              <ListItemText primary="Customized Progress Bars"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/delaying_appearance">
            <ListItem button>
              <ListItemText primary="Delaying Appearance"/>
            </ListItem>
          </Link>
        </List>
      </Collapse>

      <ListItem button onClick={() => handleClick(17)}>
        <ListItemText primary="Dialog"/>
        {checkIfOpen(17) ? <ExpandLess/> : <ExpandMore/>}
      </ListItem>
      <Collapse in={checkIfOpen(17)} timeout="auto">
        <List component="div" disablePadding>
          <Link href="/alert_dialog">
            <ListItem button>
              <ListItemText primary="Alert Dialog"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/confirmation_dialog">
            <ListItem button>
              <ListItemText primary="Confirmation Dialog"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/form_dialog">
            <ListItem button>
              <ListItemText primary="Form Dialog"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/list_items_dialog">
            <ListItem button>
              <ListItemText primary="List Items Dialog"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/scrollable_dialog">
            <ListItem button>
              <ListItemText primary="Scrollable Dialog"/>
            </ListItem>
          </Link>
        </List>
      </Collapse>

      <ListItem button onClick={() => handleClick(18)}>
        <ListItemText primary="Snackbar"/>
        {checkIfOpen(18) ? <ExpandLess/> : <ExpandMore/>}
      </ListItem>
      <Collapse in={checkIfOpen(18)} timeout="auto">
        <List component="div" disablePadding>
          <Link href="/simple_snackbar">
            <ListItem button>
              <ListItemText primary="Simple Snackbar"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/customized_snackbars">
            <ListItem button>
              <ListItemText primary="Customized Snackbars"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/positioned_snackbar">
            <ListItem button>
              <ListItemText primary="Positioned Snackbar"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/transitions_snackbar">
            <ListItem button>
              <ListItemText primary="Transitions Snackbar"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/consecutive_snackbars">
            <ListItem button>
              <ListItemText primary="Consecutive Snackbars"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/direction_snackbar">
            <ListItem button>
              <ListItemText primary="Direction Snackbar"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/fab_integration_snackbar">
            <ListItem button>
              <ListItemText primary="Fab Integration Snackbar"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/integration_notistack">
            <ListItem button>
              <ListItemText primary="Integration Notistack"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/long_text_snackbar">
            <ListItem button>
              <ListItemText primary="Long Text Snackbar"/>
            </ListItem>
          </Link>
        </List>
      </Collapse>

      <ListSubheader component="div" id="nested-list-subheader-navigation" disableSticky>
        Surfaces
      </ListSubheader>
      <List component="div" disablePadding>
        <Link href="/appbar_surface">
          <ListItem button>
            <ListItemText primary="AppBar"/>
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/accordion_surface">
          <ListItem button>
            <ListItemText primary="Accordion"/>
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/paper_surface">
          <ListItem button>
            <ListItemText primary="Paper"/>
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/card_surface">
          <ListItem button>
            <ListItemText primary="Card"/>
          </ListItem>
        </Link>
      </List>

      <ListSubheader component="div" id="nested-list-subheader-navigation" disableSticky>
        Data Display
      </ListSubheader>
      <List component="div" disablePadding>
        <Link href="/avatar">
          <ListItem button>
            <ListItemText primary="Avatar"/>
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/badge">
          <ListItem button>
            <ListItemText primary="Badge"/>
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/chips">
          <ListItem button>
            <ListItemText primary="Chips"/>
          </ListItem>
        </Link>
      </List>
      <ListItem button onClick={() => handleClick(19)}>
        <ListItemText primary="Dividers"/>
        {checkIfOpen(19) ? <ExpandLess/> : <ExpandMore/>}
      </ListItem>

      <Collapse in={checkIfOpen(19)} timeout="auto">
        <List component="div" disablePadding>
          <Link href="/inset_divider">
            <ListItem button>
              <ListItemText primary="Inset Divider"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/vertical_divider">
            <ListItem button>
              <ListItemText primary="Vertical Divider"/>
            </ListItem>
          </Link>
        </List>
      </Collapse>

      <ListItem button onClick={() => handleClick(20)}>
        <ListItemText primary="Icons"/>
        {checkIfOpen(20) ? <ExpandLess/> : <ExpandMore/>}
      </ListItem>
      <Collapse in={checkIfOpen(20)} timeout="auto">
        <List component="div" disablePadding>
          <Link href="/simple_icons">
            <ListItem button>
              <ListItemText primary="Simple Icons"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/color_icons">
            <ListItem button>
              <ListItemText primary="Icons with different color"/>
            </ListItem>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link href="/size_icons">
            <ListItem button>
              <ListItemText primary="Icons with different sizes"/>
            </ListItem>
          </Link>
        </List>
      </Collapse>
      <ListItem button onClick={() => handleClick(21)}>
        <ListItemText primary="Material Icons"/>
        {checkIfOpen(21) ? <ExpandLess/> : <ExpandMore/>}
      </ListItem>
      <Collapse in={checkIfOpen(21)} timeout="auto">
        <List component="div" disablePadding>
          <Link href="/alarm_icon">
            <ListItem button>
              <ListItemText primary="Alarm Icon"/>
            </ListItem>
          </Link>
        </List>
      </Collapse>
      <List component="div" disablePadding>
        <Link href="/simple_list">
          <ListItem button>
            <ListItemText primary="List"/>
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/simple_table">
          <ListItem button>
            <ListItemText primary="Table"/>
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/tooltip">
          <ListItem button>
            <ListItemText primary="Tooltip"/>
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/typography">
          <ListItem button>
            <ListItemText primary="Typography"/>
          </ListItem>
        </Link>
      </List>

      <ListSubheader component="div" id="nested-list-subheader-navigation" disableSticky>
        Layout
      </ListSubheader>
      <List component="div" disablePadding>
        <Link href="/box_layout">
          <ListItem button>
            <ListItemText primary="Box"/>
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/container_layout">
          <ListItem button>
            <ListItemText primary="Container"/>
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/grid_layout">
          <ListItem button>
            <ListItemText primary="Grid"/>
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/grid_list_layout">
          <ListItem button>
            <ListItemText primary="Grid List"/>
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/hidden_layout">
          <ListItem button>
            <ListItemText primary="Hidden"/>
          </ListItem>
        </Link>
      </List>

      <ListSubheader component="div" id="nested-list-subheader-navigation" disableSticky>
        Utils
      </ListSubheader>
      <List component="div" disablePadding>
        <Link href="/click_away_listener">
          <ListItem button>
            <ListItemText primary="Click Away Listener"/>
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/modal">
          <ListItem button>
            <ListItemText primary="Modal"/>
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/popover">
          <ListItem button>
            <ListItemText primary="Popover"/>
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/popper">
          <ListItem button>
            <ListItemText primary="Popper"/>
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/portal">
          <ListItem button>
            <ListItemText primary="Portal"/>
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/textarea_autosize">
          <ListItem button>
            <ListItemText primary="Textarea Autosize"/>
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/transitions">
          <ListItem button>
            <ListItemText primary="Transitions"/>
          </ListItem>
        </Link>
      </List>
      <List component="div" disablePadding>
        <Link href="/use_media_query">
          <ListItem button>
            <ListItemText primary="Use Media Query"/>
          </ListItem>
        </Link>
      </List>

      <List component="div" disablePadding>
        <Link href="/backdrop">
          <ListItem button>
            <ListItemText primary="Backdrop"/>
          </ListItem>
        </Link>
      </List>


    </div>
  )
}

export default NavList