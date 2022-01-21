import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Alert from '../src/components/Alerts/Alert';

export default function CAlert() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Alert />
      </Box>
    </Container>
  );
}
