import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import PositionedPopper from "../src/components/Popper/PositionedPopper"

export default function CPositionedPopper() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <PositionedPopper />
      </Box>
    </Container>
  );
}
