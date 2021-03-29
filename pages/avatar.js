import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Avatar from '../src/components/Avatar/Avatar';

export default function CAvatar() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Avatar />
      </Box>
    </Container>
  );
}
