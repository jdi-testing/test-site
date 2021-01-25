import React from 'react';

import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';

export default {
    title: 'Material Ui/ButtonGroup',
    component: ButtonGroup, Button
};

const Template = (args) =>
    <ButtonGroup {...args} onClick={() => console.log('ButtonGroup clicked')}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
    </ButtonGroup>;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
    variant: 'contained',
    color: 'primary'
};

export const Disabled = Template.bind({});
Disabled.args = {
    variant: 'contained',
    disabled: true
};

export const Text = Template.bind({});
Text.args = {
    variant: 'text',
    color: 'secondary'
};

export const Vertical = Template.bind({});
Vertical.args = {
    variant: 'contained',
    orientation: 'vertical',
    color: 'secondary'
}