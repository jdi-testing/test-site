import React from 'react';
import Breadcrumbs from "./Breadcrumbs";
import RouterBreadcrumbs from "./RouterBreadcrumbs";
import BreadcrumbsWithIcons from "./BreadcrumbsWithIcons";
import CustomizedBreadcrumbs from "./CustomizedBreadcrumbs";
import CustomSeparatorsBreadcrumbs from "./CustomSeparatorsBreadcrumbs";
import SimpleBreadcrumbs from "./SimpleBreadcrumbs";
import CollapsedBreadcrumbs from "./CollapsedBreadcrumbs";

export default {
    title: 'Material Ui/Navs/Breadcrumbs',
    component: Breadcrumbs,
};

export const Simple = SimpleBreadcrumbs.bind({});

export const CustomSeparator = CustomSeparatorsBreadcrumbs.bind({});

export const WithIcons = BreadcrumbsWithIcons.bind({});

export const Collapsed = CollapsedBreadcrumbs.bind({});

export const RouterIntegration = RouterBreadcrumbs.bind({});

export const Customized = CustomizedBreadcrumbs.bind({});





