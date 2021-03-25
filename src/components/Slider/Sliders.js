import React from 'react';
import RangeSlider from "./RangeSlider";
import VerticalSlider from "./VerticalSlider";
import ContinuousSlider from "./Slider";
import DiscreteSlider from "./DiscreteSlider";
import CustomDiscreteSlider from "./CustomMarksSlider";
import LabeledDiscreteSlider from "./LabeledSlider";
import InputSlider from "./SliderWithInput";

export default function Selects(...args) {
  return (
    <div>
      <h1>Slider</h1>
      <h2>Continuous sliders</h2>
      <ContinuousSlider id={"continuousSlider"} />
      <h2>Discrete sliders</h2>
      <DiscreteSlider id={"discreteSlider"} />
      <h2>Custom marks and restricted values</h2>
      <CustomDiscreteSlider id={"customDiscreteSlider"} />
      <h2>Label always visible</h2>
      <LabeledDiscreteSlider id={"alwaysVisibleLabelsSlider"} />
      <h2>Range slider</h2>
      <RangeSlider id={"rangeSlider"} />
      <h2>Slider with input field</h2>
      <InputSlider id={"inputSlider"} />
      <h2>Vertical sliders</h2>
      <VerticalSlider id={"verticalSlider"} />
    </div>
  );
}