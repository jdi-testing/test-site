import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ContextMenu from '../src/components/Menus/ContextMenu';

export default function CContextMenu() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <ContextMenu />
      </Box>
    </Container>
  );
}
