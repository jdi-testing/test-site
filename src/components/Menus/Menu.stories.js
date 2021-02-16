// import Fade from '@material-ui/core/Fade';

import Menu from '@material-ui/core/Menu';
import Simple from './SimpleMenu';
import SelectedMenu from './SelectedMenu';
import MenuList from './MenuList';
import Context from './ContextMenu';
import IconsMenu from './IconsMenu';

export default {
  title: 'Material Ui/Navigation/Menu',
  component: Menu,
};

export const SimpleMenu = Simple.bind({});

export const ScrollMenu = Simple.bind({});
ScrollMenu.args = {
  style: {
    maxHeight: 200,
  },
};

export const SelectedWithVerticalPositioning = SelectedMenu.bind({});

export const SelectedNoVerticalPositioning = SelectedMenu.bind({});
SelectedNoVerticalPositioning.args = {
  variant: 'menu',
};

export const MenuListWithPositioning = MenuList.bind({});

export const ContextMenu = Context.bind({});

export const MenuWithIcons = IconsMenu.bind({});
