import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Chips from '../src/components/Chip/Chips';

export default function CChips() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Chips />
      </Box>
    </Container>
  );
}
