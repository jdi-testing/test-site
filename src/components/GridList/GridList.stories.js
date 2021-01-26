import React from 'react';

import ImageGridList from './ImageGridList';
import TitleBarGridList from './TitleBarGridList';
import SingleLineGridList from './SingleLineGridList';

export default {
    title: "Material Ui/Grid List",
    component: ImageGridList,
}

export const ImageGridListView = (args) => <ImageGridList {...args}>GridListForm</ImageGridList>;
export const TitleBarGridListView = (args) => <TitleBarGridList {...args}>GridListForm</TitleBarGridList>;
export const SingleLineGridListView = (args) => <SingleLineGridList {...args}>GridListForm</SingleLineGridList>; 