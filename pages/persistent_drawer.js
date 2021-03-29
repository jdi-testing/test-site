import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import PersistentDrawer from '../src/components/Drawers/PersistentDrawerLeft';

export default function CPersistentDrawer() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <PersistentDrawer />
      </Box>
    </Container>
  );
}
