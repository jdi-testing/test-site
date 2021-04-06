import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import MailIcon from '@material-ui/icons/Mail';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginBottom: theme.spacing(2),
    },
    '& .MuiBadge-root': {
      marginRight: theme.spacing(4),
    },
    '& .MuiButtonGroup-root': {
        marginRight: theme.spacing(4),
    },
  },
}));

export default function BadgeVisibility() {
  const classes = useStyles();
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);
  const [showZero, setShowZero] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  const handleZeroVisibility = () => {
    setShowZero(!showZero);
  };

  return (
      <div className={classes.root}>
        <h1>Badges</h1>
        <div>
          <Badge badgeContent={4} color="primary" id="primaryColorBadge">
              <MailIcon />
          </Badge>

          <Badge badgeContent={4} color="error" id="errorColorBadge">
              <MailIcon />
          </Badge>
        </div>
        <div>
          <Badge color="secondary" badgeContent={count} max={10} showZero={showZero} id="secondaryColorBadge">
            <MailIcon />
          </Badge>
          <ButtonGroup>
            <Button
                aria-label="reduce"
                onClick={() => {
                  setCount(Math.max(count - 1, 0));
                }}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Button
                aria-label="increase"
                onClick={() => {
                  setCount(count + 1);
                }}
            >
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
          <FormControlLabel
              control={<Switch color="primary" checked={!showZero} onChange={handleZeroVisibility} />}
              label="Show Zero"
          />
        </div>
        <div>
          <Badge color="secondary" variant="dot" invisible={invisible} id="dotBadge">
            <MailIcon />
          </Badge>
          <FormControlLabel
              control={<Switch color="primary" checked={!invisible} onChange={handleBadgeVisibility} />}
              label="Show Badge"
          />
        </div>
        <div>
          <Badge badgeContent={-1} color="primary" anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MailIcon />
          </Badge>
          <Badge badgeContent={5} color="primary"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <MailIcon />
          </Badge>
          <Badge badgeContent={6} color="primary"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <MailIcon />
          </Badge>
          <Badge badgeContent={7} color="primary"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MailIcon />
          </Badge>
        </div>
      </div>
  );
}