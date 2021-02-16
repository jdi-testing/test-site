import React from 'react';

import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BottomNavigation from './BottomNavigation';

export default {
  title: 'Material Ui/Navigation/Bottom Navigation',
  component: BottomNavigation,
};

const Template = (args) => (
  <BottomNavigation {...args}>
    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
  </BottomNavigation>
);

export const Default = Template.bind({});
Default.args = {
  showLabels: true,
  value: 0,
};
