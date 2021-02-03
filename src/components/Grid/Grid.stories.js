import React from 'react';
import GridForm from './Grid';
import Button from "../Button/Button";

export default {
    title: "Material Ui/Grid",
    component: GridForm,
};

const TemplateButton = React.createElement(Button, {variant: 'contained', color: 'primary'}, 'Button');

export const GridView = (args) =>
<GridForm container {...args} >
  <GridForm container item {...args.griditem} >
    {args.buttonitem}
  </GridForm>
  <GridForm container item {...args.griditem} >
      {args.buttonitem}
    </GridForm>
 </GridForm>;


GridView.args = {
    direction: "row",
    justify: "center",
    alignitems: "center",
    elementtype: "div",
    spacing: 4,
    buttonitem: TemplateButton,
    griditem: {
        lg: 2,
        xs: 12
    }
};