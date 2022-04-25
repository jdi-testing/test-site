import React from 'react';
import MenuAppBar from './AppBarMenu';
import ProminentAppBar from './ProminentAppBar';
import ButtonAppBar from './SimpleAppBar';
import { makeStyles } from '@material-ui/core/styles';
import SearchAppBar from './SearchAppBar';

const useStyles = makeStyles((theme) => ({
  app_root: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative'
  },

}));

export default function BuildAppBar() {
  const classes = useStyles();

    return (
    <div>
      <h1>App Bar</h1>
      <h2>Simple App bar</h2>
      <ButtonAppBar id={"simpleAppBar"} />
      <h2>App Bar with menu</h2>
      <MenuAppBar id={"menuAppBar"} />
      <h2>Search App Bar</h2>
      <SearchAppBar id={"searchAppBar"} />
      <h2>Prominent App Bar</h2>
      <ProminentAppBar id={"prominentAppBar"} />

    </div>
    );
}
