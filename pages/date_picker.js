import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import DatePicker from '../src/components/DateTimePicker/DatePicker';

export default function CDatePicker() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <DatePicker />
      </Box>
    </Container>
  );
}
