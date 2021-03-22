import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

export default function Boxes() {
  const [text, setText] = useState("");
  return (
    <div>
      <h1>Boxes</h1>
      <Box component="span" onClick={() => console.log('The main box clicked')}>
        <Box m={1} onClick={() => setText('First button')}>
          <Button variant='contained' color='primary'>First button</Button>
        </Box>
        <Box m={1} onClick={() => setText('Second button')}>
          <Button variant='outlined' color='secondary' >Second button</Button>
        </Box>
        <Box m={1} onClick={() => setText('Third button')}>
          <Button disabled={true}>Third button</Button>
        </Box>
      </Box>
      <p id="lastClickContent">You clicked {text}</p>
    </div>
  );
}
