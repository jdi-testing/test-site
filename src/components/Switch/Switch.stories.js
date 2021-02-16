import React from 'react';

import Switch from './Switch';

export default {
    title: 'Material Ui/Inputs/Switch',
    component: Switch
};

const Template = (args) => <Switch {...args} onClick={() => console.log('Switch pressed')}/>;

// Stories
export const Default = Template.bind({});
Default.args = {
    color: 'default'
}

export const Primary = Template.bind({});
Primary.args = {
    variant: 'contained',
    color: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'contained',
    color: 'secondary'
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true
};

export const DisabledAndChecked = Template.bind({});
DisabledAndChecked.args = {
    checked: true,
    disabled: true
};

