import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Icons from "../src/components/Icons/Icons";

export default function CIcons() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Icons />
      </Box>
    </Container>
  );
}
