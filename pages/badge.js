import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Badge from '../src/components/Badge/Badge';

export default function CBadge() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Badge />
      </Box>
    </Container>
  );
}
