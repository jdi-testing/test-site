import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ClippedDrawer from '../src/components/Drawers/ClippedDrawer';

export default function CClippedDrawer() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <ClippedDrawer />
      </Box>
    </Container>
  );
}
