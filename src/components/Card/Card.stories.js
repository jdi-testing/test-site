import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

import Card from './Card';
import SampleImage from './assets/400x200.png';

export default {
  title: 'Material Ui/Surfaces/Card',
  component: Card,
};

export const Simple = Card.bind({});
Simple.args = {
  raised: true,
};

export const Outlined = Card.bind({});
Outlined.args = {
  variant: 'outlined',
};

const ImageTemplate = (args) => (
  <Card {...args}>
    <CardMedia component="img" image={SampleImage} />
  </Card>
);
export const BackgroundImage = ImageTemplate.bind({});

const ClickableCard = (args) => (
  <Card {...args}>
    <CardActionArea>
      <CardMedia component="img" image={SampleImage} />
    </CardActionArea>
  </Card>
);
export const CardWithClickableArea = ClickableCard.bind({});
