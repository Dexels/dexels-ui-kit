import { AdornmentPosition, InputType, InputVariant, Locale } from '../../../types';
import Input, { InputProps } from '../../molecules/Input/Input';
import React, { FunctionComponent, ReactNode } from 'react';
import { getCurrencyIcon } from '../../../utils/functions/financialFunctions';
import { Icon } from '../../atoms/Icon/Icon';

export interface InputCurrencyProps extends InputProps {
    adornmentPosition?: AdornmentPosition;
    children?: never;
    className?: string;
    errorMessage?: ReactNode;
    hasError?: boolean;
    hasNegativeAmountColor?: boolean;
    isDisabled?: boolean;
    isRequired?: boolean;
    isValid?: boolean;
    label?: ReactNode;
    locale: Locale;
    name: string;
    value?: string;
    variant?: InputVariant;
}

export const InputCurrency: FunctionComponent<InputCurrencyProps> = ({
    autoFocus = false,
    adornmentPosition = AdornmentPosition.LEFT,
    className,
    errorMessage,
    hasError = false,
    hasNegativeAmountColor = true,
    isDisabled = false,
    isRequired = false,
    isValid = false,
    label,
    locale,
    max,
    min,
    name,
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    value,
    variant = InputVariant.OUTLINE,
}) => (
    <Input
        adornment={<Icon type={getCurrencyIcon(locale)} />}
        adornmentPosition={adornmentPosition}
        autoFocus={autoFocus}
        className={className}
        errorMessage={errorMessage}
        hasError={hasError}
        hasNegativeAmountColor={hasNegativeAmountColor}
        isDisabled={isDisabled}
        isRequired={isRequired}
        isValid={isValid}
        label={label}
        locale={locale}
        max={max}
        min={min}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        type={InputType.CURRENCY}
        value={value}
        variant={variant}
    />
);

export default InputCurrency;
