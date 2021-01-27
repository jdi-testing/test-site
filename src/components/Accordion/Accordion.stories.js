import React from 'react';

import Accordion from "./Accordion";
import AccordionSummary from "./AccordionSummary";
import AccordionDetails from "./AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default {
    title: 'Material UI/Surfaces/Accordion',
    component: Accordion, AccordionSummary, AccordionDetails
};

const Template = (args) => (
    <Accordion {...args}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">Accordion</AccordionSummary>
        <AccordionDetails>Accordion content</AccordionDetails>
    </Accordion>
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true
};