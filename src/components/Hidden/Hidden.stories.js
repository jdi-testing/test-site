import React from 'react';
import withWidth from '@material-ui/core/withWidth';
import BreakpointDown from './Hidden';

export default {
  title: 'Material Ui/Layout/Hidden',
  function: BreakpointDown,
};

const HiddenWidth = withWidth()(BreakpointDown);
export const DefaultHidden = (args) => <HiddenWidth {...args}>DefaultHidden</HiddenWidth>;