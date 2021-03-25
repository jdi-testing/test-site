import React from 'react';
import SimpleBreadcrumbs from "./SimpleBreadcrumbs";
import IconBreadcrumbs from "./BreadcrumbsWithIcons";
import CollapsedBreadcrumbs from "./CollapsedBreadcrumbs";
import CustomizedBreadcrumbs from "./CustomizedBreadcrumbs";


export default function Selects(...args) {
  return (
    <div>
      <h1>Breadcrumbs</h1>
      <h2>Simple breadcrumbs</h2>
      <SimpleBreadcrumbs id={"simpleBreadcrumbs"} />
      <h2>Breadcrumbs with icons</h2>
      <IconBreadcrumbs id={"iconBreadcrumbs"} />
      <h2>Collapsed breadcrumbs</h2>
      <CollapsedBreadcrumbs id={"collapsedBreadcrumbs"} />
      <h2>Customized breadcrumbs</h2>
      <CustomizedBreadcrumbs id={"customizedBreadcrumbs"} />
      <br/>
      <h3 id={"materialUI"}>Material UI</h3>
      <h3 id={"core"}>Core</h3>
      <h3 id={"catalog"}>Catalog</h3>
      <h3 id={"accessories"}>Accessories</h3>
      <h3 id={"newCollection"}>New Collection</h3>
    </div>
  );
}