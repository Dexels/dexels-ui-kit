/* eslint react/jsx-props-no-spreading: 0 */
import React, { useContext } from 'react';
import DatePickerButtonNavigation from '../../molecules/DatePickerButtonNavigation/DatePickerButtonNavigation';
import DatePickerInputIcon from '../../molecules/DatePickerInputIcon/DatePickerInputIcon';
import DatePickerNavigation from '../../molecules/DatePickerNavigation/DatePickerNavigation';
import DatePickerWrapper from '../../molecules/DatePickerWrapper/DatePickerWrapper';
import FormElementLabel from '../../molecules/FormElementLabel/FormElementLabel';
import momentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';
import { SingleDatePicker } from 'react-dates';
import { StyledDatePicker } from './DatePicker.sc';
import { ThemeContext } from 'styled-components';

const DatePicker = ({
    date,
    daySize,
    displayFormat,
    hasYearSelector,
    id,
    isDayHighlighted,
    isDisabled,
    isFocused,
    isOutsideRange,
    keepOpenOnDateSelect,
    label,
    labelMonth,
    labelYear,
    numberOfMonths,
    onClose,
    onDateChange,
    onFocusChange,
    placeholder,
    yearCount,
}) => {
    const { spacingValue } = useContext(ThemeContext);

    return (
        <DatePickerWrapper hasYearSelector={hasYearSelector} isFocused={isFocused}>
            <StyledDatePicker hasYearSelector={hasYearSelector}>
                <FormElementLabel isActive isDisabled={isDisabled} isFocused={isFocused}>
                    {label}
                </FormElementLabel>
                <SingleDatePicker
                    customInputIcon={<DatePickerInputIcon isDisabled={isDisabled} isFocused={isFocused} />}
                    date={date}
                    daySize={daySize}
                    disabled={isDisabled}
                    displayFormat={displayFormat}
                    focused={isFocused}
                    hideKeyboardShortcutsPanel
                    id={id}
                    isDayHighlighted={isDayHighlighted}
                    isOutsideRange={isOutsideRange}
                    keepOpenOnDateSelect={keepOpenOnDateSelect}
                    navNext={<DatePickerButtonNavigation isNext />}
                    navPrev={<DatePickerButtonNavigation isPrev />}
                    numberOfMonths={numberOfMonths}
                    onClose={onClose}
                    onDateChange={onDateChange}
                    onFocusChange={onFocusChange}
                    placeholder={placeholder}
                    renderMonthElement={(props) => (
                        <DatePickerNavigation
                            {...props}
                            hasYearSelector={hasYearSelector}
                            labelMonth={labelMonth}
                            labelYear={labelYear}
                            yearCount={yearCount}
                        />
                    )}
                    verticalSpacing={(spacingValue * 6) - 40}
                />
            </StyledDatePicker>
        </DatePickerWrapper>
    );
};

DatePicker.propTypes = {
    date: momentPropTypes.momentObj,
    daySize: PropTypes.number,
    displayFormat: PropTypes.string,
    hasYearSelector: PropTypes.bool,
    id: PropTypes.string.isRequired,
    isDayHighlighted: PropTypes.func,
    isDisabled: PropTypes.bool,
    isFocused: PropTypes.bool.isRequired,
    isOutsideRange: PropTypes.func,
    keepOpenOnDateSelect: PropTypes.bool,
    label: PropTypes.string.isRequired,
    labelMonth: PropTypes.string,
    labelYear: PropTypes.string,
    numberOfMonths: PropTypes.number,
    onClose: PropTypes.func,
    onDateChange: PropTypes.func.isRequired,
    onFocusChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    yearCount: PropTypes.number,
};

DatePicker.defaultProps = {
    date: null,
    daySize: 40,
    displayFormat: 'ddd D MMM Y',
    hasYearSelector: false,
    isDayHighlighted: SingleDatePicker.defaultProps.isDayHighlighted,
    isDisabled: false,
    isOutsideRange: SingleDatePicker.defaultProps.isOutsideRange,
    keepOpenOnDateSelect: SingleDatePicker.defaultProps.keepOpenOnDateSelect,
    labelMonth: '',
    labelYear: '',
    numberOfMonths: 1,
    onClose: SingleDatePicker.defaultProps.onClose,
    placeholder: SingleDatePicker.defaultProps.placeholder,
    yearCount: 100,
};

export default DatePicker;
