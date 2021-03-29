import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Boxes from '../src/components/Box/Box';

export default function CBox() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Boxes />
      </Box>
    </Container>
  );
}
