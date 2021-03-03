import { AdornmentPosition, InputType, InputVariant, Locale } from '../../../types';
import { formatMoneyWithoutSymbol, getCurrencyIcon } from '../../../utils/functions/financialFunctions';
import { isEmpty, isValidMoney } from '../../../utils/functions/validateFunctions';
import React, { ChangeEvent, FunctionComponent, ReactNode, useCallback, useState } from 'react';
import { Icon } from '../../atoms/Icon/Icon';
import Input from '../../molecules/Input/Input';
import { StyledInputCurrency } from './InputCurrency.sc';

export interface InputCurrencyProps {
    adornmentPosition?: AdornmentPosition;
    allowEmpty?: boolean;
    children?: never;
    className?: string;
    errorMessage?: ReactNode;
    hasValidColor?: boolean;
    isDisabled?: boolean;
    label?: ReactNode;
    locale: Locale;
    name: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    variant?: InputVariant;
}

export const InputCurrency: FunctionComponent<InputCurrencyProps> = ({
    adornmentPosition = AdornmentPosition.LEFT,
    allowEmpty = true,
    className,
    errorMessage,
    hasValidColor = false,
    isDisabled = false,
    label,
    locale,
    name,
    onChange,
    value,
    variant = InputVariant.OUTLINE,
}) => {
    const [inputValue, setInputValue] = useState(value);
    const isValid = inputValue ? isValidMoney(inputValue, locale) : allowEmpty;

    const onBlurCallback = useCallback((): void => {
        if (isEmpty(inputValue) && allowEmpty) {
            setInputValue(undefined);
        } else if (isValid) {
            setInputValue(formatMoneyWithoutSymbol(inputValue || '', locale));
        } else {
            setInputValue(inputValue);
        }
    }, [inputValue]);

    const onChangeCallback = useCallback(
        (event: ChangeEvent<HTMLInputElement>): void => {
            setInputValue(event.currentTarget.value);

            if (onChange) {
                onChange(event);
            }
        },
        [inputValue]
    );

    return (
        <StyledInputCurrency className={className}>
            <Input
                adornment={<Icon type={getCurrencyIcon(locale)} />}
                adornmentPosition={adornmentPosition}
                className={className}
                errorMessage={errorMessage}
                hasError={!isValid}
                isDisabled={isDisabled}
                isValid={hasValidColor && isValid}
                label={label}
                locale={locale}
                name={name}
                onBlur={onBlurCallback}
                onChange={onChangeCallback}
                type={InputType.CURRENCY}
                value={inputValue}
                variant={variant}
            />
        </StyledInputCurrency>
    );
};

export default InputCurrency;
