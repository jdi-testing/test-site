import React from 'react';

import BuildAppBar from './AppBar';

export default {
    title: "Material Ui/Surfaces/App Bar",
    component: BuildAppBar,
}

export const SimpleAppBar = (args) => <BuildAppBar {...args}>BuildAppBar</BuildAppBar>;
SimpleAppBar.args = {
    position: "static",
    color: "primary",
};