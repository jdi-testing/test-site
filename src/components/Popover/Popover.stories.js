import React from 'react';

import {ClickPopover, HoverPopover} from "./Popover";

export default {
    title: 'Material UI/Utils/Popover',
    component: ClickPopover,
};

const ClickPopoverTemplate = (args) => (
    <ClickPopover {...args}>Popover content</ClickPopover>
);

const HoverPopoverTemplate = (args) => (
    <HoverPopover {...args}>Popover content</HoverPopover>
);

export const Click = ClickPopoverTemplate.bind({});

export const Hover = HoverPopoverTemplate.bind({});