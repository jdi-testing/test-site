import React from 'react';

import AlarmIcon from './AlarmIcon';

export default {
    title: 'Material Ui/Data Display/Icon',
    component: AlarmIcon,
};

const Template = (args) => (
    <AlarmIcon {...args}>
        Link
    </AlarmIcon>
);

export const Default = Template.bind({});
Default.args = {
    fontSize:"default"
}

export const Secondary = Template.bind({});
Secondary.args = {
    color:"secondary",
    fontSize:"large"
}
