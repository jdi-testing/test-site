import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ElevateAppBar from "../src/components/AppBar/ElevateAppBar";

export default function CAppBar() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <ElevateAppBar />
      </Box>
    </Container>
  );
}
