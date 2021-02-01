import React from 'react';

import BuildAppBar from './AppBar';

export default {
    title: "Material Ui/AppBar",
    component: BuildAppBar,
}

export const SimpleAppBar = (args) => <BuildAppBar {...args}>BuildAppBar</BuildAppBar>;
SimpleAppBar.args = {
                      position: "static",
                  };