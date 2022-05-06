import React, {useState} from 'react';
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createTheme({
  palette: {
    primary: green,
  },
});

export default function CustomizedButtons({id}) {
  const classes = useStyles();
  const [text, setText] = useState("");
  const handleClick = (event) => {
    setText(event.target.textContent);
  };

  return (
    <div>
      <ColorButton id={`${id}-custom-css`}
                   variant="contained"
                   color="primary"
                   className={classes.margin}
                   onClick={(event) => handleClick(event)}>
        Custom CSS
      </ColorButton>
      <ThemeProvider theme={theme}>
        <Button id={`${id}-theme-provider`}
                variant="contained"
                color="primary"
                className={classes.margin}
                onClick={(event) => handleClick(event)}>
          Theme Provider
        </Button>
      </ThemeProvider>
      <BootstrapButton
        id={`${id}-bootstrap`}
        variant="contained"
        color="primary"
        disableRipple
        className={classes.margin}
        onClick={(event) => handleClick(event)}>
        Bootstrap
      </BootstrapButton>
      <p id={`${id}-last-click`}>Last click: {text}</p>
    </div>
  );
}
