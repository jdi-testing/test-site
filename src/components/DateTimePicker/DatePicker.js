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
        <h3>Datepickers</h3>
        <NativeDatePickers id={"nativeDatePickers"} />
        <h3>Date & Time pickers</h3>
        <DateAndTimePickers id={"dateTimePickers"} />
        <h3>Time pickers</h3>
        <TimePickers id={"timePickers"} />
      </div>
  );
}
