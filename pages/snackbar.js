import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Snackbars from "../src/components/Snackbar/Snackbars";

export default function CSnackbars() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Snackbars />
      </Box>
    </Container>
  );
}
