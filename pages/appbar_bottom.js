import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import BottomAppBar from "../src/components/AppBar/BottomAppBar";

export default function CAppBar() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <BottomAppBar />
      </Box>
    </Container>
  );
}
