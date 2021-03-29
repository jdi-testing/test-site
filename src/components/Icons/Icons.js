import React from 'react';
import SvgMaterialIcons from "./SimpleIcons";
import SvgIconsColor from "./ColorIcons";
import SvgIconsSize from "./SizeIcons";

export default function Icons() {

  return (
    <div>
      <h1>Icons</h1>
      <h2>Simple icons</h2>
      <SvgMaterialIcons id={"simpleIcons"} />
      <h2>Color</h2>
      <SvgIconsColor id={"colorIcons"} />
      <h2>Size</h2>
      <SvgIconsSize id={"sizeIcons"} />
    </div>
  );
}