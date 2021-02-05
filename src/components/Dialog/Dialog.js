import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function SimpleDialog(props) {
  const { onClose, selectedValue, open, title, children, ...other } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog {...other} onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      {children}
    </Dialog>
  );
}
