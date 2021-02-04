import React from 'react';

import MaterialUIDatePicker from './DatePicker';
import MaterialUITimePicker from './TimePicker';

export default {
  title: 'Material UI/Inputs/Date Time Pickers',
  component: MaterialUIDatePicker, MaterialUITimePicker,
};

export const DatePickerInline = MaterialUIDatePicker.bind({});
DatePickerInline.args = {
  id: 'date-picker-inline',
  label: 'Date Picker Inline',
  margin: 'normal',
  disableToolbar: true,
  variant: 'inline',
  format: 'MM/dd/yyyy',
};

export const DatePickerDialog = MaterialUIDatePicker.bind({});
DatePickerDialog.args = {
  id: 'date-picker-dialog',
  label: 'Date Picker Dialog',
  margin: 'normal',
  format: "MM/dd/yyyy",
};

export const TimePicker = MaterialUITimePicker.bind({});
TimePicker.args = {
  id: 'time-picker',
  label: 'Time Picker',
  margin: 'normal',
};