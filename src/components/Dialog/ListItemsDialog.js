import React from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import Dialog from './Dialog';

const items = ['value #1', 'value #2', 'value #3'];

export default function ListItemsDialog(args) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(items[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handleListItemClick = (value) => {
    handleClose(value);
  };

  const itemList = (
    <List>
      {items.map((item) => (
        <ListItem button onClick={() => handleListItemClick(item)} key={item}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <div>
      <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
      <br />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <Dialog
        {...args}
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        title="Simple Dialog"
      >
        {itemList}
      </Dialog>
    </div>
  );
}
