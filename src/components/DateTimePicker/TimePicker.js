// npm i --save date-fns@next @date-io/date-fns@1.3.13
// npm install @material-ui/pickers
import React from 'react';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
} from '@material-ui/pickers';

export default function MaterialUITimePicker(args) {

    const [selectedTime, setSelectedTime] = React.useState(new Date());

    const handleTimeChange = (time) => {
        console.log('Time is updated to ', time);
        setSelectedTime(time);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker {...args}
                                value={selectedTime}
                                onChange={handleTimeChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }} />
        </MuiPickersUtilsProvider>
    );
};