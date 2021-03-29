import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ButtonGroup from '../src/components/ButtonGroup/ButtonGroup';

export default function CButtonGroups() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <ButtonGroup/>
      </Box>
    </Container>
  );
}