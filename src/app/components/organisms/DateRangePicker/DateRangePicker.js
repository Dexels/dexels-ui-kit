/* eslint react/jsx-props-no-spreading: 0 */
import { END_DATE, START_DATE } from 'react-dates/constants';
import React, { useContext } from 'react';
import { DateRangePicker as AirbnbDateRangePicker } from 'react-dates';
import DatePickerButtonNavigation from '../../molecules/DatePickerButtonNavigation/DatePickerButtonNavigation';
import DatePickerInputIcon from '../../molecules/DatePickerInputIcon/DatePickerInputIcon';
import DatePickerNavigation from '../../molecules/DatePickerNavigation/DatePickerNavigation';
import DatePickerWrapper from '../../molecules/DatePickerWrapper/DatePickerWrapper';
import FormElementLabel from '../../molecules/FormElementLabel/FormElementLabel';
import momentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';
import { StyledDateRangePicker } from './DateRangePicker.sc';
import { ThemeContext } from 'styled-components';

const DateRangePicker = ({
    daySize,
    endDate,
    endDateId,
    endDatePlaceholderText,
    focusedInput,
    hasYearSelector,
    isDisabled,
    keepOpenOnDateSelect,
    label,
    labelMonth,
    labelYear,
    numberOfMonths,
    onDatesChange,
    onFocusChange,
    startDate,
    startDateId,
    startDatePlaceholderText,
    yearCount,
}) => {
    const isFocused = Boolean(focusedInput);
    const { spacingValue } = useContext(ThemeContext);

    return (
        <DatePickerWrapper>
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
                    endDate={endDate}
                    endDateId={endDateId}
                    endDatePlaceholderText={endDatePlaceholderText}
                    focusedInput={focusedInput}
                    hideKeyboardShortcutsPanel
                    keepOpenOnDateSelect={keepOpenOnDateSelect}
                    navNext={<DatePickerButtonNavigation isNext />}
                    navPrev={<DatePickerButtonNavigation isPrev />}
                    numberOfMonths={numberOfMonths}
                    onDatesChange={onDatesChange}
                    onFocusChange={onFocusChange}
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
    daySize: PropTypes.number,
    endDate: momentPropTypes.momentObj,
    endDateId: PropTypes.string.isRequired,
    endDatePlaceholderText: PropTypes.string,
    focusedInput: PropTypes.oneOf([END_DATE, START_DATE]),
    hasYearSelector: PropTypes.bool,
    isDisabled: PropTypes.bool,
    keepOpenOnDateSelect: PropTypes.bool,
    label: PropTypes.string.isRequired,
    labelMonth: PropTypes.string,
    labelYear: PropTypes.string,
    numberOfMonths: PropTypes.number,
    onDatesChange: PropTypes.func.isRequired,
    onFocusChange: PropTypes.func.isRequired,
    startDate: momentPropTypes.momentObj,
    startDateId: PropTypes.string.isRequired,
    startDatePlaceholderText: PropTypes.string,
    yearCount: PropTypes.number,
};

DateRangePicker.defaultProps = {
    daySize: 40,
    endDate: null,
    endDatePlaceholderText: AirbnbDateRangePicker.defaultProps.endDatePlaceholderText,
    focusedInput: null,
    hasYearSelector: false,
    isDisabled: false,
    keepOpenOnDateSelect: AirbnbDateRangePicker.defaultProps.keepOpenOnDateSelect,
    labelMonth: '',
    labelYear: '',
    numberOfMonths: 2,
    startDate: null,
    startDatePlaceholderText: AirbnbDateRangePicker.defaultProps.startDatePlaceholderText,
    yearCount: 100,
};

export default DateRangePicker;
