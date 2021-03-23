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
      <ContainedButtons id={"containedBtns"} />
      <h2>Text buttons</h2>
      <TextButtons id={"textBtns"} />
      <h2>Buttons with icons and label</h2>
      <IconLabelButtons id={"iconLabelBtns"} />
      <h2>Icon buttons</h2>
      <IconButtons id={"iconBtns"} />
      <h2>Customized buttons</h2>
      <CustomizedButtons id={"customizedBtns"} />
      <h2>Complex buttons</h2>
      <ButtonBases id={"complexBtns"} />
    </div>
  );
}
