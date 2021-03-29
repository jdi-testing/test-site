import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Checkbox from '../src/components/Checkbox/Checkbox';

export default function CCheckbox() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Checkbox />
      </Box>
    </Container>
  );
}
