import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList(props) {
  const classes = useStyles();
  const [lastClick, setClick] = useState("");
  const handleClick = (event) => {
    setClick(event.target.textContent);
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="List items" {...props}>
        <ListItem button>
          <ListItemText primary="List item 1" onClick={(event => {handleClick(event)})}/>
        </ListItem>
        <ListItemLink button>
          <ListItemText primary="List item 2" onClick={(event => {handleClick(event)})}/>
        </ListItemLink>
      </List>
      <p id={"lastClickInfo"}>You clicked on: {lastClick}</p>
    </div>
  );
}
