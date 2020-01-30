/* eslint react/jsx-props-no-spreading: 0 */
import {
    DateRangePicker as AirbnbDateRangePicker,
    DateRangePickerShape,
    FocusedInputShape,
    OrientationShape,
} from 'react-dates';
import React, { useContext, useState } from 'react';
import { Shortcut, Shortcuts } from './Shortcuts/Shortcuts';
import ButtonNavigation from '../ButtonNavigation/ButtonNavigation';
import DialogFooter from '../../../molecules/DialogFooter/DialogFooter';
import FormElementLabel from '../../../molecules/FormElementLabel/FormElementLabel';
import { HORIZONTAL_ORIENTATION } from 'react-dates/lib/constants';
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
    endDate?: Moment;
    endDateId: string;
    endDatePlaceholderText?: string;
    focusedInput?: FocusedInputShape;
    footerText?: React.ReactNode;
    hasYearSelector?: boolean;
    isDayHighlighted?: (day: any) => boolean;
    isDisabled?: boolean;
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
    orientation?: OrientationShape;
    shortcuts?: Shortcut[];
    shortcutsText?: React.ReactNode;
    startDate?: Moment;
    startDateId: string;
    startDatePlaceholderText?: string;
    yearCount?: number;
}

export const DateRangePicker: React.FunctionComponent<DateRangePickerProps> = ({
    buttonCancelText,
    buttonConfirmText,
    className,
    daySize,
    displayFormat,
    endDate,
    endDateId,
    endDatePlaceholderText,
    focusedInput,
    footerText,
    hasYearSelector,
    isDayHighlighted,
    isDisabled,
    isOutsideRange,
    keepOpenOnDateSelect,
    label,
    labelMonth,
    labelYear,
    minimumNights,
    numberOfMonths,
    onCancel,
    onConfirm,
    onDatesChange,
    onFocusChange,
    orientation,
    shortcuts,
    shortcutsText,
    startDate,
    startDateId,
    startDatePlaceholderText,
    yearCount,
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
                    orientation={orientation}
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

DateRangePicker.defaultProps = {
    buttonCancelText: null,
    buttonConfirmText: null,
    className: '',
    daySize: 40,
    displayFormat: 'ddd D MMM Y',
    endDate: null,
    endDatePlaceholderText: AirbnbDateRangePicker.defaultProps.endDatePlaceholderText,
    focusedInput: null,
    footerText: null,
    hasYearSelector: false,
    isDayHighlighted: AirbnbDateRangePicker.defaultProps.isDayHighlighted,
    isDisabled: false,
    isOutsideRange: AirbnbDateRangePicker.defaultProps.isOutsideRange,
    keepOpenOnDateSelect: AirbnbDateRangePicker.defaultProps.keepOpenOnDateSelect,
    labelMonth: null,
    labelYear: null,
    minimumNights: AirbnbDateRangePicker.defaultProps.minimumNights,
    numberOfMonths: 2,
    onCancel: null,
    onConfirm: null,
    orientation: HORIZONTAL_ORIENTATION,
    shortcuts: [],
    shortcutsText: null,
    startDate: null,
    startDatePlaceholderText: AirbnbDateRangePicker.defaultProps.startDatePlaceholderText,
    yearCount: 100,
};

export default DateRangePicker;
