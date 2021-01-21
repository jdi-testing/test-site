import React from 'react';

import Button from './Button';

export default {
  title: 'Material Ui/Button',
  component: Button,
};

const Template = (args) => <Button {...args} onClick={() => console.log('123')}>Button</Button>;

// Stories
export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'contained',
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'contained',
  color: 'secondary',
};
