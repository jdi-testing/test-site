import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '../src/components/Links/SimpleLinks';

export default function CLink() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Link />
      </Box>
    </Container>
  );
}
