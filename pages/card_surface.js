import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '../src/components/Card/Card';

export default function CCard() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Card />
      </Box>
    </Container>
  );
}
