import { boolean, number, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import DateRangePicker from './DateRangePicker';
import moment from 'moment';

export default { title: 'organisms/DateRangePicker' };

export const Default = () => {
    const [endDate, setEndDate] = useState(moment().add(1, 'w'));
    const [startDate, setStartDate] = useState(moment());
    const [focusedInput, setFocusedInput] = useState(null);

    return (
        <DateRangePicker
            endDate={endDate}
            endDateId="daterangepicker_start"
            endDatePlaceholderText={text(
                'End date placeholder text',
                DateRangePicker.defaultProps.endDatePlaceholderText,
            )}
            focusedInput={focusedInput}
            isDisabled={boolean('Is disabled', DateRangePicker.defaultProps.isDisabled)}
            keepOpenOnDateSelect={boolean(
                'Keep open on date select',
                DateRangePicker.defaultProps.keepOpenOnDateSelect,
            )}
            label={text('Label', 'Vakantie periode')}
            numberOfMonths={number('Number of months', DateRangePicker.defaultProps.numberOfMonths)}
            onDatesChange={(event) => {
                setStartDate(event.startDate);
                setEndDate(event.endDate);
            }}
            onFocusChange={(newFocusedInput) => {
                setFocusedInput(newFocusedInput);
            }}
            startDate={startDate}
            startDateId="daterangepicker_start"
            startDatePlaceholderText={text(
                'Start date placeholder text',
                DateRangePicker.defaultProps.startDatePlaceholderText,
            )}
        />
    );
};
