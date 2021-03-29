import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import RouterBreadcrumbs from "../src/components/Breadcrumbs/RouterBreadcrumbs";

export default function CRouterBreadcrumbs() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <RouterBreadcrumbs />
      </Box>
    </Container>
  );
}
