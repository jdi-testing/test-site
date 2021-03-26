import React from 'react';
import CircularIndeterminate from "./CircularIndeterminate";
import CircularDeterminate from "./CircularDeterminate";
import CircularIntegration from "./CircularIntegration";
import {CircularWithValueLabel} from "./Progress.stories";
import LinearIndeterminate from "./LinearIndeterminate";
import LinearDeterminate from "./LinearDeterminate";
import LinearBuffer from "./LinearBuffer";
import LinearWithValueLabel from "./LinearWithValueLabel";
import CustomizedProgressBars from "./CustomizedProgressBars";
import DelayingAppearance from "./DelayingAppearance";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
    },
}));

export default function Progresses(...args) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Progress</h1>
      <h2>Circular indeterminate</h2>
      <CircularIndeterminate id={"circularIndeterminateProgress"} />
      <h2>Circular determinate</h2>
      <CircularDeterminate id={"circularDeterminateProgress"} />
      <h2>Interactive integration</h2>
      <CircularIntegration id={"circularInteractionProgress"} />
      <h2>Circular with label</h2>
      <CircularWithValueLabel id={"circularLabelProgress"} />
      <h2>Linear indeterminate</h2>
      <LinearIndeterminate id={"linearIndeterminateProgress"} />
      <h2>Linear determinate</h2>
      <LinearDeterminate id={"linearDeterminateProgress"} />
      <h2>Linear buffer</h2>
      <LinearBuffer id={"linearBufferProgress"} />
      <h2>Linear with label</h2>
      <LinearWithValueLabel id={"linearLabelProgress"} />
      <h2>Customized progress</h2>
      <CustomizedProgressBars id={"customizedProgress"} />
      <h2>Delaying appearance</h2>
      <DelayingAppearance id={"delayingAppearanceProgress"} />
    </div>
  );
}