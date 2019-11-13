import Icon from '../../../atoms/Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledInputIcon } from './InputIcon.sc';

const InputIcon = ({ isDisabled, isFocused }) => (
    <StyledInputIcon isDisabled={isDisabled} isFocused={isFocused}>
        <Icon type={Icon.types.CALENDAR} />
    </StyledInputIcon>
);

InputIcon.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
};

export default InputIcon;
