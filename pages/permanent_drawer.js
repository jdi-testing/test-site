import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import PermanentDrawer from '../src/components/Drawers/PermanentDrawerLeft';

export default function CPermanentDrawer() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <PermanentDrawer />
      </Box>
    </Container>
  );
}
