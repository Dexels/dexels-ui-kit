import { AdornmentPosition, InputType, InputVariant, Locale } from '../../../types';
import { AdornmentWrapper, StyledInput } from './Input.sc';
import { formatMoneyWithoutSymbol, toCents, toMoneyValue } from '../../../utils/functions/financialFunctions';
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
import FormElementLabel from '../FormElementLabel/FormElementLabel';
import { TextField } from './component/TextField.sc';
import toNumber from '../../../utils/functions/toNumber';

export interface InputProps {
    adornment?: ReactNode;
    adornmentPosition?: AdornmentPosition;
    autoFocus?: boolean;
    children?: never;
    className?: string;
    errorMessage?: ReactNode;
    hasError?: boolean;
    hasNegativeAmountColor?: boolean;
    ignoreOutlineVariant?: boolean;
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
    autoFocus = false,
    className,
    errorMessage,
    hasError = false,
    hasNegativeAmountColor = true,
    ignoreOutlineVariant = false,
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
    onFocus,
    type = InputType.TEXT,
    value = '',
    variant = InputVariant.OUTLINE,
    ...rest
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isValidInputData, setIsValidInputData] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const hasValue = !isEmpty(inputValue);
    const textFieldProps: { [key: string]: number } = {};

    // Because this check might be performed in several actions, put it here
    const isValidInput = useCallback(
        (valueToValidate: string): boolean => {
            switch (type) {
                case InputType.CURRENCY:
                    return isValidInputCurrency(valueToValidate.toString(), locale, isRequired, min, max);

                case InputType.EMAIL:
                    return isValidInputEmail(valueToValidate, isRequired);

                case InputType.NUMBER:
                    return isValidInputNumber(valueToValidate, locale, isRequired, min, max);

                case InputType.TELEPHONE:
                    return isValidInputTelephone(valueToValidate, isRequired, locale);

                case InputType.TEXT:
                    return isValidInputText(valueToValidate, isRequired, minLength, maxLength);

                default:
                    return true;
            }
        },
        [isRequired, locale, max, maxLength, min, minLength, type]
    );

    const onChangeCallback = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            let newValue = event.currentTarget.value;

            if (type !== InputType.CURRENCY) {
                // for currency no manipulation of the value before loosing focus

                if (!isTextarea) {
                    if (max !== undefined && newValue && toNumber(newValue) > max) {
                        newValue = max.toString();
                    }

                    if (min !== undefined && newValue && toNumber(newValue) < min) {
                        newValue = min.toString();
                    }
                }

                if (onChange) {
                    onChange({
                        ...event,
                        currentTarget: {
                            name: event.currentTarget.name,
                            value: newValue,
                        },
                    } as ChangeEvent<HTMLInputElement>);
                }
            }

            setInputValue(newValue);
        },
        [onChange]
    );

    const toggleIsFocusedCallback = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
            if (onFocus && !isFocused) {
                onFocus(event);
            }

            if (isFocused && onBlur) {
                // Perform some possible post actions
                if (type === InputType.CURRENCY && isValidInputData) {
                    // setInputValue(formatMoneyWithoutSymbol(inputValue || '', locale));
                    // @TODO something that adds the cents correctly

                    if (onChange) {
                        onChange({
                            currentTarget: {
                                name,
                                value: toMoneyValue(inputValue, locale).toString(),
                            },
                        } as ChangeEvent<HTMLInputElement>);
                    }
                }

                onBlur(event);
            }

            setIsFocused(!isFocused);
        },
        [inputValue, isFocused, isValidInputData, onBlur, onChange, onFocus]
    );

    const toggleIsHoveredCallback = useCallback(() => {
        setIsHovered(!isHovered);
    }, [isHovered]);

    // we want to be able to force re-render if the value is changed from outside the component
    useEffect(() => {
        if (type === InputType.CURRENCY) {
            setInputValue(formatMoneyWithoutSymbol(toMoneyValue(toCents(value || ''), locale, true), locale));
        } else {
            setInputValue(value || '');
        }
    }, [value]);

    // when inputValue changes validate it
    useEffect(() => {
        setIsValidInputData(isValidInput(inputValue));
    }, [inputValue]);

    return (
        <>
            <StyledInput
                className={className}
                hasError={hasError || !isValidInputData}
                isClickable={!isDisabled && Boolean(onClick)}
                isDisabled={isDisabled}
                isFocused={isFocused}
                isHovered={isHovered}
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
                    hasError={hasError || !isValidInputData}
                    hasNegativeAmountColor={hasNegativeAmountColor && !isEmpty(inputValue) && toNumber(inputValue) < 0}
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
                    value={inputValue}
                    variant={variant}
                    {...textFieldProps}
                />
                {label && (
                    <FormElementLabel
                        adornmentPosition={adornmentPosition}
                        hasAdornment={adornment !== undefined}
                        hasError={hasError || !isValidInputData}
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
                        hasError={hasError || !isValidInputData}
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
            {errorMessage && (hasError || !isValidInputData) && !isDisabled && (
                <ErrorMessage isOutlineVariant={variant === InputVariant.OUTLINE && !ignoreOutlineVariant}>
                    {errorMessage}
                </ErrorMessage>
            )}
        </>
    );
};

export default Input;
