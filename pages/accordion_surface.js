import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Accordion from "../src/components/Accordion/Accordion";

export default function CAccordion() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Accordion />
      </Box>
    </Container>
  );
}
