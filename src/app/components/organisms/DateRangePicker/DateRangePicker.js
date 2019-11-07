import { END_DATE, START_DATE } from 'react-dates/constants';
import { DateRangePicker as AirbnbDateRangePicker } from 'react-dates';
import FormElementLabel from '../../molecules/FormElementLabel/FormElementLabel';
import momentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledDateRangePicker } from './DateRangePicker.sc';

const DateRangePicker = ({
    daySize,
    endDate,
    endDateId,
    endDatePlaceholderText,
    focusedInput,
    isDisabled,
    keepOpenOnDateSelect,
    label,
    numberOfMonths,
    onDatesChange,
    onFocusChange,
    startDate,
    startDateId,
    startDatePlaceholderText,
}) => (
    <StyledDateRangePicker>
        <FormElementLabel isActive isDisabled={isDisabled} isFocused={focusedInput}>
            {label}
        </FormElementLabel>
        <AirbnbDateRangePicker
            daySize={daySize}
            disabled={isDisabled}
            endDate={endDate}
            endDateId={endDateId}
            endDatePlaceholderText={endDatePlaceholderText}
            focusedInput={focusedInput}
            hideKeyboardShortcutsPanel
            keepOpenOnDateSelect={keepOpenOnDateSelect}
            numberOfMonths={numberOfMonths}
            onDatesChange={onDatesChange}
            onFocusChange={onFocusChange}
            startDate={startDate}
            startDateId={startDateId}
            startDatePlaceholderText={startDatePlaceholderText}
        />
    </StyledDateRangePicker>
);

DateRangePicker.propTypes = {
    daySize: PropTypes.number,
    endDate: momentPropTypes.momentObj,
    endDateId: PropTypes.string.isRequired,
    endDatePlaceholderText: PropTypes.string,
    focusedInput: PropTypes.oneOf([END_DATE, START_DATE]),
    isDisabled: PropTypes.bool,
    keepOpenOnDateSelect: PropTypes.bool,
    label: PropTypes.string.isRequired,
    numberOfMonths: PropTypes.number,
    onDatesChange: PropTypes.func.isRequired,
    onFocusChange: PropTypes.func.isRequired,
    startDate: momentPropTypes.momentObj,
    startDateId: PropTypes.string.isRequired,
    startDatePlaceholderText: PropTypes.string,
};

DateRangePicker.defaultProps = {
    daySize: 40,
    endDate: null,
    endDatePlaceholderText: AirbnbDateRangePicker.defaultProps.endDatePlaceholderText,
    focusedInput: null,
    isDisabled: false,
    keepOpenOnDateSelect: AirbnbDateRangePicker.defaultProps.keepOpenOnDateSelect,
    numberOfMonths: 2,
    startDate: null,
    startDatePlaceholderText: AirbnbDateRangePicker.defaultProps.startDatePlaceholderText,
};

export default DateRangePicker;
