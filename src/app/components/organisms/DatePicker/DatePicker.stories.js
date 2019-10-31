import { boolean, text, number } from '@storybook/addon-knobs';
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
            hasYearSelector={boolean('hasYearSelector', DatePicker.defaultProps.hasYearSelector)}
            id="datepicker"
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
