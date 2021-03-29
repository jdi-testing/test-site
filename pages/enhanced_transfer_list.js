import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import EnhancedTransferList from '../src/components/TransferList/EnhancedTransferList';

export default function CEnhancedTransferList() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <EnhancedTransferList />
      </Box>
    </Container>
  );
}
