import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '../src/components/Grid/Grid';

export default function CGrid() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Grid />
      </Box>
    </Container>
  );
}
