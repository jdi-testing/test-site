// npm i --save date-fns@next @date-io/date-fns@1.3.13
// npm install @material-ui/pickers
import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';



export default function MaterialUIDatePicker(args) {

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        console.log('Date is updated to ', date);
        setSelectedDate(date);
    };

  return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker {...args}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }} />
      </MuiPickersUtilsProvider>
  );
}
