import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import MaterialIcons from "../src/components/Icon/MaterialIcons";

export default function CMaterialIcons() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <MaterialIcons />
      </Box>
    </Container>
  );
}
