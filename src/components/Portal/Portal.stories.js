import React from 'react';

import Portal from './Portal';

export default {
  title: 'Material Ui/Portal',
  component: Portal,
};

const Template = (args) => (
    <Portal {...args}>Portal</Portal>
);

export const Default = Template.bind({});
Default.args = {};