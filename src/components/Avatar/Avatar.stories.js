import React from 'react';
import AssignmentIcon from '@material-ui/icons/Assignment';

import Avatar from './Avatar';
import SampleAvatar from './assets/sample_avatar.jpg';

export default {
  title: 'Material Ui/Data Display/Avatar',
  component: Avatar,
};

export const NoImage = Avatar.bind({});

export const Circle = Avatar.bind({});
Circle.args = {
  src: SampleAvatar,
};

export const Square = Avatar.bind({});
Square.args = {
  src: SampleAvatar,
  variant: 'square',
};

export const Rounded = Avatar.bind({});
Rounded.args = {
  src: SampleAvatar,
  variant: 'rounded',
};

export const FallbackAlt = Avatar.bind({});
FallbackAlt.args = {
  src: 'broken_image',
  alt: 'Lorem',
};

const LetterTemplate = () => <Avatar>A</Avatar>;
export const Letter = LetterTemplate.bind({});

const IconTemplate = () => (
  <Avatar>
    <AssignmentIcon />
  </Avatar>
);
export const Icon = IconTemplate.bind({});

export const Default = Avatar.bind({});
