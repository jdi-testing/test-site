import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Popover from "../src/components/Popover/Popover"

export default function CPopover() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Popover />
      </Box>
    </Container>
  );
}
