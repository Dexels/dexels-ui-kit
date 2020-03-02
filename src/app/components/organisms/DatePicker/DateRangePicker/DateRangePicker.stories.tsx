import { boolean, number, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import DateRangePicker from './DateRangePicker';
import moment from 'moment';

const defaultEndDate = moment().add(1, 'w');
const defaultStartDate = moment();

export default { title: 'organisms/DateRangePicker' };

export const Default = () => {
    const [endDate, setEndDate] = useState(defaultEndDate);
    const [startDate, setStartDate] = useState(defaultStartDate);
    const [focusedInput, setFocusedInput] = useState(null);

    return (
        <DateRangePicker
            buttonCancelText={text('Button cancel text', 'reset')}
            buttonConfirmText={text('Button confirm text', 'toepassen')}
            displayFormat={text('Display format', DateRangePicker.defaultProps.displayFormat)}
            endDate={endDate}
            endDateId="daterangepicker_end"
            endDatePlaceholderText={text('End date placeholder text', 'Eind datum')}
            focusedInput={focusedInput}
            footerText="Selecteer minimaal twee dagen"
            isDayHighlighted={(day) => day.day() === 1}
            isDisabled={boolean('Is disabled', DateRangePicker.defaultProps.isDisabled)}
            isOutsideRange={() => false}
            keepOpenOnDateSelect
            label={text('Label', 'Je favoriete periode')}
            minimumNights={1}
            numberOfMonths={number('Number of months', DateRangePicker.defaultProps.numberOfMonths)}
            onCancel={() => {
                setStartDate(defaultStartDate);
                setEndDate(defaultEndDate);
            }}
            onConfirm={() => {
                setFocusedInput(null);
            }}
            onDatesChange={(event) => {
                setStartDate(event.startDate);
                setEndDate(event.endDate);
            }}
            onFocusChange={(input) => {
                setFocusedInput(input);
            }}
            shortcuts={[
                {
                    onClick: () => {
                        setStartDate(moment());
                        setEndDate(moment().add(1, 'd'));
                    },
                    text: 'vandaag en morgen',
                },
                {
                    onClick: () => {
                        setStartDate(moment().day(6));
                        setEndDate(moment().day(6).add(1, 'd'));
                    },
                    text: 'aankomend weekend',
                },
                {
                    onClick: () => {
                        setStartDate(moment());
                        setEndDate(moment().add(13, 'd'));
                    },
                    text: 'de komende twee weken',
                },
                {
                    onClick: () => {
                        setStartDate(moment().add(1, 'M').startOf('month'));
                        setEndDate(moment().add(1, 'M').endOf('month'));
                    },
                    text: 'de volgende maand',
                },
            ]}
            shortcutsText={text('Shortcuts text', 'Snelkeuzes')}
            startDate={startDate}
            startDateId="daterangepicker_start"
            startDatePlaceholderText={text('Start date placeholder text', 'Start datum')}
        />
    );
};

export const DefaultWithoutShortcuts = () => {
    const [endDate, setEndDate] = useState(defaultEndDate);
    const [startDate, setStartDate] = useState(defaultStartDate);
    const [focusedInput, setFocusedInput] = useState(null);

    return (
        <DateRangePicker
            buttonCancelText={text('Button cancel text', 'reset')}
            buttonConfirmText={text('Button confirm text', 'toepassen')}
            displayFormat={text('Display format', DateRangePicker.defaultProps.displayFormat)}
            endDate={endDate}
            endDateId="daterangepicker_end"
            endDatePlaceholderText={text('End date placeholder text', 'Eind datum')}
            focusedInput={focusedInput}
            isDayHighlighted={(day) => day.day() === 1}
            isDisabled={boolean('Is disabled', DateRangePicker.defaultProps.isDisabled)}
            isOutsideRange={() => false}
            keepOpenOnDateSelect
            label={text('Label', 'Je favoriete periode')}
            minimumNights={number('Minimum night', DateRangePicker.defaultProps.minimumNights)}
            numberOfMonths={number('Number of months', DateRangePicker.defaultProps.numberOfMonths)}
            onCancel={() => {
                setStartDate(defaultStartDate);
                setEndDate(defaultEndDate);
            }}
            onConfirm={() => {
                setFocusedInput(null);
            }}
            onDatesChange={(event) => {
                setStartDate(event.startDate);
                setEndDate(event.endDate);
            }}
            onFocusChange={(input) => {
                setFocusedInput(input);
            }}
            startDate={startDate}
            startDateId="daterangepicker_start"
            startDatePlaceholderText={text('Start date placeholder text', 'Start datum')}
        />
    );
};

export const DefaultWithoutFooter = () => {
    const [endDate, setEndDate] = useState(defaultEndDate);
    const [startDate, setStartDate] = useState(defaultStartDate);
    const [focusedInput, setFocusedInput] = useState(null);

    return (
        <DateRangePicker
            buttonCancelText={text('Button cancel text', 'reset')}
            buttonConfirmText={text('Button confirm text', 'toepassen')}
            displayFormat={text('Display format', DateRangePicker.defaultProps.displayFormat)}
            endDate={endDate}
            endDateId="daterangepicker_end"
            endDatePlaceholderText={text('End date placeholder text', 'Eind datum')}
            focusedInput={focusedInput}
            isDayHighlighted={(day) => day.day() === 1}
            isDisabled={boolean('Is disabled', DateRangePicker.defaultProps.isDisabled)}
            isOutsideRange={() => false}
            keepOpenOnDateSelect={boolean(
                'Keep open on date select',
                DateRangePicker.defaultProps.keepOpenOnDateSelect,
            )}
            label={text('Label', 'Je favoriete periode')}
            minimumNights={number('Minimum night', DateRangePicker.defaultProps.minimumNights)}
            numberOfMonths={number('Number of months', DateRangePicker.defaultProps.numberOfMonths)}
            onDatesChange={(event) => {
                setStartDate(event.startDate);
                setEndDate(event.endDate);
            }}
            onFocusChange={(input) => {
                setFocusedInput(input);
            }}
            shortcuts={[
                {
                    onClick: () => {
                        setStartDate(moment());
                        setEndDate(moment().add(1, 'd'));
                    },
                    text: 'vandaag en morgen',
                },
                {
                    onClick: () => {
                        setStartDate(moment().day(6));
                        setEndDate(moment().day(6).add(1, 'd'));
                    },
                    text: 'aankomend weekend',
                },
                {
                    onClick: () => {
                        setStartDate(moment());
                        setEndDate(moment().add(13, 'd'));
                    },
                    text: 'de komende twee weken',
                },
                {
                    onClick: () => {
                        setStartDate(moment().add(1, 'M').startOf('month'));
                        setEndDate(moment().add(1, 'M').endOf('month'));
                    },
                    text: 'de volgende maand',
                },
            ]}
            startDate={startDate}
            startDateId="daterangepicker_start"
            startDatePlaceholderText={text('Start date placeholder text', 'Start datum')}
        />
    );
};

export const WithYearSelector = () => {
    const [endDate, setEndDate] = useState(defaultEndDate);
    const [startDate, setStartDate] = useState(defaultStartDate);
    const [focusedInput, setFocusedInput] = useState(null);

    return (
        <DateRangePicker
            displayFormat={text('Display format', DateRangePicker.defaultProps.displayFormat)}
            endDate={endDate}
            endDateId="daterangepicker_withyearselector_end"
            endDatePlaceholderText={text('End date placeholder text', 'Eind datum')}
            focusedInput={focusedInput}
            hasYearSelector
            isDayHighlighted={(day) => day.day() === 3}
            isDisabled={boolean('Is disabled', DateRangePicker.defaultProps.isDisabled)}
            keepOpenOnDateSelect={boolean(
                'Keep open on date select',
                DateRangePicker.defaultProps.keepOpenOnDateSelect,
            )}
            label={text('Label', 'Vakantie periode')}
            labelMonth={text('Label month', 'Maand')}
            labelYear={text('Label year', 'Jaar')}
            minimumNights={number('Minimum night', DateRangePicker.defaultProps.minimumNights)}
            numberOfMonths={1}
            onDatesChange={(event) => {
                setStartDate(event.startDate);
                setEndDate(event.endDate);
            }}
            onFocusChange={(input) => {
                setFocusedInput(input);
            }}
            startDate={startDate}
            startDateId="daterangepicker_withyearselector_start"
            startDatePlaceholderText={text('Start date placeholder text', 'Start datum')}
        />
    );
};