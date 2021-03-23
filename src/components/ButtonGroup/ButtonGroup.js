import React from "react";
import BasicButtonGroup from "./BasicButtonGroup";
import GroupOrientation from "./VerticalButtonGroup";
import SplitButton from "./SplitButton";

export default function Buttons(...args) {
  return (
    <div>
      <h1>Button Groups</h1>
      <h2>Basic button groups</h2>
      <BasicButtonGroup id={"basicBtnGroups"} />
      <h2>Vertical button groups</h2>
      <GroupOrientation id={"verticalBtnGroups"} />
      <h2>Buttons with icons and label</h2>
      <SplitButton id={"splitBtnGroups"} />
    </div>
  );
}