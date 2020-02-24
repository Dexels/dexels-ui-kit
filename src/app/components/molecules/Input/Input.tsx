import { ErrorMessageWrapper, StyledInput, TextField } from './Input.sc';
import { InputType, InputVariant } from '../../../types';
import React, { useState } from 'react';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import FormElementLabel from '../FormElementLabel/FormElementLabel';

export interface InputProps {
    className?: string;
    errorMessage?: React.ReactNode;
    hasError?: boolean;
    isDisabled?: boolean;
    isTextarea?: boolean;
    isValid?: boolean;
    label: React.ReactNode;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    type?: InputType;
    value?: string;
    variant?: InputVariant;
    // eslint-disable-next-line typescript-sort-keys/interface, @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export const Input: React.FunctionComponent<InputProps> = ({
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

Input.defaultProps = {
    className: '',
    errorMessage: null,
    hasError: false,
    isDisabled: false,
    isTextarea: false,
    isValid: false,
    onKeyDown: null,
    type: InputType.TEXT,
    value: '',
    variant: InputVariant.OUTLINE,
};

export default Input;
