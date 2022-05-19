import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function getSteps() {
  return ['Step #1', 'Step #2', 'Step #3'];
}

function getStepContent(stepIndex) {
  return `You are on ${getSteps()[stepIndex]}`;
}

export default function StepperWithError(args) {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const isStepFailed = (step) => step === 1;

  function simpleStep(label) {
    return (
      <Step key={label}>
        <StepLabel>{label}</StepLabel>
      </Step>
    );
  }

  function inlineStep(label, index) {
    return (
      <Step key={label}>
        <StepLabel>{label}</StepLabel>
        <StepContent>
          <Typography id="activeSimpleStep">{getStepContent(index)}</Typography>
          <div>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </StepContent>
      </Step>
    );
  }

  const errorStepper = (label) => (
    <Step key={label}>
      <StepLabel optional="Alert message" error>{label}</StepLabel>
    </Step>
  );

  const getStep = (label, index) => (isStepFailed(index) ? errorStepper(label) : simpleStep(label));

  return (
    <div>
      <Stepper {...args} activeStep={activeStep}>
        {args.inlineButtons
          ? steps.map((label, index) => inlineStep(label, index))
          : steps.map((label, index) => getStep(label, index))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          [
            args.inlineButtons ? null : (
              <div>
                <Typography>{getStepContent(activeStep)}</Typography>
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                  </Button>
                  <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            ),
          ]
        )}
      </div>
    </div>
  );
}
