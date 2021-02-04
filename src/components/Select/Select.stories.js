import DisabledSelect from "./DisabledSelect";
import MultipleSelect from "./MultipleSelect";
import SimpleSelect from "./SimpleSelect";
import React from "react";

export default {
    title: 'Material Ui/Inputs/Select',
    component: DisabledSelect, MultipleSelect, SimpleSelect,
};

export const DisabledSelectView = (args) => <DisabledSelect {...args}>Multiple Select</DisabledSelect>;
export const MultipleSelectView = (args) => <MultipleSelect {...args}>Multiple Select</MultipleSelect>;
export const SimpleSelectView = (args) => <SimpleSelect {...args}>Multiple Select</SimpleSelect>;