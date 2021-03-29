import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Dialogs from "../src/components/Dialog/Dialogs";

export default function CDialogs() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Dialogs />
      </Box>
    </Container>
  );
}
