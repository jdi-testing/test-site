import React from 'react';
import Box from './Box';
import Button from "../Button/Button";

export default {
    title: 'Material Ui/Box',
    component: Box,
};

const TemplateButton1 = React.createElement(Button, {variant: 'contained', color: 'primary'}, 'Button');
const TemplateButton2 = React.createElement(Button, {variant: 'outlined', color: 'secondary'}, 'Button');
const TemplateButton3 = React.createElement(Button, {disabled: true}, 'Button');

const Template = (args) =>
    <Box {...args} component="span" onClick={() => console.log('The main box clicked')}>
        <Box {...args} m={1} onClick={() => console.log('First button clicked')}>
            {args.element1}
        </Box>
        <Box {...args} m={1} onClick={() => console.log('Second button clicked')}>
            {args.element2}
        </Box>
        <Box {...args} m={1} onClick={() => console.log('Third button clicked')}>
            {args.element3}
        </Box>
    </Box>;

export const Default = Template.bind({});
Default.args = {
    element1: TemplateButton1,
    element2: TemplateButton2,
    element3: TemplateButton3
}