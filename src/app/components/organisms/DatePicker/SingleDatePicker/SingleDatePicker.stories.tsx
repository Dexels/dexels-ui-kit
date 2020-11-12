import { boolean, number, select, text } from '@storybook/addon-knobs';
import moment, { Moment } from 'moment';
import React, { FunctionComponent, useRef, useState } from 'react';
import styled, { SimpleInterpolation } from 'styled-components';
import { OpenDirectionShape } from 'react-dates';
import SingleDatePicker from './SingleDatePicker';
import { SingleDatePickerVariant } from '../types';

export default { title: 'organisms/DatePicker' };

interface WrapperProps {
    direction: OpenDirectionShape;
}

const Wrapper = styled.div<WrapperProps>`
    ${({ direction }): SimpleInterpolation => {
        return `padding-top: ${direction === ('DOWN' as OpenDirectionShape) ? '0px' : '200px;'}`;
    }}
`;

export const Default: FunctionComponent = () => {
    const OpenDirection = {
        DOWN: 'DOWN',
        UP: 'UP',
    };

    const [date, setDate] = useState<Moment | null>(moment());
    const [isFocused, setIsFocused] = useState(true);
    const parentRef = useRef<HTMLDivElement>(null);
    const directionRef = React.useRef<string>();
    directionRef.current = select('Open direction', OpenDirection, OpenDirection.DOWN);

    return (
        <Wrapper direction={directionRef.current as OpenDirectionShape} ref={parentRef}>
            <SingleDatePicker
                date={date}
                displayFormat={text('Display format', 'ddd D MMM Y')}
                id="datepicker"
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
                parentContainer={
                    parentRef.current !== null && directionRef.current === OpenDirection.UP
                        ? parentRef.current
                        : undefined
                }
                placeholder={text('Placeholder', 'Selecteer je datum')}
                variant={select('Variant', SingleDatePickerVariant, SingleDatePickerVariant.OUTLINE)}
            />
        </Wrapper>
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
