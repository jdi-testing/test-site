import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Switch from '@material-ui/core/Switch';
import WifiIcon from '@material-ui/icons/Wifi';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function Lists() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [checked, setChecked] = React.useState(['wifi']);
  const [checkedItem, setCheckedItem] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleToggleItem = (value) => () => {
    const currentIndex = checkedItem.indexOf(value);
    const newCheckedItems = [...checkedItem];

    if (currentIndex === -1) {
      newCheckedItems.push(value);
    } else {
      newCheckedItems.splice(currentIndex, 1);
    }

    setCheckedItem(newCheckedItems);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <h1>Lists</h1>
      <div className={classes.root}>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox checked={dense} onChange={(event) => setDense(event.target.checked)} />
            }
            label="Enable dense"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={secondary}
                onChange={(event) => setSecondary(event.target.checked)}
              />
            }
            label="Enable secondary text"
          />
        </FormGroup>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.title}>
              Text only
            </Typography>
            <div className={classes.demo}>
              <List dense={dense}>
                {generate(
                  <ListItem>
                    <ListItemText
                      primary="Single-line item"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>,
                )}
              </List>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.title}>
              Icon with text
            </Typography>
            <div className={classes.demo}>
              <List dense={dense}>
                {generate(
                  <ListItem>
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Single-line item"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>,
                )}
              </List>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.title}>
              Avatar with text
            </Typography>
            <div className={classes.demo}>
              <List dense={dense}>
                {generate(
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Single-line item"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>,
                )}
              </List>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.title}>
              Avatar with text and icon
            </Typography>
            <div className={classes.demo}>
              <List dense={dense}>
                {generate(
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Single-line item"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>,
                )}
              </List>
            </div>
          </Grid>
        </Grid>
        <h2>Selected list</h2>
        <List component="nav" aria-label="main mailbox folders" id={"selectedList"}>
          <ListItem
            button
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav" aria-label="secondary mailbox folder">
          <ListItem
            button
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <ListItemText primary="Spam" />
          </ListItem>
        </List>
        <h2>CheckBox list</h2>
        <List className={classes.root}>
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem key={value} role={undefined} dense button onClick={handleToggleItem(value)}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checkedItem.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="comments">
                    <CommentIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
        <h2>List with switch</h2>
        <List subheader={<ListSubheader>Settings</ListSubheader>} className={classes.root}>
          <ListItem>
            <ListItemIcon>
              <WifiIcon />
            </ListItemIcon>
            <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                onChange={handleToggle('wifi')}
                checked={checked.indexOf('wifi') !== -1}
                inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BluetoothIcon />
            </ListItemIcon>
            <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                onChange={handleToggle('bluetooth')}
                checked={checked.indexOf('bluetooth') !== -1}
                inputProps={{ 'aria-labelledby': 'switch-list-label-bluetooth' }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <h2>Pinned subheader List</h2>
        <List className={classes.root} subheader={<li />}>
          {[0, 1, 2, 3, 4].map((sectionId) => (
            <li key={`section-${sectionId}`} className={classes.listSection}>
              <ul className={classes.ul}>
                <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
                {[0, 1, 2].map((item) => (
                  <ListItem key={`item-${sectionId}-${item}`}>
                    <ListItemText primary={`Item ${item}`} />
                  </ListItem>
                ))}
              </ul>
            </li>
          ))}
        </List>
      </div>
    </div>
  );
}
