import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Selects from '../src/components/Select/Selects';

export default function CSelects() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Selects />
      </Box>
    </Container>
  );
}
