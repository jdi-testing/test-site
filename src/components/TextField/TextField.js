import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function TextFieldForm() {
    const inputProps = {
      step: 300,
    };

    return (<Grid container justify="space-around" alignItems="baseline">
    <TextField id="standard-basic" label="First" type="text" required="true" autoFocus="true" inputProps={inputProps} />
    <TextField id="second-basic" label="Second with default" defaultValue="Default value" inputProps={inputProps} />
    <TextField id="disabled-field" label="Disabled field" disabled="true" inputProps={inputProps} />
    <TextField id="filled-basic" label="Filled" variant="filled" />
    <TextField id="number" type="number" label="Number" variant="standard" />
    <TextField id="error" label="Error" error="true" helperText="Incorrect value" variant="filled" />
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <TextField id="outlined-basic-text" label="Outlined with Helper text" helperText="Please fill text in this field" variant="outlined" />
    <TextField id="time-field" type="time" helperText="Please fill time" inputProps={inputProps} />
    <TextField id="email" type="email" helperText="Email field" inputProps={inputProps} />
    </Grid>);
}