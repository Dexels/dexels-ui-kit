import { AdornmentPosition, InputType, InputVariant, Locale } from '../../../types';
import React, { ChangeEvent, FunctionComponent, ReactNode, useCallback, useState } from 'react';
import { formatMoneyWithoutSymbol, getCurrencyIcon } from '../../../utils/functions/financialFunctions';
import { Icon } from '../../atoms/Icon/Icon';
import Input from '../../molecules/Input/Input';
import { isValidMoney } from '../../../utils/functions/validateFunctions';
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

    console.log('root', value, inputValue, formatMoneyWithoutSymbol(inputValue || '', locale));

    const onChangeCallback = useCallback(
        (event: ChangeEvent<HTMLInputElement>): void => {
            console.log(
                'onChangeCallback',
                event.currentTarget.value,
                inputValue,
                formatMoneyWithoutSymbol(event.currentTarget.value || '', locale)
            );

            setInputValue(formatMoneyWithoutSymbol(event.currentTarget.value || '', locale));

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
                name={name}
                onChange={onChangeCallback}
                type={InputType.TEXT}
                value={inputValue}
                variant={variant}
            />
        </StyledInputCurrency>
    );
};

export default InputCurrency;
