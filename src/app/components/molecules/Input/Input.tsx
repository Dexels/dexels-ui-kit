import { AdormentPosition, InputType, InputVariant } from '../../../types';
import { AdornmentWrapper, ErrorMessageWrapper, StyledInput, TextField } from './Input.sc';
import React, {
    ChangeEvent,
    FunctionComponent,
    KeyboardEvent,
    MouseEventHandler,
    ReactNode,
    useCallback,
    useState,
} from 'react';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import FormElementLabel from '../FormElementLabel/FormElementLabel';

export interface InputProps {
    children?: never;
    className?: string;
    errorMessage?: ReactNode;
    hasError?: boolean;
    inputAdorment?: ReactNode;
    inputAdormentPosition?: AdormentPosition;
    isDisabled?: boolean;
    isTextarea?: boolean;
    isValid?: boolean;
    label: ReactNode;
    max?: number;
    maxLength?: number;
    min?: number;
    minLength?: number;
    name: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onClick?: MouseEventHandler;
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
    inputAdorment,
    inputAdormentPosition = AdormentPosition.LEFT,
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
    onClick,
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
                isClickable={!isDisabled && Boolean(onClick)}
                isDisabled={isDisabled}
                isFocused={isFocused}
                isValid={isValid}
                onClick={isDisabled || !onClick ? undefined : onClick}
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
                    onChange={isDisabled || !onChange ? undefined : onChange}
                    onFocus={toggleIsFocusedCallback}
                    onKeyDown={isDisabled || !onKeyDown ? undefined : onKeyDown}
                    onMouseEnter={toggleIsHoveredCallback}
                    onMouseLeave={toggleIsHoveredCallback}
                    textIndentation={inputAdormentPosition}
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
                    textIndentation={inputAdormentPosition}
                    variant={variant}
                >
                    {label}
                </FormElementLabel>

                {inputAdorment && (
                    <AdornmentWrapper
                        hasValue={hasValue}
                        isDisabled={isDisabled}
                        textIndentation={inputAdormentPosition}
                        variant={variant}
                    >
                        {inputAdorment}
                    </AdornmentWrapper>
                )}
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
