import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import SimpleTransferList from '../src/components/TransferList/SimpleTransferList';

export default function CSimpleTransferList() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <SimpleTransferList />
      </Box>
    </Container>
  );
}
