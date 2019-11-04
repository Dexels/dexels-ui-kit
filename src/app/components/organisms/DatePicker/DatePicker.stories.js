import { number, text } from '@storybook/addon-knobs';
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
            isOutsideRange={(day) => day.isAfter(moment(), 'day')}
            label={text('Label', 'Geboortedatum')}
            labelMonth={text('Label month', 'Maand')}
            labelYear={text('Label year', 'Jaar')}
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
