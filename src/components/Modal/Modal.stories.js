import Simple from './SimpleModal';
import Transition from './TransitionsModal';
import Spring from './TransitionsModal';
import Server from './ServerModal';

export default {
  title: 'Material UI/Utils/Modal',
  component: Simple,
};

export const SimpleModal = Simple.bind({});

export const TransitionsModal = Transition.bind({});

export const SpringModal = Spring.bind({});

export const ServerModal = Server.bind({});
