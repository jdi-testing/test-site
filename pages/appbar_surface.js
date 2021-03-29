import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AppBar from '../src/components/AppBar/AppBar';

export default function CAppBar() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <AppBar />
      </Box>
    </Container>
  );
}
