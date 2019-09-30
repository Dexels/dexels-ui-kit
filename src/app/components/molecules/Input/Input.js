import {
    ErrorMessageWrapper,
    LabelWrapper,
    StyledInput,
    TextField,
} from './Input.sc';
import React, { useState } from 'react';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import { INPUT_TYPES } from './Input.consts';
import { INPUT_VARIANTS } from '../../../utils/constants';
import Label from '../../atoms/Label/Label';
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
    const [isHovered, setIsHovered] = useState(false);
    const hasValue = value.length > 0;

    const handleOnChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <StyledInput isDisabled={isDisabled}>
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
                onMouseEnter={() => {
                    setIsHovered(true);
                }}
                onMouseLeave={() => {
                    setIsHovered(false);
                }}
                type={type}
                value={value}
                variant={variant}
            />
            <LabelWrapper
                hasValue={hasValue}
                isFocussed={isFocussed}
                variant={variant}
            >
                <Label
                    hasError={hasError}
                    isActive={hasValue}
                    isDisabled={isDisabled}
                    isFocussed={isFocussed}
                    isHovered={isHovered}
                    isSmall={hasValue || isFocussed}
                    isValid={isValid}
                >
                    {label}
                </Label>
            </LabelWrapper>
            {errorMessage && hasError && (
                <ErrorMessageWrapper variant={variant}>
                    <ErrorMessage>
                        {errorMessage}
                    </ErrorMessage>
                </ErrorMessageWrapper>
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
