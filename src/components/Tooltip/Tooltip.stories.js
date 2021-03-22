import React from 'react';
import Tooltip from './Tooltip';

export default {
    title: 'Material Ui/Data Display/ToolTip',
    component: Tooltip
};

const Template = (args) => <Tooltip{...args}>{args.element}</Tooltip>;

export const Default = Template.bind({});
