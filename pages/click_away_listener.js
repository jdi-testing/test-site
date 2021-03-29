import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ClickAwayListener from '../src/components/ClickAwayListner/ClickAwayListener';

export default function CClickAwayListener() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <ClickAwayListener />
      </Box>
    </Container>
  );
}
