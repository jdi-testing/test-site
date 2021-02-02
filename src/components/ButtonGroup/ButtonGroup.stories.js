import React from 'react';

import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';
import Box from "../Box/Box";
import {ClickAwayListener, MenuList, MenuItem, Paper, Popper} from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default {
    title: 'Material Ui/ButtonGroup',
    component: ButtonGroup, Button
};

const options = [
    "Create a merge commit",
    "Squash and merge",
    "Rebase and merge",
    "Update project"
];

const Template = (args) =>
    <ButtonGroup {...args} onClick={() => console.log('ButtonGroup clicked')}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
    </ButtonGroup>;

function SplitButtonTemplate() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClick = () => {
        console.info(`${options[selectedIndex]} clicked`);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return (
        <Box>
            <ButtonGroup variant="contained" color="primary" >
                <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                <Button color="primary" size="small" onClick={handleToggle}>
                    <ArrowDropDownIcon/>
                </Button>
            </ButtonGroup>
            <Popper
                open={open}
                role={undefined}
                transition
                disablePortal
            >
                <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu">
                            {options.map((option, index) => (
                                <MenuItem
                                    key={option}
                                    disabled={index === 2}
                                    onClick={(event) => handleMenuItemClick(event, index)}
                                >
                                    {option}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </ClickAwayListener>
                </Paper>
            </Popper>
        </Box>
    );
}

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
    variant: 'contained',
    color: 'primary'
};

export const Disabled = Template.bind({});
Disabled.args = {
    variant: 'contained',
    disabled: true
};

export const Text = Template.bind({});
Text.args = {
    variant: 'text',
    color: 'secondary'
};

export const Vertical = Template.bind({});
Vertical.args = {
    variant: 'contained',
    orientation: 'vertical',
    color: 'secondary'
}

export const SplitButton = SplitButtonTemplate.bind({});