import { DateRangePicker as AirbnbDateRangePicker, DateRangePickerShape, FocusedInputShape } from 'react-dates';
import { ButtonSize, ButtonVariant, IconType } from '../../../../types';
import DialogFooter, { DialogFooterProps } from '../../../molecules/DialogFooter/DialogFooter';
import React, { FunctionComponent, MouseEventHandler, ReactNode, useContext, useState } from 'react';
import { Shortcut, Shortcuts } from './Shortcuts/Shortcuts';
import ButtonNavigation from '../ButtonNavigation/ButtonNavigation';
import FormElementLabel from '../../../molecules/FormElementLabel/FormElementLabel';
import InputIcon from '../InputIcon/InputIcon';
import { Moment } from 'moment';
import Navigation from '../Navigation/Navigation';
import { StyledDateRangePicker } from './DateRangePicker.sc';
import { ThemeContext } from 'styled-components';
import Wrapper from '../Wrapper/Wrapper';

export interface DateRangePickerProps {
    buttonCancelText?: ReactNode;
    buttonConfirmText?: ReactNode;
    children?: never;
    className?: string;
    daySize?: number;
    displayFormat?: string;
    endDate: Moment | null;
    endDateId: string;
    endDatePlaceholderText?: string;
    focusedInput: FocusedInputShape | null;
    footerText?: DialogFooterProps['text'];
    hasError?: boolean;
    hasYearSelector?: boolean;
    isDayBlocked?: (day: Moment) => boolean;
    isDayHighlighted?: (day: Moment) => boolean;
    isDisabled?: boolean;
    isOutsideRange?: (day: Moment) => boolean;
    isRequired?: boolean;
    keepOpenOnDateSelect?: boolean;
    label: ReactNode;
    labelMonth?: ReactNode;
    labelYear?: ReactNode;
    minimumNights?: number;
    numberOfMonths?: number;
    onCancel?: MouseEventHandler;
    onConfirm?: MouseEventHandler;
    onDatesChange: DateRangePickerShape['onDatesChange'];
    onFocusChange: DateRangePickerShape['onFocusChange'];
    shortcuts?: Shortcut[];
    shortcutsText?: ReactNode;
    startDate: Moment | null;
    startDateId: string;
    startDatePlaceholderText?: string;
    yearCount?: number;
    yearCountFuture?: number;
}

export const DateRangePicker: FunctionComponent<DateRangePickerProps> = ({
    buttonCancelText,
    buttonConfirmText,
    className,
    daySize = 40,
    displayFormat = 'ddd D MMM Y',
    endDate,
    endDateId,
    endDatePlaceholderText,
    focusedInput,
    footerText,
    hasError = false,
    hasYearSelector = false,
    isDayBlocked,
    isDayHighlighted,
    isDisabled = false,
    isOutsideRange,
    isRequired = false,
    keepOpenOnDateSelect,
    label,
    labelMonth,
    labelYear,
    minimumNights = 0,
    numberOfMonths = 2,
    onCancel,
    onConfirm,
    onDatesChange,
    onFocusChange,
    shortcuts = [],
    shortcutsText,
    startDate,
    startDateId,
    startDatePlaceholderText,
    yearCount = 100,
    yearCountFuture = 0,
}) => {
    const footerButtons: DialogFooterProps['buttons'] = [];
    const [isHovered, setIsHovered] = useState(false);
    const isFocused = Boolean(focusedInput);
    const { spacingValue } = useContext(ThemeContext);

    if (onCancel) {
        footerButtons.push({
            children: buttonCancelText,
            iconType: IconType.CROSS,
            onClick: onCancel,
            size: ButtonSize.SMALL,
            variant: ButtonVariant.TEXT_ONLY,
        });
    }

    if (onConfirm) {
        footerButtons.push({
            children: buttonConfirmText,
            iconType: IconType.CHECK,
            onClick: onConfirm,
            size: ButtonSize.SMALL,
        });
    }

    return (
        <Wrapper
            className={className}
            hasError={hasError}
            hasYearSelector={hasYearSelector}
            isFocused={isFocused}
            onMouseEnter={(): void => {
                setIsHovered(true);
            }}
            onMouseLeave={(): void => {
                setIsHovered(false);
            }}
        >
            <StyledDateRangePicker>
                <FormElementLabel
                    isActive
                    isDisabled={isDisabled}
                    isFocused={isFocused}
                    isHovered={isHovered}
                    isRequired={isRequired}
                >
                    {label}
                </FormElementLabel>
                <AirbnbDateRangePicker
                    customInputIcon={<InputIcon isDisabled={isDisabled} isFocused={isFocused} />}
                    daySize={daySize}
                    disabled={isDisabled}
                    displayFormat={displayFormat}
                    endDate={endDate}
                    endDateId={endDateId}
                    endDatePlaceholderText={endDatePlaceholderText}
                    focusedInput={focusedInput}
                    hideKeyboardShortcutsPanel
                    isDayBlocked={isDayBlocked}
                    isDayHighlighted={isDayHighlighted}
                    isOutsideRange={isOutsideRange}
                    keepOpenOnDateSelect={keepOpenOnDateSelect}
                    minimumNights={minimumNights}
                    navNext={<ButtonNavigation isNext />}
                    navPrev={<ButtonNavigation isPrev />}
                    numberOfMonths={numberOfMonths}
                    onDatesChange={onDatesChange}
                    onFocusChange={onFocusChange}
                    renderCalendarInfo={(): JSX.Element => (
                        <>
                            {shortcuts.length > 0 && <Shortcuts shortcuts={shortcuts} text={shortcutsText} />}
                            {footerButtons.length > 0 && <DialogFooter buttons={footerButtons} text={footerText} />}
                        </>
                    )}
                    renderMonthElement={(props): JSX.Element => (
                        <Navigation
                            {...props}
                            hasYearSelector={hasYearSelector}
                            labelMonth={labelMonth}
                            labelYear={labelYear}
                            yearCount={yearCount}
                            yearCountFuture={yearCountFuture}
                        />
                    )}
                    startDate={startDate}
                    startDateId={startDateId}
                    startDatePlaceholderText={startDatePlaceholderText}
                    verticalSpacing={spacingValue * 6 - 40}
                />
            </StyledDateRangePicker>
        </Wrapper>
    );
};

export default DateRangePicker;
