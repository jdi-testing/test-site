import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ResponsiveDrawer from '../src/components/Drawers/ResponsiveDrawer';

export default function CResponsiveDrawer() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <ResponsiveDrawer />
      </Box>
    </Container>
  );
}
