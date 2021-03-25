import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import FloatingActionButtonZoom from "./AnimationFloating";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Floating Action Buttons</h1>
      <h2>Basic buttons</h2>
      <div className={classes.root} id={"basicActionBtns"}>
        <Fab color="primary" aria-label="add" onClick={() => setText("Add")}>
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit" onClick={() => setText("Edit")}>
          <EditIcon />
        </Fab>
        <Fab variant="extended" onClick={() => setText("Navigate")}>
          <NavigationIcon className={classes.extendedIcon} />
          Navigate
        </Fab>
        <Fab disabled aria-label="like" onClick={() => setText("Like")}>
          <FavoriteIcon />
        </Fab>
      </div>
      <p id={"basicActionBtnsLastClick"}>Last click: {text}</p>

      <h2>Animated buttons</h2>
      <FloatingActionButtonZoom id={"animatedActionBtns"} />
    </div>
  );
}