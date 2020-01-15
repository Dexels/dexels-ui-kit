import { ErrorMessageWrapper, StyledInput, TextField } from './Input.sc';
import { INPUT_TYPES, INPUT_VARIANTS } from './Input.consts';
import React, { useState } from 'react';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import FormElementLabel from '../FormElementLabel/FormElementLabel';
import PropTypes from 'prop-types';

const Input = ({
    className,
    errorMessage,
    hasError,
    isDisabled,
    isTextarea,
    isValid,
    label,
    name,
    onChange,
    onKeyDown,
    type,
    value,
    variant,
    ...rest
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const hasValue = value.length > 0;

    return (
        <>
            <StyledInput
                className={className}
                hasError={hasError}
                isDisabled={isDisabled}
                isFocused={isFocused}
                isValid={isValid}
                variant={variant}
                {...rest}
            >
                <TextField
                    as={isTextarea ? 'textarea' : 'input'}
                    hasError={hasError}
                    isDisabled={isDisabled}
                    isFocused={isFocused}
                    isHovered={isHovered}
                    isTextarea={isTextarea}
                    isValid={isValid}
                    name={name}
                    onBlur={() => {
                        setIsFocused(false);
                    }}
                    onChange={onChange}
                    onFocus={() => {
                        setIsFocused(true);
                    }}
                    onKeyDown={onKeyDown}
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
                <FormElementLabel
                    hasError={hasError}
                    isActive={hasValue}
                    isDisabled={isDisabled}
                    isFocused={isFocused}
                    isHovered={isHovered}
                    isValid={isValid}
                    variant={variant}
                >
                    {label}
                </FormElementLabel>
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
    className: PropTypes.string,
    errorMessage: PropTypes.node,
    hasError: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isTextarea: PropTypes.bool,
    isValid: PropTypes.bool,
    label: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func,
    type: PropTypes.oneOf(Object.values(Input.types)),
    value: PropTypes.string,
    variant: PropTypes.oneOf(Object.values(Input.variants)),
};

Input.defaultProps = {
    className: '',
    errorMessage: null,
    hasError: false,
    isDisabled: false,
    isTextarea: false,
    isValid: false,
    onKeyDown: null,
    type: Input.types.TEXT,
    value: '',
    variant: Input.variants.OUTLINE,
};

export default Input;
