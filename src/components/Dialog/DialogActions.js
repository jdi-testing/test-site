import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

export default function Actions(props) {
  const { buttons, onClickHandlers } = props;

  const handleClick = (e, index) => {
    onClickHandlers[index]();
  };

  return (
    <DialogActions>
      {buttons.map((text, index) => (
        <Button
          onClick={(e) => handleClick(e, index)}
          color="primary"
          key={text}
        >
          {text}
        </Button>
      ))}
    </DialogActions>
  );
}
