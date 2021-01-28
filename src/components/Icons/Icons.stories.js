import React from 'react';

import SimpleIcons from './SimpleIcons';
import SvgIconsColor from './ColorIcons';
import SvgIconsSize from './SizeIcons';

export default {
    title: 'Material Ui/Icons',
    component: SimpleIcons,
};

export const Simple_Icons = (args) => <SimpleIcons {...args}>SimpleIcons</SimpleIcons>;

export const Color_Icons = (args) => <SvgIconsColor {...args}>ColorIcons</SvgIconsColor>;

export const Size_Icons = (args) => <SvgIconsSize {...args}>SvgIconsSize</SvgIconsSize>;
