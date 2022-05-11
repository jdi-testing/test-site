import React from 'react';
import ContainedButtons from "./SimpleButtons";
import TextButtons from "./TextButtons";
import IconLabelButtons from "./LabeledButtons";
import IconButtons from "./IconButtons";
import CustomizedButtons from "./CustomizedButtons";
import ButtonBases from "./ComplexButtons";


export default function Buttons(...args) {
  return (
    <div>
      <h1>Buttons</h1>
      <h2>Contained buttons</h2>
      <ContainedButtons id={"contained-button"} />
      <h2>Text buttons</h2>
      <TextButtons id={"text-button"} />
      <h2>Buttons with icons and label</h2>
      <IconLabelButtons id={"icon-label-button"} />
      <h2>Icon buttons</h2>
      <IconButtons id={"icon-button"} />
      <h2>Customized buttons</h2>
      <CustomizedButtons id={"customized-button"} />
      <h2>Complex buttons</h2>
      <ButtonBases id={"complex-button"} />
    </div>
  );
}
