import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Hidden from '../src/components/Hidden/Hidden';

export default function CHidden() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Hidden />
      </Box>
    </Container>
  );
}
