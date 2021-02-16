import React from 'react';

import Link from './Link';

export default {
  title: 'Material Ui/Navigation/Link',
  component: Link,
};

const Template = (args) => (
  <Link {...args} onClick={() => console.log('link clicked')}>
    Link
  </Link>
);

export const Default = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const TextPrimary = Template.bind({});
TextPrimary.args = {
  color: 'textPrimary',
};

export const TextSecondary = Template.bind({});
TextSecondary.args = {
  color: 'textSecondary',
};

export const Error = Template.bind({});
Error.args = {
  color: 'error',
};

export const UnderlineAlways = Template.bind({});
UnderlineAlways.args = {
  underline: 'always',
};
