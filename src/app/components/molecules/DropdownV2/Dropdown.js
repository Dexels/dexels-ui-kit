import {
    ErrorMessageWrapper,
    IconWrapper,
    Select,
    StyledDropdown,
} from './Dropdown.sc';
import React, { useState } from 'react';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import Icon from '../../atoms/Icon/Icon';
import PropTypes from 'prop-types';

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
}) => {
    const [isFocussed, setIsFocussed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <StyledDropdown
                hasError={hasError}
                isDisabled={isDisabled}
                isFocussed={isFocussed}
                isValid={isValid}
            >
                <Select
                    hasError={hasError}
                    isDisabled={isDisabled}
                    isFocussed={isFocussed}
                    isHovered={isHovered}
                    isPlaceholderSelected={placeholder === value}
                    isValid={isValid}
                    name={name}
                    onBlur={() => {
                        setIsFocussed(false);
                    }}
                    onChange={onChange}
                    onFocus={() => {
                        setIsFocussed(true);
                    }}
                    onMouseEnter={() => {
                        setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                        setIsHovered(false);
                    }}
                    required={isRequired}
                    value={value}
                >
                    {placeholder && (
                        <option disabled hidden value={placeholder}>
                            {placeholder}
                        </option>
                    )}
                    {children}
                </Select>
                <IconWrapper
                    hasError={hasError}
                    isDisabled={isDisabled}
                    isFocussed={isFocussed}
                    isHovered={isHovered}
                    isValid={isValid}
                >
                    <Icon type={Icon.types.DROP_DOWN} />
                </IconWrapper>
            </StyledDropdown>
            {errorMessage && hasError && !isDisabled && (
                <ErrorMessageWrapper>
                    <ErrorMessage>
                        {errorMessage}
                    </ErrorMessage>
                </ErrorMessageWrapper>
            )}
        </>
    );
};

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
    isRequired: false,
    isValid: false,
    placeholder: '',
};

export default Dropdown;
