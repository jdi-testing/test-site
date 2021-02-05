import Simple from './SimpleSnackbar';
import Customized from './CustomizedSnackbars';
import Positioned from './PositionedSnackbar';
import LongText from './LongTextSnackbar';
import Consecutive from './ConsecutiveSnackbars';
import Fab from './FabIntegrationSnackbar';
import Transition from './TransitionsSnackbar';
import Direction from './DirectionSnackbar';
import Integration from './IntegrationNotistack';

export default {
  title: 'Material Ui/Feedback/Snackbar',
  component: Simple,
};

export const SimpleSnackbar = Simple.bind({});

export const CustomizedSnackbars = Customized.bind({});

export const PositionedSnackbar = Positioned.bind({});

export const LongTextSnackbar = LongText.bind({});

export const ConsecutiveSnackbars = Consecutive.bind({});

export const FabIntegrationSnackbar = Fab.bind({});

export const TransitionsSnackbar = Transition.bind({});

export const DirectionSnackbar = Direction.bind({});

export const IntegrationNotistack = Integration.bind();
