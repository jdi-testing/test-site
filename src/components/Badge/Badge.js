import React from 'react';
import Badge from '@material-ui/core/Badge';

export default function SimpleBadge(args) {
  return <Badge {...args}>{args.children}</Badge>;
}
