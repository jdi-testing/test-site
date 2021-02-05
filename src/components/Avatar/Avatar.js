import React from 'react';
import Avatar from '@material-ui/core/Avatar';

export default function SimpleAvatar(args) {
  return <Avatar {...args}>{args.children}</Avatar>;
}
