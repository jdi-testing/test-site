import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import SimpleMenu from '../src/components/Menus/SimpleMenu';

export default function CSimpleMenu() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <SimpleMenu />
      </Box>
    </Container>
  );
}
