import Icon from '../../atoms/Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledDatePickerInputIcon } from './DatePickerInputIcon.sc';

const DatePickerInputIcon = ({ isDisabled, isFocused }) => (
    <StyledDatePickerInputIcon isDisabled={isDisabled} isFocused={isFocused}>
        <Icon type={Icon.types.CALENDAR} />
    </StyledDatePickerInputIcon>
);

DatePickerInputIcon.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
};

export default DatePickerInputIcon;
