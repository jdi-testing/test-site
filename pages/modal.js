import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import SimpleModal from "../src/components/Modal/SimpleModal";

export default function CSimpleModal() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <SimpleModal />
      </Box>
    </Container>
  );
}
