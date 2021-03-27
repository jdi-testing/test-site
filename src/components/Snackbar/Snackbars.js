import React from 'react';
import SimpleSnackbar from "./SimpleSnackbar";
import CustomizedSnackbars from "./CustomizedSnackbars";
import PositionedSnackbar from "./PositionedSnackbar";
import LongTextSnackbar from "./LongTextSnackbar";
import TransitionsSnackbar from "./TransitionsSnackbar";
import ConsecutiveSnackbars from "./ConsecutiveSnackbars";
import DirectionSnackbar from "./DirectionSnackbar";
import IntegrationNotistack from "./IntegrationNotistack";



export default function Snackbars(...args) {
  return (
    <div>
      <h1>Snackbars</h1>
      <h2>Simple snackbar</h2>
      <SimpleSnackbar id={"simpleSnackbar"} />
      <h2>Customized snackbars</h2>
      <CustomizedSnackbars id={"customSnackbar"} />
      <h2>Positioned snackbars</h2>
      <PositionedSnackbar id={"positionSnackbar"} />
      <h2>Message Length</h2>
      <LongTextSnackbar id={"longTextSnackbar"} />
      <h2>Consecutive Snackbars</h2>
      <ConsecutiveSnackbars id={"consecutiveSnackbar"} />
      <h2>Change Transition</h2>
      <TransitionsSnackbar id={"transitionSnackbar"} />
      <h2>Control Slide direction</h2>
      <DirectionSnackbar id={"directionSnackbar"} />
      <h2>Complementary projects</h2>
      <IntegrationNotistack id={"integrationSnackbar"} />
    </div>
  );
}