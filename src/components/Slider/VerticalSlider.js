import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    height: 300,
  },
});

export default function VerticalSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    console.log('Vertical Slider value is updated to ', newValue);
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Typography id="vertical-slider" gutterBottom>
        Vertical Slider
      </Typography>
      <div className={classes.root}>
        <Slider
          orientation="vertical"
          onChange={handleChange}
          defaultValue={30}
          aria-labelledby="vertical-slider"
        />
      </div>
    </React.Fragment>
  );
}
