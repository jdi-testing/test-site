import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '../src/components/Paper/Paper';

export default function CPaper() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Paper />
      </Box>
    </Container>
  );
}
