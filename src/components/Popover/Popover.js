import React from 'react';
import MPopover from '@material-ui/core/Popover';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    div: {
        padding: theme.spacing(2),
    },
    popover: {
        pointerEvents: 'none',
    },
}));

export function ClickPopover() {
    const Popover = (props) => <MPopover {...props} />;

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
            <Button variant="contained" onClick={handleClick}>
                Click to open Popover
            </Button>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            ><div className={classes.div}>Popover content</div></Popover>
        </div>
    );
}

export function HoverPopover() {
    const Popover = (props) => <MPopover {...props} />;

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
            <Typography variant="contained"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                    aria-owns={open ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true">[Hover to open Popover]</Typography>
            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                onClose={handlePopoverClose}
            ><div className={classes.div}>Popover content</div></Popover>
        </div>
    );
}
