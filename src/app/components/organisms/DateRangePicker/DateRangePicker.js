/* eslint react/jsx-props-no-spreading: 0 */
import { END_DATE, START_DATE } from 'react-dates/constants';
import React, { useContext } from 'react';
import { DateRangePicker as AirbnbDateRangePicker } from 'react-dates';
import DatePickerButtonNavigation from '../../molecules/DatePickerButtonNavigation/DatePickerButtonNavigation';
import DatePickerInputIcon from '../../molecules/DatePickerInputIcon/DatePickerInputIcon';
import DatePickerNavigation from '../../molecules/DatePickerNavigation/DatePickerNavigation';
import DatePickerWrapper from '../../molecules/DatePickerWrapper/DatePickerWrapper';
import DialogFooter from '../../molecules/DialogFooter/DialogFooter';
import FormElementLabel from '../../molecules/FormElementLabel/FormElementLabel';
import momentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';
import Shortcuts from './Shortcuts/Shortcuts';
import { StyledDateRangePicker } from './DateRangePicker.sc';
import { ThemeContext } from 'styled-components';

const DateRangePicker = ({
    buttonCancelText,
    buttonConfirmText,
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
    shortcuts,
    shortcutsText,
    startDate,
    startDateId,
    startDatePlaceholderText,
    yearCount,
}) => {
    const isFocused = Boolean(focusedInput);
    const { spacingValue } = useContext(ThemeContext);

    return (
        <DatePickerWrapper hasYearSelector={hasYearSelector} isFocused={isFocused}>
            <StyledDateRangePicker>
                <FormElementLabel isActive isDisabled={isDisabled} isFocused={isFocused}>
                    {label}
                </FormElementLabel>
                <AirbnbDateRangePicker
                    customInputIcon={(
                        <DatePickerInputIcon isDisabled={isDisabled} isFocused={isFocused} />
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
                    navNext={<DatePickerButtonNavigation isNext />}
                    navPrev={<DatePickerButtonNavigation isPrev />}
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
                        <DatePickerNavigation
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
        </DatePickerWrapper>
    );
};

DateRangePicker.propTypes = {
    buttonCancelText: PropTypes.string,
    buttonConfirmText: PropTypes.string,
    daySize: PropTypes.number,
    displayFormat: PropTypes.string,
    endDate: momentPropTypes.momentObj,
    endDateId: PropTypes.string.isRequired,
    endDatePlaceholderText: PropTypes.string,
    focusedInput: PropTypes.oneOf([END_DATE, START_DATE]),
    footerText: PropTypes.string,
    hasYearSelector: PropTypes.bool,
    isDayHighlighted: PropTypes.func,
    isDisabled: PropTypes.bool,
    isOutsideRange: PropTypes.func,
    keepOpenOnDateSelect: PropTypes.bool,
    label: PropTypes.string.isRequired,
    labelMonth: PropTypes.string,
    labelYear: PropTypes.string,
    minimumNights: PropTypes.number,
    numberOfMonths: PropTypes.number,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    onDatesChange: PropTypes.func.isRequired,
    onFocusChange: PropTypes.func.isRequired,
    shortcuts: PropTypes.arrayOf(PropTypes.shape({
        onClick: PropTypes.func.isRequired,
        text: PropTypes.string.isRequired,
    })),
    shortcutsText: PropTypes.string,
    startDate: momentPropTypes.momentObj,
    startDateId: PropTypes.string.isRequired,
    startDatePlaceholderText: PropTypes.string,
    yearCount: PropTypes.number,
};

DateRangePicker.defaultProps = {
    buttonCancelText: undefined,
    buttonConfirmText: undefined,
    daySize: 40,
    displayFormat: 'ddd D MMM Y',
    endDate: null,
    endDatePlaceholderText: AirbnbDateRangePicker.defaultProps.endDatePlaceholderText,
    focusedInput: null,
    footerText: undefined,
    hasYearSelector: false,
    isDayHighlighted: AirbnbDateRangePicker.defaultProps.isDayHighlighted,
    isDisabled: false,
    isOutsideRange: AirbnbDateRangePicker.defaultProps.isOutsideRange,
    keepOpenOnDateSelect: AirbnbDateRangePicker.defaultProps.keepOpenOnDateSelect,
    labelMonth: undefined,
    labelYear: undefined,
    minimumNights: AirbnbDateRangePicker.defaultProps.minimumNights,
    numberOfMonths: 2,
    onCancel: null,
    onConfirm: null,
    shortcuts: [],
    shortcutsText: undefined,
    startDate: null,
    startDatePlaceholderText: AirbnbDateRangePicker.defaultProps.startDatePlaceholderText,
    yearCount: 100,
};

export default DateRangePicker;
