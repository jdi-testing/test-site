import React from 'react';

import Slider from './Slider';

export default {
  title: 'Material Ui/Slider',
  component: Slider,
};

const Template = (args) => <Slider {...args} onClick={() => console.log('123')}>Slider</Slider>;

// Stories
export const Default = Template.bind({});
