import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TemporaryDrawer from '../src/components/Drawers/TemporaryDrawer';

export default function CTemporaryDrawer() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <TemporaryDrawer />
      </Box>
    </Container>
  );
}
