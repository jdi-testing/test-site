import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Dialog from './Dialog';
import DialogContent from './DialogContent';
import DialogActions from './DialogActions';
import Typography from "@material-ui/core/Typography";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [mail, setMail] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setMail("")
  };
  const handleOk = () => {
    setOpen(false);
  };
  const saveMail = (event) => {
    console.info("Change to " + event.target.value)
    setMail(event.target.value);
  };

  const textField = (
    <TextField
      autoFocus
      margin="dense"
      id="name"
      label="Email Address"
      type="email"
      fullWidth
      value={mail}
      onChange={saveMail}
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
        onClickHandlers={[handleClose, handleOk]}
      />
    </div>
  );

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Typography variant="subtitle1" id={"mailDialogSelection"}>Entered email: {mail}</Typography>
      <Dialog open={open} onClose={handleClose} title="Form Dialog">
        {content}
      </Dialog>
    </div>
  );
}
