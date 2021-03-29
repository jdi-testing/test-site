import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Lists from '../src/components/Lists/Lists';

export default function CLists() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Lists />
      </Box>
    </Container>
  );
}
