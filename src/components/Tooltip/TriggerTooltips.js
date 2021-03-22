import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

export default function TriggersTooltips() {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Grid container justify="center">
        <Grid item id={"touchItem"}>
          <Tooltip disableFocusListener title="Add" id={"touchTooltip"}>
            <Button>Hover or touch</Button>
          </Tooltip>
        </Grid>
        <Grid item id={"focusItem"}>
          <Tooltip disableHoverListener title="Add" id={"focusTooltip"}>
            <Button>Focus or touch</Button>
          </Tooltip>
        </Grid>
        <Grid item id={"hoverItem"}>
          <Tooltip disableFocusListener disableTouchListener title="Add" id={"hoverTooltip"}>
            <Button>Hover</Button>
          </Tooltip>
        </Grid>
        <Grid item id={"clickItem"}>
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
                title="Add"
                id={"clickTooltip"}
              >
                <Button onClick={handleTooltipOpen}>Click</Button>
              </Tooltip>
            </div>
          </ClickAwayListener>
        </Grid>
      </Grid>
    </div>
  );
}
