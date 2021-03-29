import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import UseMediaQuery from "../src/components/UseMediaQuery/UseMediaQuery";

export default function CUseMediaQuery() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <UseMediaQuery />
      </Box>
    </Container>
  );
}
