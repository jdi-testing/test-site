import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Table from '../src/components/Table/Table';

export default function CTable() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Table />
      </Box>
    </Container>
  );
}
