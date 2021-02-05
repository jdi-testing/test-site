import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Dialog from './Dialog';
import DialogContent from './DialogContent';
import DialogActions from './DialogActions';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const textField = (
    <TextField
      autoFocus
      margin="dense"
      id="name"
      label="Email Address"
      type="email"
      fullWidth
    />
  );

  const content = (
    <div>
      <DialogContent
        text="Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Cras ultricesurna tortor,
    ac pharetra tortor venenatis id. Praesent consecteturtempor fringilla.
    Cras laoreet sodales pellentesque. Ut nibh leo,auctor id massa vitae,
    consequat congue turpis."
      >
        {textField}
      </DialogContent>
      <DialogActions
        buttons={['close', 'ok']}
        onClickHandlers={[handleClose, handleClose]}
      />
    </div>
  );

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} title="Form Dialog">
        {content}
      </Dialog>
    </div>
  );
}
