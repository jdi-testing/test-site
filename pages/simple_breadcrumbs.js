import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Breadcrumbs from '../src/components/Breadcrumbs/Breadcrumbs';

export default function CBreadcrumbs() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Breadcrumbs />
      </Box>
    </Container>
  );
}
