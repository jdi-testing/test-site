import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '../src/components/Typography/Typography';

export default function CTypography() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Typography />
      </Box>
    </Container>
  );
}
