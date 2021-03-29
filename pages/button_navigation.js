import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ButtomNavigation from '../src/components/BottomNavigation/ButtomNavigationDefault';

export default function CButtomNavigation() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <ButtomNavigation />
      </Box>
    </Container>
  );
}
