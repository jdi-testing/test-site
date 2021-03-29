import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Buttons from "../src/components/Button/Button";

export default function CButtons() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Buttons/>
      </Box>
    </Container>
  );
}
