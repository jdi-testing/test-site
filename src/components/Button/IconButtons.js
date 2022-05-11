import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function IconButtons({id}) {
  const classes = useStyles();
  const [text, setText] = useState("");

  return (
    <div className={classes.root}>
      <IconButton id={`${id}-delete`} aria-label="delete" onClick={() => setText("Delete enabled")}>
        <DeleteIcon />
      </IconButton>
      <IconButton id={`${id}-disabled`} aria-label="delete" disabled color="primary" onClick={() => setText("Delete disabled")}>
        <DeleteIcon />
      </IconButton>
      <IconButton id={`${id}-alarm`} color="secondary" aria-label="add an alarm" onClick={() => setText("Alarm")}>
        <AlarmIcon />
      </IconButton>
      <IconButton id={`${id}-cart`} color="primary" aria-label="add to shopping cart" onClick={() => setText("Shopping cart")}>
        <AddShoppingCartIcon />
      </IconButton>
      <p id={`${id}-last-click`}>Last click: {text}</p>
    </div>
  );
}
