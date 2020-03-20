import {
    boolean,
    number,
    select,
    text,
} from '@storybook/addon-knobs';
import moment, { Moment } from 'moment';
import React, { FunctionComponent, useState } from 'react';
import SingleDatePicker from './SingleDatePicker';
import { SingleDatePickerVariant } from '../types';

export default { title: 'organisms/DatePicker' };

export const Default: FunctionComponent = () => {
    const [date, setDate] = useState<Moment | null>(moment());
    const [isFocused, setIsFocused] = useState(true);

    return (
        <SingleDatePicker
            date={date}
            displayFormat={text('Display format', 'ddd D MMM Y')}
            id="datepicker"
            isDayHighlighted={(day): boolean => day.day() === 6}
            isDisabled={boolean('Is disabled', false)}
            isFocused={isFocused}
            keepOpenOnDateSelect={boolean(
                'Keep open on date select',
                true,
            )}
            label={text('Label', 'Speeldatum')}
            numberOfMonths={number('Number of months', 1)}
            onDateChange={(newDate): void => {
                setDate(newDate);
            }}
            onFocusChange={({ focused }): void => {
                setIsFocused(Boolean(focused));
            }}
            placeholder={text('Placeholder', 'Selecteer je datum')}
            variant={select('Variant', SingleDatePickerVariant, SingleDatePickerVariant.OUTLINE)}
        />
    );
};

export const WithYearSelector: FunctionComponent = () => {
    const [date, setDate] = useState<Moment | null>(moment());
    const [isFocused, setIsFocused] = useState(true);

    return (
        <SingleDatePicker
            date={date}
            displayFormat={text('Display format', 'ddd D MMM Y')}
            hasYearSelector
            id="datepickerWithYearSelector"
            isDayHighlighted={(day): boolean => day.day() === 5}
            isDisabled={boolean('Is disabled', false)}
            isFocused={isFocused}
            isOutsideRange={(day): boolean => day.isAfter(moment(), 'day')}
            keepOpenOnDateSelect={boolean('Keep open on date select', true)}
            label={text('Label', 'Geboortedatum')}
            labelMonth={text('Label month', 'Maand')}
            labelYear={text('Label year', 'Jaar')}
            numberOfMonths={number('Number of months', 1)}
            onDateChange={(newDate): void => {
                setDate(newDate);
            }}
            onFocusChange={({ focused }): void => {
                setIsFocused(Boolean(focused));
            }}
            placeholder={text('Placeholder', 'Selecteer je datum')}
            variant={select('Variant', SingleDatePickerVariant, SingleDatePickerVariant.OUTLINE)}
            yearCount={number('Year count', 100)}
        />
    );
};
