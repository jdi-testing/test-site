import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Tabs from '../src/components/Tabs/Tabs';

export default function CTabs() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Tabs />
      </Box>
    </Container>
  );
}
