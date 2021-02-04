import React from 'react';
import Button from '@material-ui/core/Button';

import Dialog from './Dialog';
import DialogActions from './DialogActions';
import DialogContent from './DialogContent';

export default function ScrollableDialog(args) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const content = (
    <div>
      <DialogContent
        text={[...new Array(10)]
          .map(
            () => `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Cras ultricesurna tortor,
        ac pharetra tortor venenatis id. Praesent consecteturtempor fringilla.
        Cras laoreet sodales pellentesque. Ut nibh leo,auctor id massa vitae,
        consequat congue turpis.`
          )
          .join('\n')}
      />
      <DialogActions buttons={['Close']} onClickHandlers={[handleClose]} />
    </div>
  );

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open scroll dialog
      </Button>
      <Dialog
        {...args}
        open={open}
        onClose={handleClose}
        title="Text with scroll"
      >
        {content}
      </Dialog>
    </div>
  );
}
