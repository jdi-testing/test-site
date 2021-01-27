import React from 'react';
import MailIcon from '@material-ui/icons/Mail';

import Badge from './Badge';

export default {
  title: 'Material Ui/Data Display/Badge',
  component: Badge,
};

const Template = (args) => (
  <Badge {...args}>
    <MailIcon />
  </Badge>
);

export const Primary = Template.bind({});
Primary.args = {
  badgeContent: 4,
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  badgeContent: 4,
  color: 'secondary',
};

export const Error = Template.bind({});
Error.args = {
  badgeContent: 4,
  color: 'error',
};

export const Dot = Template.bind({});
Dot.args = {
  color: 'primary',
  variant: 'dot',
};

export const ShowZero = Template.bind({});
ShowZero.args = {
  badgeContent: 0,
  color: 'primary',
  showZero: true,
};

export const MaxValue = Template.bind({});
MaxValue.args = {
  badgeContent: 100,
  color: 'primary',
  max: 99,
};

export const Invisible = Template.bind({});
Invisible.args = {
  color: 'primary',
  variant: 'dot',
  invisible: true,
};

export const Alignment = Template.bind({});
Alignment.args = {
  badgeContent: 4,
  color: 'primary',
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
};
