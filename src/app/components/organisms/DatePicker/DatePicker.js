import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';
import React from 'react';
import { SingleDatePicker } from 'react-dates';
import { StyledDatePicker } from './DatePicker.sc';

const DatePicker = ({
    date,
    id,
    isFocused,
    numberOfMonths,
    onDateChange,
    onFocusChange,
}) => (
    <StyledDatePicker>
        <SingleDatePicker
            date={date}
            focused={isFocused}
            hideKeyboardShortcutsPanel
            id={id}
            isOutsideRange={() => false}
            numberOfMonths={numberOfMonths}
            onDateChange={onDateChange}
            onFocusChange={onFocusChange}
        />
    </StyledDatePicker>
);

DatePicker.propTypes = {
    date: momentPropTypes.momentObj,
    id: PropTypes.string.isRequired,
    isFocused: PropTypes.bool,
    numberOfMonths: PropTypes.number,
    onDateChange: PropTypes.func.isRequired,
    onFocusChange: PropTypes.func.isRequired,
};

DatePicker.defaultProps = {
    date: moment(),
    isFocused: false,
    numberOfMonths: 1,
};

export default DatePicker;
