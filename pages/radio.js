import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Radio from '../src/components/Radio/Radio';

export default function CRadio() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Radio />
      </Box>
    </Container>
  );
}
