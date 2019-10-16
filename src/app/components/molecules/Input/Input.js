import {
    ErrorMessageWrapper,
    LabelWrapper,
    StyledInput,
    TextField,
} from './Input.sc';
import { INPUT_TYPES, INPUT_VARIANTS } from './Input.consts';
import React, { useState } from 'react';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import Label from '../../atoms/Label/Label';
import PropTypes from 'prop-types';

const Input = ({
    errorMessage,
    hasError,
    isDisabled,
    isTextarea,
    isValid,
    label,
    name,
    onChange,
    type,
    value,
    variant,
}) => {
    const [isFocussed, setIsFocussed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const hasValue = value.length > 0;

    return (
        <>
            <StyledInput
                hasError={hasError}
                isDisabled={isDisabled}
                isFocussed={isFocussed}
                isValid={isValid}
                variant={variant}
            >
                <TextField
                    as={isTextarea ? 'textarea' : 'input'}
                    hasError={hasError}
                    isDisabled={isDisabled}
                    isFocussed={isFocussed}
                    isHovered={isHovered}
                    isTextarea={isTextarea}
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
            </StyledInput>
            {errorMessage && hasError && !isDisabled && (
                <ErrorMessageWrapper variant={variant}>
                    <ErrorMessage>
                        {errorMessage}
                    </ErrorMessage>
                </ErrorMessageWrapper>
            )}
        </>
    );
};

Input.types = INPUT_TYPES;
Input.variants = INPUT_VARIANTS;

Input.propTypes = {
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isTextarea: PropTypes.bool,
    isValid: PropTypes.bool,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.oneOf(Object.values(Input.types)),
    value: PropTypes.string,
    variant: PropTypes.oneOf(Object.values(Input.variants)),
};

Input.defaultProps = {
    errorMessage: '',
    hasError: false,
    isDisabled: false,
    isTextarea: false,
    isValid: false,
    type: Input.types.TEXT,
    value: '',
    variant: Input.variants.FULL_SIZE,
};

export default Input;
