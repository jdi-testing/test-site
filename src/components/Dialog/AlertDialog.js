import React from 'react';
import Button from '@material-ui/core/Button';

import Dialog from './Dialog';
import DialogActions from './DialogActions';
import DialogContent from './DialogContent';
import Typography from "@material-ui/core/Typography";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setText("close");
  };
  const handleOk = () => {
    setOpen(false);
    setText("ok");
  };

  const content = (
    <div>
      <DialogContent
        text="Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Cras ultricesurna tortor,
      ac pharetra tortor venenatis id. Praesent consecteturtempor fringilla.
      Cras laoreet sodales pellentesque. Ut nibh leo,auctor id massa vitae,
      consequat congue turpis."
      />
      <DialogActions
        buttons={['close', 'ok']}
        onClickHandlers={[handleClose, handleOk]}
      />
    </div>
  );

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Typography variant="subtitle1" id={"alertDialogSelection"}>Selected: {text}</Typography>
      <Dialog open={open} onClose={handleClose} title="Alert dialog question?">
        {content}
      </Dialog>
    </div>
  );
}
