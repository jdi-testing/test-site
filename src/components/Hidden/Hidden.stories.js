import React from 'react';
import withWidth from '@material-ui/core/withWidth';
import BreakpointDown from './Hidden';

export default {
  title: 'Material Ui/Hidden',
  function: BreakpointDown,
};

const HiddenWidth = withWidth()(BreakpointDown);
export const Hidden = (args) => <HiddenWidth {...args}>Hidden</HiddenWidth>;