import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

import Card from './Card';
import SampleImage from './assets/400x200.png';
import Container from "../Container/Container";

export default {
  title: 'Material Ui/Surfaces/Card',
  component: Card,
};

const Template = args => <Card {...args} />;

export const Default = Template.bind({});
