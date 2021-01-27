import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

export default function Content(props) {
  const { text, children } = props;

  return (
    <DialogContent>
      <DialogContentText>{text}</DialogContentText>
      {children}
    </DialogContent>
  );
}
