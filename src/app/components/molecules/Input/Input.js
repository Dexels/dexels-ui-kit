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

    const handleOnChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <StyledInput
            hasError={hasError}
            hasValue={value.length > 0}
            isDisabled={isDisabled}
            isValid={isValid}
            variant={variant}
        >
            <TextField
                as={isTextarea ? 'textarea' : 'input'}
                isTextarea={isTextarea}
                isVariantCompact={variant === Input.variants.COMPACT}
                name={name}
                onChange={handleOnChange}
                type={type}
                value={value}
            />
            <Label>
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
