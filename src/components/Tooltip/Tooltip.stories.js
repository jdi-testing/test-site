import React from 'react';
import Tooltip from './Tooltip';
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {IconButton} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';

export default {
    title: 'Material Ui/ToolTip',
    component: Tooltip
};

const DefaultTooltips = (args) => [
    <Tooltip {...args} title='Add'>
        <IconButton>
            <AddIcon/>
        </IconButton>
    </Tooltip>,
    <Tooltip {...args} arrow title='Delete'>
        <IconButton>
            <DeleteIcon/>
        </IconButton>
    </Tooltip>]

function TriggersTooltips() {
    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    return (
        <Box>
            <Tooltip
                disableHoverListener
                title="Focus with Tab"
                placement="right"
            >
                <IconButton color={'primary'}>
                    <AddIcon/>
                </IconButton>
            </Tooltip>
            <ClickAwayListener onClickAway={handleTooltipClose}>
                <div>
                    <Tooltip
                        PopperProps={{
                            disablePortal: true,
                        }}
                        onClose={handleTooltipClose}
                        open={open}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Click on"
                        placement="right"
                    >
                        <IconButton
                            color={'secondary'}
                            onClick={handleTooltipOpen}>
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>
                </div>
            </ClickAwayListener>
        </Box>
    );
}

const InteractiveTooltips = (args) =>
    <Tooltip {...args} interactive title='This tooltip does not disappear if you hover the mouse over it'>
        <IconButton color={'secondary'}>
            <DeleteIcon/>
        </IconButton>
    </Tooltip>

const CustomizedTooltips = (args) => [
    <Tooltip {...args} TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title='Fade'>
        <IconButton color={'primary'}>
            <FavoriteIcon/>
        </IconButton>
    </Tooltip>,
    <Tooltip {...args} TransitionComponent={Zoom} title='Zoom'>
        <IconButton color={'secondary'}>
            <DeleteIcon/>
        </IconButton>
    </Tooltip>,
    <Tooltip title="Showing for 500ms, leaving for 200ms" enterDelay={500} leaveDelay={200}>
        <IconButton color={'default'}>
            <AddIcon/>
        </IconButton>
    </Tooltip>]


const Template = (args) => <Box{...args}>{args.element}</Box>;

export const Default = Template.bind({});
Default.args = {
    element: DefaultTooltips
}

export const Triggers = Template.bind({});
Triggers.args = {
    element: TriggersTooltips
};

export const Interactive = Template.bind({});
Interactive.args = {
    element: InteractiveTooltips
};

export const Customized = Template.bind({});
Customized.args = {
    element: CustomizedTooltips
};
