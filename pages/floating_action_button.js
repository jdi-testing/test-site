import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import FloatingActionButton from '../src/components/FloatingActionButton/FloatingActionButton';

export default function CFloatingActionButton() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <FloatingActionButton />
      </Box>
    </Container>
  );
}
