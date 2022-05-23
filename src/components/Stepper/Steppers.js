import React from 'react';
import SimpleStepper from './SimpleStepper';
import HorizontalNonLinearStepper from './NonLinearStepper';
import VerticalLinearStepper from './VerticalStepper';
import TextMobileStepper from './MobileStepper';
import DotsMobileStepper from './MobileDotsStepper';
import ProgressMobileStepper from './MobileProgressStepper';
import StepperWithOption from './StepperWithOption';
import StepperWithError from './StepperWithError';

export default function Steppers(...args) {
  return (
    <div>
      <h1>Steppers</h1>
      <h2>Simple linear stepper</h2>
      <SimpleStepper id="simpleStepper" />
      <h2>Non-linear stepper</h2>
      <HorizontalNonLinearStepper id="nonLinearStepper" />
      <h2>Non-linear stepper with disable complete</h2>
      <HorizontalNonLinearStepper id="stepperWithDisableComplete" isDisableComplete />
      <h2>Stepper with error</h2>
      <StepperWithError id="stepperWithError" />
      <h2>Stepper with optional</h2>
      <StepperWithOption id="stepperWithOption" />
      <h2>Vertical stepper</h2>
      <VerticalLinearStepper id="verticalStepper" />
      <h2>Mobile text stepper</h2>
      <TextMobileStepper id="mobileTextStepper" />
      <h2>Mobile dots stepper</h2>
      <DotsMobileStepper id="mobileDotsStepper" />
      <h2>Mobile progress stepper</h2>
      <ProgressMobileStepper id="mobileProgressStepper" />
    </div>
  );
}
