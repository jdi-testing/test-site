import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Transitions from "../src/components/Transitions/Transitions";

export default function CTransitions() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Transitions />
      </Box>
    </Container>
  );
}
