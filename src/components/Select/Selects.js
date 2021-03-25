import React from 'react';
import SimpleSelect from "./SimpleSelect";
import MultipleSelect from "./MultipleSelect";
import NativeSelects from "./NativeSelect";
import GroupedSelect from "./GroupingSelect";
import ControlledOpenSelect from "./ControledSelect";
import DisabledSelect from "./DisabledSelect";

export default function Selects(...args) {
  return (
    <div>
      <h1>Select</h1>
      <h2>Simple select</h2>
      <SimpleSelect id={"simpleSelect"} />
      <h2>Disabled select</h2>
      <DisabledSelect id={"disabledSelect"} />
      <h2>Native select</h2>
      <NativeSelects id={"nativeSelect"} />
      <h2>Multiple select</h2>
      <MultipleSelect id={"multipleSelect"} />
      <h2>Grouping select</h2>
      <GroupedSelect id={"groupedSelect"} />
      <h2>Controlles open select</h2>
      <ControlledOpenSelect id={"controlledOpenSelect"} />
    </div>
  );
}