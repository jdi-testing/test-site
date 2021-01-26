import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function MRadio() {
  const [text, setText] = useState("");
  return (
    <FormControl component="fieldset">
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          onClick={() => setText("First")}
          value="first"
          control={<Radio color="primary" />}
          label="First"

        />
        <FormControlLabel
          onClick={() => setText("Second")}
          value="second"
          control={<Radio color="primary" />}
          label="Second"

        />
        <FormControlLabel
          onClick={() => setText("Third")}
          value="third"
          control={<Radio color="primary" />}
          label="Third"

        />
        <FormControlLabel
          onClick={() => setText("Disabled")}
          value="disabled"
          disabled
          control={<Radio color="primary" />}
          label="Disabled" />

      </RadioGroup>
      <p>You clicked {text}</p>
      
    </FormControl>
  );

}