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
  <GridForm container item>
    {args.buttonItem}
  </GridForm>
  <GridForm container item>
      {args.buttonItem}
    </GridForm>
 </GridForm>;


GridView.args = {
    direction: "row",
    justify: "center",
    alignItems: "center",
    elementType: "div",
    lg: "2",
    xs: "12",
    spacing: "4",
    buttonItem: TemplateButton
};