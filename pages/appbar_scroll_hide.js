import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import HideAppBar from "../src/components/AppBar/HideAppBar";

export default function CAppBar() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <HideAppBar />
      </Box>
    </Container>
  );
}
