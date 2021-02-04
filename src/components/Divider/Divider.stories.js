import Dividers from "./InsetDividers";
import VerticalDividers from "./VerticalDividers";
import React from "react";

export default {
    title: 'Material Ui/Data Display/InsetDividers',
    component: Dividers, VerticalDividers
};

export const InsetDividersView = (args) => <Dividers {...args}>Types View</Dividers>;
export const VerticalDividersView = (args) => <VerticalDividers {...args}>Types View</VerticalDividers>;