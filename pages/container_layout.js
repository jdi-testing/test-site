import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import SimpleContainer from '../src/components/Container/Container';

export default function CContainer() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <SimpleContainer />
      </Box>
    </Container>
  );
}
