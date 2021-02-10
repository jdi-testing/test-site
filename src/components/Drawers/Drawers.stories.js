import Drawer from '@material-ui/core/Drawer';
import Temporary from './TemporaryDrawer';
import Swipeable from './SwipeableTemporaryDrawer';
import Responsive from './ResponsiveDrawer';
import PersistentLeft from './PersistentDrawerLeft';
import PersistenRight from './PersistentDrawerRight';
import Mini from './MiniDrawer';
import PermanentLeft from './PermanentDrawerLeft';
import PermanentRight from './PermanentDrawerRight';
import Clipped from './ClippedDrawer';

export default {
  title: 'Material Ui/Navigation/Drawer',
  component: Drawer,
};

export const TemporaryDrawer = Temporary.bind({});

export const SwipeableTemporaryDrawer = Swipeable.bind({});

export const ResponsiveDrawer = Responsive.bind({});

export const PersistentDrawerLeft = PersistentLeft.bind({});

export const PersistentDrawerRight = PersistenRight.bind({});

export const MiniDrawer = Mini.bind({});

export const PermanentDrawerLeft = PermanentLeft.bind({});

export const PermanentDrawerRight = PermanentRight.bind({});

export const ClippedDrawer = Clipped.bind({});
