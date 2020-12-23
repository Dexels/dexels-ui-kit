import { AdornmentPosition, InputType, InputVariant } from '../../../types';
import { AdornmentWrapper, ErrorMessageWrapper, StyledInput, TextField } from './Input.sc';
import React, {
    ChangeEvent,
    FocusEvent,
    FunctionComponent,
    KeyboardEvent,
    MouseEventHandler,
    ReactNode,
    useCallback,
    useState,
} from 'react';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import FormElementLabel from '../FormElementLabel/FormElementLabel';
import { isValidNumber } from '../../../utils/functions/validateFunctions';

export interface InputProps {
    adornment?: ReactNode;
    adornmentPosition?: AdornmentPosition;
    children?: never;
    className?: string;
    errorMessage?: ReactNode;
    hasError?: boolean;
    isDisabled?: boolean;
    isTextarea?: boolean;
    isValid?: boolean;
    label?: ReactNode;
    max?: number;
    maxLength?: number;
    min?: number;
    minLength?: number;
    name: string;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onClick?: MouseEventHandler;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    type?: InputType;
    value?: string | null;
    variant?: InputVariant;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Input: FunctionComponent<InputProps & { [key: string]: any }> = ({
    adornment,
    adornmentPosition = AdornmentPosition.LEFT,
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
    onBlur,
    onChange,
    onClick,
    onKeyDown,
    onFocus,
    type = InputType.TEXT,
    value = '',
    variant = InputVariant.OUTLINE,
    ...rest
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const hasValue = value ? value.length > 0 : false;
    const textFieldProps: { [key: string]: number } = {};

    const onChangeCallback = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            let isValidInput = true;

            if (
                type === InputType.NUMBER &&
                event.currentTarget.value.length > 0 &&
                ((maxLength && event.currentTarget.value.length > maxLength) ||
                    !isValidNumber(event.currentTarget.value))
            ) {
                isValidInput = false;
            }

            if (isValidInput && onChange) {
                onChange(event);
            }
        },
        [maxLength, onChange, type]
    );

    const toggleIsFocusedCallback = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
            setIsFocused(!isFocused);

            if (onFocus) {
                onFocus(event);
            }

            // This a weird condition, because you would expect isFocused to be false for an onBlur action, but ok, here it is
            if (isFocused && onBlur) {
                onBlur(event);
            }
        },
        [isFocused, onBlur, onFocus]
    );

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
                    adornmentPosition={adornmentPosition}
                    as={isTextarea ? 'textarea' : 'input'}
                    hasAdornment={adornment !== undefined}
                    hasError={hasError}
                    isDisabled={isDisabled}
                    isFocused={isFocused}
                    isHovered={isHovered}
                    isTextarea={isTextarea}
                    isValid={isValid}
                    maxLength={maxLength}
                    minLength={minLength}
                    name={name}
                    onBlur={isDisabled ? undefined : toggleIsFocusedCallback}
                    onChange={isDisabled ? undefined : onChangeCallback}
                    onFocus={isDisabled ? undefined : toggleIsFocusedCallback}
                    onKeyDown={isDisabled || !onKeyDown ? undefined : onKeyDown}
                    onMouseEnter={isDisabled ? undefined : toggleIsHoveredCallback}
                    onMouseLeave={isDisabled ? undefined : toggleIsHoveredCallback}
                    type={type}
                    value={value === null ? undefined : value} // Assuming that null equals undefined
                    variant={variant}
                    {...textFieldProps}
                />
                {label && (
                    <FormElementLabel
                        adornmentPosition={adornmentPosition}
                        hasAdornment={adornment !== undefined}
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
                )}

                {adornment && (
                    <AdornmentWrapper
                        adornmentPosition={adornmentPosition}
                        hasError={hasError}
                        hasValue={hasValue}
                        isDisabled={isDisabled}
                        isFocused={isFocused}
                        isHovered={isHovered}
                        isValid={isValid}
                        variant={variant}
                    >
                        {adornment}
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
