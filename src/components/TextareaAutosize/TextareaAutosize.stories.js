import React from 'react';
import MaxHeightTextarea from './MaxHeightTextarea';
import MinHeightTextarea from './MinHeightTextarea';
import TextareaAutosize from './TextareaAutosize';

export default {
  title: 'Material Ui/Utils/TextareaAutosize',
  component: TextareaAutosize,
};

const Template = (args) => (
    <TextareaAutosize {...args}>TextareaAutosize</TextareaAutosize>
);

export const Default = Template.bind({});
Default.args = {};

const MaxHeightTextareaTemplate = (args) => (
    <MaxHeightTextarea {...args}>MaxHeightTextarea</MaxHeightTextarea>
);

export const MaxHeight = MaxHeightTextareaTemplate.bind({});

const MinHeightTextareaTemplate = (args) => (
    <MinHeightTextarea {...args}>MinHeightTextarea</MinHeightTextarea>
);

export const MinHeight = MinHeightTextareaTemplate.bind({});


