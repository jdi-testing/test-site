import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Steppers from '../src/components/Stepper/Steppers';

export default function CSteppers() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Steppers />
      </Box>
    </Container>
  );
}
