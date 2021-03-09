import { AdornmentPosition, InputType, InputVariant, Locale } from '../../../types';
import { AdornmentWrapper, ErrorMessageWrapper, StyledInput, TextField } from './Input.sc';
import {
    isEmpty,
    isValidInputCurrency,
    isValidInputEmail,
    isValidInputNumber,
    isValidInputTelephone,
    isValidInputText,
} from '../../../utils/functions/validateFunctions';
import React, {
    ChangeEvent,
    FocusEvent,
    FunctionComponent,
    KeyboardEvent,
    MouseEventHandler,
    ReactNode,
    useCallback,
    useEffect,
    useState,
} from 'react';
import { DEFAULT_LOCALE } from '../../../../global/constants';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import { formatMoneyWithoutSymbol } from '../../../utils/functions/financialFunctions';
import FormElementLabel from '../FormElementLabel/FormElementLabel';

export interface InputProps {
    adornment?: ReactNode;
    adornmentPosition?: AdornmentPosition;
    autoFocus?: boolean;
    children?: never;
    className?: string;
    errorMessage?: ReactNode;
    hasError?: boolean;
    isDisabled?: boolean;
    isRequired?: boolean;
    isTextarea?: boolean;
    isValid?: boolean;
    label?: ReactNode;
    locale?: Locale;
    max?: number;
    maxLength?: number;
    min?: number;
    minLength?: number;
    name: string;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    onChange?: (event: ChangeEvent<HTMLInputElement>, isValidData?: boolean) => void;
    onClick?: MouseEventHandler;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    onValidation?: (isValidData: boolean) => void;
    type?: InputType;
    value?: string | null;
    variant?: InputVariant;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Input: FunctionComponent<InputProps & { [key: string]: any }> = ({
    adornment,
    adornmentPosition = AdornmentPosition.LEFT,
    autoFocus = false,
    className,
    errorMessage,
    hasError = false,
    isDisabled = false,
    isRequired = false,
    isTextarea = false,
    isValid = false,
    label,
    locale = DEFAULT_LOCALE,
    max,
    maxLength,
    min,
    minLength,
    name,
    onBlur,
    onChange,
    onClick,
    onKeyDown,
    onValidation,
    onFocus,
    type = InputType.TEXT,
    value = '',
    variant = InputVariant.OUTLINE,
    ...rest
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isValidInputData, setIsValidInputData] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const hasValue = inputValue ? inputValue.length > 0 : false;
    const [hasValidationError, setHasValidationError] = useState(hasError);
    const textFieldProps: { [key: string]: number } = {};

    // Because this check might be performed in several actions, put it here
    // The dependencies are at least required to make the stories work
    const isValidInput = useCallback(
        (valueToValidate: string): boolean => {
            switch (type) {
                case InputType.CURRENCY:
                    return isValidInputCurrency(valueToValidate.toString(), locale, isRequired);

                case InputType.EMAIL:
                    return isValidInputEmail(valueToValidate, isRequired);

                case InputType.NUMBER:
                    return isValidInputNumber(parseInt(valueToValidate, 10), locale, isRequired, min, max);

                case InputType.TELEPHONE:
                    return isValidInputTelephone(valueToValidate, isRequired);

                case InputType.TEXT:
                    return isValidInputText(valueToValidate, isRequired, minLength, maxLength);

                default:
                    return true;
            }
        },
        [isRequired, locale, max, maxLength, min, minLength]
    );

    const onChangeCallback = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            if (onChange) {
                onChange(event);
            }

            setInputValue(event.currentTarget.value);
        },
        [onChange]
    );

    useEffect(() => {
        setHasValidationError(!isValidInput(inputValue || ''));
    }, [inputValue]);

    useEffect(() => {
        if (onValidation) {
            onValidation(hasValidationError);
        }
    }, [onValidation]);

    const toggleIsFocusedCallback = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
            if (onFocus && !isFocused) {
                onFocus(event);
            }

            if (isFocused && onBlur) {
                if (isEmpty(event.currentTarget.value) && !isRequired) {
                    setInputValue(null);
                    setHasValidationError(false);
                } else if (isEmpty(event.currentTarget.value) && isRequired) {
                    setInputValue(inputValue);
                    setHasValidationError(true);
                } else {
                    setInputValue(inputValue);
                    setHasValidationError(!isValidInputData);

                    // Perform some possible post actions
                    if (type === InputType.CURRENCY && isValidInputData) {
                        setInputValue(formatMoneyWithoutSymbol(inputValue || '', locale));
                    }
                }

                onBlur(event);
            }

            setIsFocused(!isFocused);
        },
        [inputValue, isFocused, isValidInputData, onBlur, onFocus]
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

    // Initialize correct validation stuff
    useEffect(() => {
        const isValidData = value !== undefined && value !== null ? isValidInput(value) : !(isRequired && !value);
        setIsValidInputData(isValidData);
        setHasValidationError(!isValidData);
    }, []);

    return (
        <>
            <StyledInput
                className={className}
                hasError={hasError || hasValidationError}
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
                    autoFocus={autoFocus}
                    hasAdornment={adornment !== undefined}
                    hasError={hasError || hasValidationError}
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
                    readOnly={isDisabled}
                    type={type}
                    value={inputValue === null ? undefined : inputValue} // Assuming that null equals undefined
                    variant={variant}
                    {...textFieldProps}
                />
                {label && (
                    <FormElementLabel
                        adornmentPosition={adornmentPosition}
                        hasAdornment={adornment !== undefined}
                        hasError={hasError || hasValidationError}
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
                        hasError={hasError || hasValidationError}
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
            {errorMessage && (hasError || hasValidationError) && !isDisabled && (
                <ErrorMessageWrapper variant={variant}>
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                </ErrorMessageWrapper>
            )}
        </>
    );
};

export default Input;
