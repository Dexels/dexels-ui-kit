import PropTypes from 'prop-types';
import React from 'react';
import { StyledDatePickerWrapper } from './DatePickerWrapper.sc';

const DatePickerWrapper = ({ children, hasYearSelector }) => (
    <StyledDatePickerWrapper hasYearSelector={hasYearSelector}>
        {children}
    </StyledDatePickerWrapper>
);

DatePickerWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    hasYearSelector: PropTypes.bool,
};

DatePickerWrapper.defaultProps = {
    hasYearSelector: false,
};

export default DatePickerWrapper;
