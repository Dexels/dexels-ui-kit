import { boolean, number, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import DatePicker from './DatePicker';
import moment from 'moment';

export default { title: 'organisms/DatePicker' };

export const Default = () => {
    const [date, setDate] = useState(moment());
    const [isFocused, setFocus] = useState(true);

    return (
        <DatePicker
            date={date}
            id="datepicker"
            isDayHighlighted={(day) => day.day() === 6}
            isFocused={isFocused}
            label={text('Label', 'Speeldatum')}
            onDateChange={(newDate) => {
                setDate(newDate);
            }}
            onFocusChange={({ focused }) => {
                setFocus(focused);
            }}
        />
    );
};

export const WithYearSelector = () => {
    const [date, setDate] = useState(moment());
    const [isFocused, setFocus] = useState(true);

    return (
        <DatePicker
            date={date}
            hasYearSelector
            id="datepickerWithYearSelector"
            isDayHighlighted={(day) => day.day() === 5}
            isFocused={isFocused}
            label={text('Label', 'Speeldatum')}
            onDateChange={(newDate) => {
                setDate(newDate);
            }}
            onFocusChange={({ focused }) => {
                setFocus(focused);
            }}
            yearCount={number('Year count', DatePicker.defaultProps.yearCount)}
        />
    );
};
