import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Tooltip from '../src/components/Tooltip/Tooltip';

export default function CTooltip() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Tooltip />
      </Box>
    </Container>
  );
}
