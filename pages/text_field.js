import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '../src/components/TextField/TextField';

export default function CTextField() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <TextField />
      </Box>
    </Container>
  );
}
