import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import MiniDrawer from '../src/components/Drawers/MiniDrawer';

export default function CMiniDrawer() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <MiniDrawer />
      </Box>
    </Container>
  );
}
