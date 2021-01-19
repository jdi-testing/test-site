import React from 'react';

import Button from './Button';

export default {
  title: 'Material Ui/Button',
  component: Button,
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'contained',
  color: 'primary'
};
