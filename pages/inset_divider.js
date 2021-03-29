import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import InsetDividersView from '../src/components/Divider/InsetDividers';

export default function CInsetDividersView() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <InsetDividersView />
      </Box>
    </Container>
  );
}
