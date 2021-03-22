import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

export default function DisabledTooltips() {
  return (
    <Tooltip title="You don't have permission to do this" id={"disableTooltip"}>
      <span>
        <Button disabled id={"disabledBtn"}>A Disabled Button</Button>
      </span>
    </Tooltip>
  );
}
