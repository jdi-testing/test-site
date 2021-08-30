import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import BottomNavigation from '../src/components/BottomNavigation/BottomNavigationDefault';

export default function CBottomNavigation() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <BottomNavigation />
      </Box>
    </Container>
  );
}
