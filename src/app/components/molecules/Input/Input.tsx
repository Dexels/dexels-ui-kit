import { ErrorMessageWrapper, StyledInput, TextField } from './Input.sc';
import { InputType, InputVariant } from '../../../types';
import React, { ChangeEvent, FunctionComponent, KeyboardEvent, ReactNode, useCallback, useState } from 'react';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import FormElementLabel from '../FormElementLabel/FormElementLabel';

export interface InputProps {
    children?: never;
    className?: string;
    errorMessage?: ReactNode;
    hasError?: boolean;
    isDisabled?: boolean;
    isTextarea?: boolean;
    isValid?: boolean;
    label: ReactNode;
    max?: number;
    maxLength?: number;
    min?: number;
    minLength?: number;
    name: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    type?: InputType;
    value?: string;
    variant?: InputVariant;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Input: FunctionComponent<InputProps & { [key: string]: any }> = ({
    className,
    errorMessage,
    hasError = false,
    isDisabled = false,
    isTextarea = false,
    isValid = false,
    label,
    max,
    maxLength,
    min,
    minLength,
    name,
    onChange,
    onKeyDown,
    type = InputType.TEXT,
    value = '',
    variant = InputVariant.OUTLINE,
    ...rest
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const hasValue = value.length > 0;
    const textFieldProps: { [key: string]: number } = {};

    const toggleIsFocusedCallback = useCallback(() => {
        setIsFocused(!isFocused);
    }, [isFocused]);

    const toggleIsHoveredCallback = useCallback(() => {
        setIsHovered(!isHovered);
    }, [isHovered]);

    if (!isTextarea) {
        if (typeof max === 'number') {
            textFieldProps.max = max;
        }

        if (typeof min === 'number') {
            textFieldProps.min = min;
        }
    }

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
                    maxLength={maxLength}
                    minLength={minLength}
                    name={name}
                    onBlur={toggleIsFocusedCallback}
                    onChange={onChange}
                    onFocus={toggleIsFocusedCallback}
                    onKeyDown={onKeyDown}
                    onMouseEnter={toggleIsHoveredCallback}
                    onMouseLeave={toggleIsHoveredCallback}
                    type={type}
                    value={value}
                    variant={variant}
                    {...textFieldProps}
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
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                </ErrorMessageWrapper>
            )}
        </>
    );
};

export default Input;
