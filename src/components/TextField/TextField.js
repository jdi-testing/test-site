import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function BuildTextField(props) {
    const inputProps = {
      step: 300,
    };

    return (
    <TextField {...props} inputProps={inputProps} />
    );
}