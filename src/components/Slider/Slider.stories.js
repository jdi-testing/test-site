import React from 'react';
import Slider from './Slider';
import RangeSlider from './RangeSlider';
import VerticalSlider from './VerticalSlider';

export default {
  title: 'Material Ui/Inputs/Sliders',
  component: Slider,
};

// Stories
export const DefaultAndDisabledSliders = (args) => <Slider {...args}>Slider</Slider>;

export const Range_Slider = (args) => <RangeSlider {...args}>RangeSlider</RangeSlider>;

export const Vertical_Slider = (args) => <VerticalSlider {...args}>VerticalSlider</VerticalSlider>;
