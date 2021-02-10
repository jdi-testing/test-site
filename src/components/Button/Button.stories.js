import React from 'react';
import Button from './Button';

export default {
  title: 'Material Ui/Inputs/Button',
  component: Button,
};

const Template = (args) => <Button {...args} onClick={() => console.log('Button clicked')}>Button</Button>;

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

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'contained',
  disabled: true
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  color: 'primary',
};
