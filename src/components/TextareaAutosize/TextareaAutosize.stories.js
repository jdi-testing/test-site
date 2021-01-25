import React from 'react';

import TextareaAutosize from './TextareaAutosize';

export default {
  title: 'Material Ui/TextareaAutosize',
  component: TextareaAutosize,
};

const Template = (args) => (
    <TextareaAutosize {...args}>TextareaAutosize</TextareaAutosize>
);

export const Default = Template.bind({});
Default.args = {};