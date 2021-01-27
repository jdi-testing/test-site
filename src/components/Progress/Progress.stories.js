import Circular from './CircularIndeterminate';
import CirDeterminate from './CircularDeterminate';
import Intergraion from './CircularIntegration';
import CircularWithLabel from './CircularWithValueLabel';
import Linear from './LinearIndeterminate';
import LinDeterminate from './LinearDeterminate';
import LinBuffer from './LinearBuffer';
import LinearWithLabel from './LinearWithValueLabel';
import Customized from './CustomizedProgressBars';
import Delay from './DelayingAppearance';

export default {
  title: 'Material Ui/Feedback/Progress',
  component: Circular,
};

export const CircularIndeterminate = Circular.bind({});

export const SecondaryCircularIndeterminate = Circular.bind({});
SecondaryCircularIndeterminate.args = {
  color: 'secondary',
};

export const CircularDeterminate = CirDeterminate.bind({});

export const CircularIntegration = Intergraion.bind({});

export const CircularWithValueLabel = CircularWithLabel.bind({});

export const LinearProgress = Linear.bind({});

export const LinearProgressSecondary = Linear.bind({});
LinearProgressSecondary.args = {
  color: 'secondary',
}

export const LinearIndeterminate = LinDeterminate.bind({});

export const LinearBuffer = LinBuffer.bind({});

export const LinearWithValueLabel = LinearWithLabel.bind({});

export const CustomizedProgressBars = Customized.bind({});

export const DelayingAppearance = Delay.bind({});
