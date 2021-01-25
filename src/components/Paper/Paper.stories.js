import React from 'react';

import Paper from "./Paper";

export default {
    title: 'Material UI/Surfaces/Paper',
    component: Paper,
};

const Template = (args) => (
    <Paper {...args}>Paper</Paper>
);

export const Default = Template.bind({});
Default.args = {};