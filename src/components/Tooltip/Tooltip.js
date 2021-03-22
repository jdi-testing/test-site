import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CustomizedTooltips from "./CustomizedTooltips";
import TriggersTooltips from "./TriggerTooltips";
import DisabledTooltips from "./DisabledTooltip";

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

export default function SimpleTooltips() {
  const classes = useStyles();

  return (
    <div>
      <h1>Tooltips</h1>
      <h2>Simple tooltips</h2>
      <div>
        <Tooltip title="Delete" id={"deleteTooltip"}>
          <IconButton aria-label="delete" id={"deleteBtn"}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add" aria-label="add" id={"primaryAddTooltip"}>
          <Fab color="primary" className={classes.fab}>
            <AddIcon />
          </Fab>
        </Tooltip>
        <Tooltip title="Add" aria-label="add" id={"secondaryAddTooltip"}>
          <Fab color="secondary" className={classes.absolute}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>
      <h2>Customizable tooltips</h2>
      <CustomizedTooltips id={"customTooltips"} />
      <h2>Triggered tooltips</h2>
      <TriggersTooltips id={"triggeredTooltips"}/>
      <h2>Disabled elements</h2>
      <DisabledTooltips id={"disabledElementsTooltips"}/>
    </div>
  );
}
