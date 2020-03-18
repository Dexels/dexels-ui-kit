/* eslint react/jsx-props-no-spreading: 0 */
import {
    DateRangePicker as AirbnbDateRangePicker,
    DateRangePickerShape,
    FocusedInputShape,
} from 'react-dates';
import React, { useContext, useState } from 'react';
import { Shortcut, Shortcuts } from './Shortcuts/Shortcuts';
import ButtonNavigation from '../ButtonNavigation/ButtonNavigation';
import DialogFooter from '../../../molecules/DialogFooter/DialogFooter';
import FormElementLabel from '../../../molecules/FormElementLabel/FormElementLabel';
import InputIcon from '../InputIcon/InputIcon';
import { Moment } from 'moment';
import Navigation from '../Navigation/Navigation';
import { StyledDateRangePicker } from './DateRangePicker.sc';
import { ThemeContext } from 'styled-components';
import Wrapper from '../Wrapper/Wrapper';

export interface DateRangePickerProps {
    buttonCancelText?: React.ReactNode;
    buttonConfirmText?: React.ReactNode;
    className?: string;
    daySize?: number;
    displayFormat?: string;
    endDate: Moment | null;
    endDateId: string;
    endDatePlaceholderText?: string;
    focusedInput: FocusedInputShape | null;
    footerText?: React.ReactNode;
    hasYearSelector?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isDayHighlighted?: (day: any) => boolean;
    isDisabled?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isOutsideRange?: (day: any) => boolean;
    keepOpenOnDateSelect?: boolean;
    label: React.ReactNode;
    labelMonth?: React.ReactNode;
    labelYear?: React.ReactNode;
    minimumNights?: number;
    numberOfMonths?: number;
    onCancel?: React.MouseEventHandler;
    onConfirm?: React.MouseEventHandler;
    onDatesChange: DateRangePickerShape['onDatesChange'];
    onFocusChange: DateRangePickerShape['onFocusChange'];
    shortcuts?: Shortcut[];
    shortcutsText?: React.ReactNode;
    startDate: Moment | null;
    startDateId: string;
    startDatePlaceholderText?: string;
    yearCount?: number;
}

export const DateRangePicker: React.FunctionComponent<DateRangePickerProps> = ({
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
    hasYearSelector = false,
    isDayHighlighted,
    isDisabled = false,
    isOutsideRange,
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
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const isFocused = Boolean(focusedInput);
    const { spacingValue } = useContext(ThemeContext);

    return (
        <Wrapper
            className={className}
            hasYearSelector={hasYearSelector}
            isFocused={isFocused}
            onMouseEnter={() => {
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
            }}
        >
            <StyledDateRangePicker>
                <FormElementLabel
                    isActive
                    isDisabled={isDisabled}
                    isFocused={isFocused}
                    isHovered={isHovered}
                >
                    {label}
                </FormElementLabel>
                <AirbnbDateRangePicker
                    customInputIcon={(
                        <InputIcon isDisabled={isDisabled} isFocused={isFocused} />
                    )}
                    daySize={daySize}
                    disabled={isDisabled}
                    displayFormat={displayFormat}
                    endDate={endDate}
                    endDateId={endDateId}
                    endDatePlaceholderText={endDatePlaceholderText}
                    focusedInput={focusedInput}
                    hideKeyboardShortcutsPanel
                    isDayHighlighted={isDayHighlighted}
                    isOutsideRange={isOutsideRange}
                    keepOpenOnDateSelect={keepOpenOnDateSelect}
                    minimumNights={minimumNights}
                    navNext={<ButtonNavigation isNext />}
                    navPrev={<ButtonNavigation isPrev />}
                    numberOfMonths={numberOfMonths}
                    onDatesChange={onDatesChange}
                    onFocusChange={onFocusChange}
                    renderCalendarInfo={() => (
                        <>
                            {shortcuts.length > 0 && (
                                <Shortcuts shortcuts={shortcuts} text={shortcutsText} />
                            )}
                            {(onCancel || onConfirm) && (
                                <DialogFooter
                                    buttonCancelText={buttonCancelText}
                                    buttonConfirmText={buttonConfirmText}
                                    onCancel={onCancel}
                                    onConfirm={onConfirm}
                                    text={footerText}
                                />
                            )}
                        </>
                    )}
                    renderMonthElement={(props) => (
                        <Navigation
                            {...props}
                            hasYearSelector={hasYearSelector}
                            labelMonth={labelMonth}
                            labelYear={labelYear}
                            yearCount={yearCount}
                        />
                    )}
                    startDate={startDate}
                    startDateId={startDateId}
                    startDatePlaceholderText={startDatePlaceholderText}
                    verticalSpacing={(spacingValue * 6) - 40}
                />
            </StyledDateRangePicker>
        </Wrapper>
    );
};

export default DateRangePicker;
