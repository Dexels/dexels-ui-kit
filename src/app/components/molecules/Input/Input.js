import {
    ErrorMessage,
    Label,
    StyledInput,
    TextField,
} from './Input.sc';
import { INPUT_TYPES, INPUT_VARIANTS } from './Input.consts';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({
    defaultValue,
    errorMessage,
    hasError,
    isDisabled,
    isTextarea,
    isValid,
    label,
    name,
    type,
    variant,
}) => {
    const [value, setValue] = useState(defaultValue);
    const [isFocussed, setIsFocussed] = useState(false);
    const hasValue = value.length > 0;

    const handleOnChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <StyledInput variant={variant}>
            <TextField
                as={isTextarea ? 'textarea' : 'input'}
                hasError={hasError}
                isDisabled={isDisabled}
                isFocussed={isFocussed}
                isTextarea={isTextarea}
                isValid={isValid}
                name={name}
                onBlur={() => {
                    setIsFocussed(false);
                }}
                onChange={handleOnChange}
                onFocus={() => {
                    setIsFocussed(true);
                }}
                type={type}
                value={value}
            />
            <Label
                hasError={hasError}
                hasValue={hasValue}
                isDisabled={isDisabled}
                isFocussed={isFocussed}
                isValid={isValid}
                variant={variant}
            >
                {label}
            </Label>
            {errorMessage && hasError && (
                <ErrorMessage>
                    {errorMessage}
                </ErrorMessage>
            )}
        </StyledInput>
    );
};

Input.types = INPUT_TYPES;
Input.variants = INPUT_VARIANTS;

Input.propTypes = {
    defaultValue: PropTypes.string,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isTextarea: PropTypes.bool,
    isValid: PropTypes.bool,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(Input.types)),
    variant: PropTypes.oneOf(Object.values(Input.variants)),
};

Input.defaultProps = {
    defaultValue: '',
    errorMessage: '',
    hasError: false,
    isDisabled: false,
    isTextarea: false,
    isValid: false,
    type: Input.types.TEXT,
    variant: Input.variants.FULL_SIZE,
};

export default Input;
