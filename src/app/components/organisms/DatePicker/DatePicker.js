import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { SingleDatePicker } from 'react-dates';
import { StyledDatePicker } from './DatePicker.sc';

const DatePicker = () => {
    const [date, setDate] = useState(moment());
    const [isFocused, setFocus] = useState(true);

    return (
        <StyledDatePicker>
            <SingleDatePicker
                date={date}
                focused={isFocused}
                id="your_unique_id"
                isOutsideRange={() => false}
                numberOfMonths={1}
                onDateChange={(newDate) => {
                    setDate(newDate);
                }}
                onFocusChange={({ focused }) => {
                    setFocus(focused);
                }}
            />
        </StyledDatePicker>
    );
};

export default DatePicker;
