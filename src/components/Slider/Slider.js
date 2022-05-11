import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 400,
  },
});

export default function ContinuousSlider({id}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography gutterBottom>
        Default Slider
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs>
          <Slider id={id} value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
        </Grid>
        <Typography id={`${id}-value`}>Selected value: {value}</Typography>
      </Grid>
      <Typography gutterBottom>
        Disabled slider
      </Typography>
      <Slider id={`${id}-disabled`} disabled defaultValue={30} aria-labelledby="disabled-slider" />
    </div>
  );
}
