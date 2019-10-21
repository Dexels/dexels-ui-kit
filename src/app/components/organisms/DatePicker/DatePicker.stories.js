import React, { useState } from 'react';
import DatePicker from './DatePicker';
import moment from 'moment';

export default { title: 'organisms/DatePicker' };

export const Configurable = () => {
    const [date, setDate] = useState(moment());
    const [isFocused, setFocus] = useState(true);

    return (
        <DatePicker
            date={date}
            id="datepicker"
            isFocused={isFocused}
            onDateChange={(newDate) => {
                setDate(newDate);
            }}
            onFocusChange={({ focused }) => {
                setFocus(focused);
            }}
        />
    );
};
