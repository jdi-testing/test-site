// npm i --save date-fns@next @date-io/date-fns@1.3.13
// npm install @material-ui/pickers
import React from 'react';
import MaterialUIPickers from "./DateTimePickers";
import NativeDatePickers from "./NativePickers";
import DateAndTimePickers from "./DateTimePicker";
import TimePickers from "./TimePicker";

export default function DatePickers(args) {


  return (
      <div>
        <h1>Date / Time</h1>
        <h2>Date and time pickers</h2>
        <MaterialUIPickers id={"materialUIDateTimePickers"} />
        <h2>Native pickers</h2>
        <NativeDatePickers id={"nativeDatePickers"} />
        <h2>Date & Time pickers</h2>
        <DateAndTimePickers id={"dateTimePickers"} />
        <h2>Time pickers</h2>
        <TimePickers id={"timePickers"} />
      </div>
  );
}
