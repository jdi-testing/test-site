import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Portal from "../src/components/Portal/Portal"

export default function CPortal() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Portal />
      </Box>
    </Container>
  );
}
