import {
    ErrorMessageWrapper,
    IconWrapper,
    Select,
    StyledDropdown,
} from './Dropdown.sc';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import Icon from '../../atoms/Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';

const Dropdown = ({
    children,
    errorMessage,
    hasError,
    isDisabled,
    isRequired,
    isValid,
    name,
    onChange,
    placeholder,
    value,
}) => (
    <>
        <StyledDropdown>
            <Select
                hasError={hasError}
                isDisabled={isDisabled}
                isPlaceholderSelected={placeholder === value}
                isRequired={isRequired}
                isValid={isValid}
                name={name}
                onChange={onChange}
                value={value}
            >
                {placeholder && (
                    <option disabled hidden value={placeholder}>
                        {placeholder}
                    </option>
                )}
                {children}
            </Select>
            <IconWrapper hasError={hasError} isDisabled={isDisabled} isValid={isValid}>
                <Icon type={Icon.types.DROP_DOWN} />
            </IconWrapper>
        </StyledDropdown>
        {errorMessage && hasError && (
            <ErrorMessageWrapper>
                <ErrorMessage>
                    {errorMessage}
                </ErrorMessage>
            </ErrorMessageWrapper>
        )}
    </>
);

Dropdown.propTypes = {
    children: PropTypes.node.isRequired,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    isValid: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
};

Dropdown.defaultProps = {
    errorMessage: '',
    hasError: false,
    isDisabled: false,
    isRequired: true,
    isValid: false,
    placeholder: '',
};

export default Dropdown;
