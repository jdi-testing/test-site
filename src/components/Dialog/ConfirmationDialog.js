import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Dialog from './Dialog';
import DialogContent from './DialogContent';
import DialogActions from './DialogActions';

const options = ['value #1', 'value #2', 'value #3'];

function ConfirmationDialogRaw(props) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const radio = (
    <RadioGroup ref={radioGroupRef} value={value} onChange={handleChange}>
      {options.map((option) => (
        <FormControlLabel
          value={option}
          key={option}
          control={<Radio />}
          label={option}
        />
      ))}
    </RadioGroup>
  );

  return (
    <Dialog
      onEntering={handleEntering}
      open={open}
      {...other}
      title="Dialog with confirmation"
    >
      <DialogContent>{radio}</DialogContent>
      <DialogActions
        buttons={['Cancel', 'Ok']}
        onClickHandlers={[handleCancel, handleOk]}
      />
    </Dialog>
  );
}

export default function ConfirmationDialog() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('Default');

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };

  return (
    <div>
      <List>
        <ListItem button onClick={handleClickListItem}>
          <ListItemText primary="Choose an option" secondary={value} />
        </ListItem>
        <ConfirmationDialogRaw
          open={open}
          onClose={handleClose}
          value={value}
        />
      </List>
    </div>
  );
}
