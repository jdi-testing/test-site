import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import GridList from '../src/components/GridList/GridList';

export default function CGridList() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <GridList />
      </Box>
    </Container>
  );
}
