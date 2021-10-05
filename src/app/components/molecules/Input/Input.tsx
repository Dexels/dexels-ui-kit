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
    isValidInputURI,
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
    hasTransparentBackground?: boolean;
    ignoreOutlineVariant?: boolean;
    isDisabled?: boolean;
    isOnChangeRequired?: boolean;
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
    hasTransparentBackground = true,
    ignoreOutlineVariant = false,
    isDisabled = false,
    isRequired = false,
    isOnChangeRequired = true,
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
    const [inputDisplayValue, setInputDisplayValue] = useState('');
    const [inputValue, setInputValue] = useState(''); // for currency for disabling save button purposes onnly
    const hasValue = !isEmpty(inputDisplayValue);
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
                    return isValidInputTelephone(valueToValidate, isRequired);

                case InputType.TEXT:
                    return isValidInputText(valueToValidate, isRequired, minLength, maxLength);

                case InputType.URI:
                    return isValidInputURI(valueToValidate, isRequired);

                default:
                    return true;
            }
        },
        [isRequired, locale, max, maxLength, min, minLength, type]
    );

    const checkRange = useCallback(
        (valueToCheck: string): string => {
            let newValue = valueToCheck;

            if (max !== undefined && valueToCheck && toNumber(valueToCheck) > max) {
                newValue = max.toString();
            }

            if (min !== undefined && valueToCheck && toNumber(valueToCheck) < min) {
                newValue = min.toString();
            }

            return newValue;
        },
        [min, max]
    );

    const onChangeCallback = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            let newValue = event.currentTarget.value;
            let hasChanges = true;

            // don't allow typing letters, Firefox and Safari ignore the input type
            if (type === InputType.NUMBER) {
                const regex = RegExp(/[0-9]+/g);

                if (!regex.test(newValue)) {
                    newValue = inputDisplayValue;
                    hasChanges = false;
                }
            }

            if (type !== InputType.CURRENCY) {
                // for currency no manipulation of the value before loosing focus
                if (!isTextarea) {
                    newValue = checkRange(newValue);
                }
            }

            setInputDisplayValue(newValue);

            // prepare value for calling extern onChange
            if (type === InputType.CURRENCY) {
                newValue = toMoneyValue(newValue, locale).toString();
                setInputValue(newValue);
            }

            if (hasChanges && onChange && (type !== InputType.CURRENCY || isOnChangeRequired)) {
                onChange({
                    ...event,
                    currentTarget: {
                        name: event.currentTarget.name,
                        value: newValue,
                    },
                } as ChangeEvent<HTMLInputElement>);
            }
        },
        [onChange, inputDisplayValue, isOnChangeRequired]
    );

    const onFocusCallback = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
            setIsFocused(true);

            if (onFocus) {
                onFocus(event);
            }
        },
        [onFocus]
    );

    const onBlurCallback = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
            setIsFocused(false);

            // Perform some possible post actions
            if (type === InputType.CURRENCY) {
                const newValue = checkRange(inputValue);
                setInputValue(newValue);

                // if onChange is not required then it wasn't fined on change and needs to be fired onBlur
                if (onChange && !isOnChangeRequired) {
                    onChange({
                        currentTarget: {
                            name,
                            value: newValue,
                        },
                    } as ChangeEvent<HTMLInputElement>);
                }

                if (onBlur) {
                    onBlur({
                        currentTarget: {
                            name,
                            value: newValue,
                        },
                    } as FocusEvent<HTMLInputElement>);
                }
            } else if (onBlur) {
                onBlur(event);
            }
        },
        [inputDisplayValue, inputValue, name, onBlur, onChange, type]
    );

    const onHoveredCallback = useCallback(() => {
        setIsHovered(!isHovered);
    }, [isHovered]);

    // Set initial local state value and with every change
    useEffect(() => {
        setInputValue(value || '');
    }, [value]);

    // we want to be able to force re-render if the value is changed from outside the component
    useEffect(() => {
        if (type === InputType.CURRENCY) {
            setInputDisplayValue(formatMoneyWithoutSymbol(toMoneyValue(toCents(value || ''), locale, true), locale));
        } else {
            setInputDisplayValue(value || '');
        }
    }, [value]);

    useEffect(() => {
        // for currency also check the temporary inputValue
        const validation =
            type === InputType.CURRENCY
                ? isValidInput(inputDisplayValue) &&
                  (isEmpty(inputValue) || isValidInputNumber(inputValue, locale, isRequired, min, max))
                : isValidInput(inputDisplayValue);

        setIsValidInputData(validation);
    }, [inputDisplayValue, inputValue]);

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
                    hasNegativeAmountColor={
                        hasNegativeAmountColor && !isEmpty(inputDisplayValue) && toNumber(inputDisplayValue) < 0
                    }
                    hasTransparentBackground={hasTransparentBackground}
                    isDisabled={isDisabled}
                    isFocused={isFocused}
                    isHovered={isHovered}
                    isTextarea={isTextarea}
                    isValid={isValid}
                    maxLength={maxLength}
                    minLength={minLength}
                    name={name}
                    onBlur={isDisabled ? undefined : onBlurCallback}
                    onChange={isDisabled ? undefined : onChangeCallback}
                    onFocus={isDisabled ? undefined : onFocusCallback}
                    onKeyDown={isDisabled || !onKeyDown ? undefined : onKeyDown}
                    onMouseEnter={isDisabled ? undefined : onHoveredCallback}
                    onMouseLeave={isDisabled ? undefined : onHoveredCallback}
                    readOnly={isDisabled}
                    type={type}
                    value={inputDisplayValue}
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
