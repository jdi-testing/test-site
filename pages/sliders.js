import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Sliders from '../src/components/Slider/Sliders';

export default function CSliders() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Sliders />
      </Box>
    </Container>
  );
}
