import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import SwipeableTemporaryDrawer from "../src/components/Drawers/SwipeableTemporaryDrawer";

export default function CSwipeableTemporaryDrawer() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <SwipeableTemporaryDrawer />
      </Box>
    </Container>
  );
}
