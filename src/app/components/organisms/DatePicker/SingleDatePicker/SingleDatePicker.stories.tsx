import { boolean, number, select, text } from '@storybook/addon-knobs';
import moment, { Moment } from 'moment';
import React, { FunctionComponent, useState } from 'react';
import SingleDatePicker from './SingleDatePicker';
import { SingleDatePickerVariant } from '../types';
import styled from 'styled-components';

export default { title: 'organisms/DatePicker' };

export const Default: FunctionComponent = () => {
    const [date, setDate] = useState<Moment | null>(moment());
    const [isFocused, setIsFocused] = useState(true);

    return (
        <SingleDatePicker
            date={date}
            displayFormat={text('Display format', 'ddd D MMM Y')}
            id="datepicker"
            isDayBlocked={(day): boolean => day.day() === 3}
            isDayHighlighted={(day): boolean => day.day() === 6}
            isDisabled={boolean('Is disabled', false)}
            isFocused={isFocused}
            keepOpenOnDateSelect={boolean('Keep open on date select', true)}
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

const Wrapper = styled.div`
    padding-top: 450px;
    max-height: 500px;
`;

export const DatePickerOpensUp: FunctionComponent = () => {
    const [date, setDate] = useState<Moment | null>(moment());
    const [isFocused, setIsFocused] = useState(false);
    const [wrapperElementRef, setWrapperElementRef] = useState<HTMLDivElement | null>(null);

    return (
        <Wrapper className="Parent" ref={setWrapperElementRef}>
            <SingleDatePicker
                date={date}
                displayFormat={text('Display format', 'ddd D MMM Y')}
                id="datepicker"
                isDayBlocked={(day): boolean => day.day() === 3}
                isDayHighlighted={(day): boolean => day.day() === 6}
                isDisabled={boolean('Is disabled', false)}
                isFocused={isFocused}
                keepOpenOnDateSelect={boolean('Keep open on date select', true)}
                label={text('Label', 'Speeldatum')}
                numberOfMonths={number('Number of months', 1)}
                onDateChange={(newDate): void => {
                    setDate(newDate);
                }}
                onFocusChange={({ focused }): void => {
                    setIsFocused(Boolean(focused));
                }}
                parentContainer={wrapperElementRef || undefined}
                placeholder={text('Placeholder', 'Selecteer je datum')}
                variant={select('Variant', SingleDatePickerVariant, SingleDatePickerVariant.OUTLINE)}
            />
        </Wrapper>
    );
};

const ThinWrapper = styled.div`
    width: 300px;
`;

export const DatePickerAlignRight: FunctionComponent = () => {
    const [date, setDate] = useState<Moment | null>(moment());
    const [isFocused, setIsFocused] = useState(false);
    const [wrapperElementRef, setWrapperElementRef] = useState<HTMLDivElement | null>(null);

    return (
        <ThinWrapper className="Parent" ref={setWrapperElementRef}>
            <SingleDatePicker
                date={date}
                displayFormat={text('Display format', 'ddd D MMM Y')}
                id="datepicker"
                isFocused={isFocused}
                keepOpenOnDateSelect={boolean('Keep open on date select', true)}
                label={text('Label', 'Speeldatum')}
                numberOfMonths={number('Number of months', 1)}
                onDateChange={(newDate): void => {
                    setDate(newDate);
                }}
                onFocusChange={({ focused }): void => {
                    setIsFocused(Boolean(focused));
                }}
                parentContainer={wrapperElementRef || undefined}
                placeholder={text('Placeholder', 'Selecteer je datum')}
                variant={select('Variant', SingleDatePickerVariant, SingleDatePickerVariant.OUTLINE)}
            />
        </ThinWrapper>
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
            isDayBlocked={(day): boolean => day.day() === 3}
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
            yearCountFuture={number('Year count future', 0)}
        />
    );
};

export const WithFooter: FunctionComponent = () => {
    const [date, setDate] = useState<Moment | null>(moment());
    const [isFocused, setIsFocused] = useState(true);
    const [previousDate, setPreviousDate] = useState<Moment | null>(moment());

    return (
        <SingleDatePicker
            buttonCancelText={text('Button cancel text', 'reset')}
            buttonConfirmText={text('Button confirm text', 'toepassen')}
            date={date}
            displayFormat={text('Display format', 'ddd D MMM Y')}
            id="datepickerWithYearSelector"
            isDayBlocked={(day): boolean => day.day() === 3}
            isDayHighlighted={(day): boolean => day.day() === 5}
            isDisabled={boolean('Is disabled', false)}
            isFocused={isFocused}
            isOutsideRange={(day): boolean => day.isAfter(moment(), 'day')}
            keepOpenOnDateSelect={boolean('Keep open on date select', true)}
            label={text('Label', 'Geboortedatum')}
            labelMonth={text('Label month', 'Maand')}
            labelYear={text('Label year', 'Jaar')}
            numberOfMonths={number('Number of months', 1)}
            onCancel={(): void => {
                setDate(previousDate);
                setIsFocused(false);
            }}
            onConfirm={(): void => {
                setPreviousDate(date);
                setIsFocused(false);
            }}
            onDateChange={(newDate): void => {
                setDate(newDate);
            }}
            onFocusChange={({ focused }): void => {
                setIsFocused(Boolean(focused));
            }}
            placeholder={text('Placeholder', 'Selecteer je datum')}
            variant={select('Variant', SingleDatePickerVariant, SingleDatePickerVariant.OUTLINE)}
            yearCount={number('Year count', 100)}
            yearCountFuture={number('Year count future', 0)}
        />
    );
};
