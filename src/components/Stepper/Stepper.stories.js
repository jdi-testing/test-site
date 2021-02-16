import Stepper from './SimpleStepper';
import Optional from './StepperWithOption';
import NonLinear from './NonLinearStepper';
import Mobile from './MobileStepper';

export default {
  title: 'Material Ui/Navigation/Stepper',
  component: Stepper,
};

export const HorizontalLinearStepper = Stepper.bind({});
HorizontalLinearStepper.args = {
  alternativeLabel: false,
};

export const VerticalStepper = Stepper.bind({});
VerticalStepper.args = {
  orientation: 'vertical',
  inlineButtons: true,
};

export const StepperWithOptionalStep = Optional.bind({});

export const NonlinearStepper = NonLinear.bind({});

export const MobileStepperWithText = Mobile.bind({});
MobileStepperWithText.args = {
  variant: 'text',
};

export const MobileStepperWithDots = Mobile.bind({});
MobileStepperWithDots.args = {
  variant: 'dots',
};

export const MobileStepperProgressBar = Mobile.bind({});
MobileStepperProgressBar.args = {
  variant: 'progress',
};
