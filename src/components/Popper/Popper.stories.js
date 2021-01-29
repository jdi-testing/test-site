import React from 'react';

import FakedReferencePopper from "./FakedReferencePopper";
import Popper from "./Popper";
import PositionedPopper from "./PositionedPopper";

import SimplePopper from "./SimplePopper";
import TransitionsPopper from "./TransitionsPopper";

export default {
    title: 'Material UI/Utils/Popper',
    component: Popper,
};

const SimplePopperTemplate = (args) => (
    <SimplePopper {...args}>Popper content</SimplePopper>
);

const TransitionsPopperTemplate = (args) => (
    <TransitionsPopper {...args}>Popover content</TransitionsPopper>
);

const FakedReferencePopperTemplate = (args) => (
    <FakedReferencePopper {...args}>Popover content</FakedReferencePopper>
);

const PositionedPopperTemplate = (args) => (
    <PositionedPopper {...args}>Popover content</PositionedPopper>
);

export const Simple = SimplePopperTemplate.bind({});

export const Transitions = TransitionsPopperTemplate.bind({});

export const FakedReference = FakedReferencePopperTemplate.bind({});

export const Positioned = PositionedPopperTemplate.bind({});