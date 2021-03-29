import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import VerticalDividersView from '../src/components/Divider/VerticalDividers';

export default function CVerticalDividersView() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <VerticalDividersView />
      </Box>
    </Container>
  );
}
