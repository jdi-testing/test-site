import React from 'react';
import Fab from './Fab';
import AddIcon from '@material-ui/icons/Add';

export default {
    title: 'Material Ui/Fab',
    component: Fab
};

const Template = (args) => <Fab {...args}
                                onClick={() => console.log('Floating Action Button pressed')}
                            >
                                <AddIcon/>
                            </Fab>;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
    color: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
    color: 'secondary',
    size: 'small'
};

export const Extended = Template.bind({});
Extended.args = {
    variant: 'extended',
    color: 'secondary'
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true
};