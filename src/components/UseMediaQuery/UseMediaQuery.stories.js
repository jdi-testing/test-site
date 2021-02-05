import React from 'react';

import UseMediaQuery from "./UseMediaQuery";
import UseWidth from "./UseWidth";

export default {
    title: 'Material UI/Utils/UseMediaQuery',
    component: UseMediaQuery,
};

const UseMediaQueryTemplate = (args) => (
    <UseMediaQuery {...args}>useMediaQuery content</UseMediaQuery>
);

export const useMediaQuery = UseMediaQueryTemplate.bind({});

const UseWidthTemplate = (args) => (
    <UseWidth {...args}>UseWidth content</UseWidth>
);

export const useWidth = UseWidthTemplate.bind({});
