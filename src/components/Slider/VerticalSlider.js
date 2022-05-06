import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    height: 300,
  },
});

export default function VerticalSlider({id}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id={`${id}-value`} gutterBottom>
        Vertical Slider with value {value}
      </Typography>
      <Slider
        id={id}
        orientation="vertical"
        onChange={handleChange}
        defaultValue={30}
        aria-labelledby="vertical-slider"
      />
    </div>
  );
}
