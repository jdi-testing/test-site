import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextareaAutosize from "../src/components/TextareaAutosize/TextareaAutosize";

export default function CTextareaAutosize() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <TextareaAutosize />
      </Box>
    </Container>
  );
}
