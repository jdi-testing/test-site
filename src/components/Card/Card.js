import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function SimpleCard(args) {
  return (
    <Card {...args} style={{ maxWidth: 345 }}>
      <CardHeader title="Card Header" subheader="Sub-header" avatar="" />
      {args.children}
      <CardContent>
        <Typography>Sample card</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Learn More</Button>
      </CardActions>
    </Card>
  );
}
