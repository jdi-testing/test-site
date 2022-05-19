import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <h1>Container</h1>
      <Container maxWidth="sm" id="container-fluid">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>Example text</Typography>
      </Container>
      <h1>Container fixed</h1>
      <Container fixed id="container-fixed">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>Fixed container text</Typography>
      </Container>
    </React.Fragment>
  );
}