import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import BackToTop from "../src/components/AppBar/BackTopButton";

export default function CAppBar() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <BackToTop />
      </Box>
    </Container>
  );
}
