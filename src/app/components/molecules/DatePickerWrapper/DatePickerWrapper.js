import PropTypes from 'prop-types';
import React from 'react';
import { StyledDatePickerWrapper } from './DatePickerWrapper.sc';

const DatePickerWrapper = ({ children, hasYearSelector, isFocused }) => (
    <StyledDatePickerWrapper hasYearSelector={hasYearSelector} isFocused={isFocused}>
        {children}
    </StyledDatePickerWrapper>
);

DatePickerWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    hasYearSelector: PropTypes.bool,
    isFocused: PropTypes.bool.isRequired,
};

DatePickerWrapper.defaultProps = {
    hasYearSelector: false,
};

export default DatePickerWrapper;
