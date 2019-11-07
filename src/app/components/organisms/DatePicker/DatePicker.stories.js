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
            displayFormat={text('Display format', DatePicker.defaultProps.displayFormat)}
            id="datepicker"
            isDayHighlighted={(day) => day.day() === 6}
            isDisabled={boolean('Is disabled', DatePicker.defaultProps.isDisabled)}
            isFocused={isFocused}
            keepOpenOnDateSelect={boolean('Keep open on date select', DatePicker.defaultProps.keepOpenOnDateSelect)}
            label={text('Label', 'Speeldatum')}
            onDateChange={(newDate) => {
                setDate(newDate);
            }}
            onFocusChange={({ focused }) => {
                setFocus(focused);
            }}
            placeholder={text('Placeholder', 'Selecteer je datum')}
        />
    );
};

export const WithYearSelector = () => {
    const [date, setDate] = useState(null);
    const [isFocused, setFocus] = useState(true);

    return (
        <DatePicker
            date={date}
            displayFormat={text('Display format', DatePicker.defaultProps.displayFormat)}
            hasYearSelector
            id="datepickerWithYearSelector"
            isDayHighlighted={(day) => day.day() === 5}
            isDisabled={boolean('Is disabled', DatePicker.defaultProps.isDisabled)}
            isFocused={isFocused}
            isOutsideRange={(day) => day.isAfter(moment(), 'day')}
            keepOpenOnDateSelect={boolean('Keep open on date select', DatePicker.defaultProps.keepOpenOnDateSelect)}
            label={text('Label', 'Geboortedatum')}
            labelMonth={text('Label month', 'Maand')}
            labelYear={text('Label year', 'Jaar')}
            onDateChange={(newDate) => {
                setDate(newDate);
            }}
            onFocusChange={({ focused }) => {
                setFocus(focused);
            }}
            placeholder={text('Placeholder', 'Selecteer je datum')}
            yearCount={number('Year count', DatePicker.defaultProps.yearCount)}
        />
    );
};
