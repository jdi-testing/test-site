import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Progresses from "../src/components/Progress/Progress";

export default function CProgresses() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Progresses />
      </Box>
    </Container>
  );
}
