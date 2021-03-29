import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Backdrop from '../src/components/Backdrop/Backdrop';

export default function CBackdrop() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Backdrop />
      </Box>
    </Container>
  );
}
