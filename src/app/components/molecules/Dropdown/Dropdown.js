import {
    ErrorMessageWrapper,
    IconWrapper,
    Select,
    StyledDropdown,
} from './Dropdown.sc';
import React, { useState } from 'react';
import { DROPDOWN_VARIANTS } from './Dropdown.consts';
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
    variant,
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <StyledDropdown
                hasError={hasError}
                isDisabled={isDisabled}
                isFocused={isFocused}
                isValid={isValid}
                variant={variant}
            >
                <Select
                    hasError={hasError}
                    isDisabled={isDisabled}
                    isFocused={isFocused}
                    isHovered={isHovered}
                    isPlaceholderSelected={placeholder === value}
                    isValid={isValid}
                    name={name}
                    onBlur={() => {
                        setIsFocused(false);
                    }}
                    onChange={onChange}
                    onFocus={() => {
                        setIsFocused(true);
                    }}
                    onMouseEnter={() => {
                        setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                        setIsHovered(false);
                    }}
                    required={isRequired}
                    value={value}
                    variant={variant}
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
                    isFocused={isFocused}
                    isHovered={isHovered}
                    isValid={isValid}
                    variant={variant}
                >
                    <Icon type={Icon.types.DROPDOWN} />
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

Dropdown.variants = DROPDOWN_VARIANTS;

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
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]).isRequired,
    variant: PropTypes.oneOf(Object.values(Dropdown.variants)),
};

Dropdown.defaultProps = {
    errorMessage: '',
    hasError: false,
    isDisabled: false,
    isRequired: false,
    isValid: false,
    placeholder: '',
    variant: Dropdown.variants.COMPACT,
};

export default Dropdown;
