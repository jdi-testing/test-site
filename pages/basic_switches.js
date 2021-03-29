import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import BasicSwitches from '../src/components/Switch/BasicSwitches';

export default function CBasicSwitches() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <BasicSwitches />
      </Box>
    </Container>
  );
}
