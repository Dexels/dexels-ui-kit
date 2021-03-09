import { AdornmentPosition, InputType, InputVariant, Locale } from '../../../types';
import Input, { InputProps } from '../../molecules/Input/Input';
import React, { FunctionComponent, ReactNode } from 'react';
import { getCurrencyIcon } from '../../../utils/functions/financialFunctions';
import { Icon } from '../../atoms/Icon/Icon';
import { StyledInputCurrency } from './InputCurrency.sc';

export interface InputCurrencyProps extends InputProps {
    adornmentPosition?: AdornmentPosition;
    children?: never;
    className?: string;
    errorMessage?: ReactNode;
    hasValidColor?: boolean;
    isDisabled?: boolean;
    isRequired?: boolean;
    label?: ReactNode;
    locale: Locale;
    name: string;
    value?: string;
    variant?: InputVariant;
}

export const InputCurrency: FunctionComponent<InputCurrencyProps> = ({
    adornmentPosition = AdornmentPosition.LEFT,
    className,
    errorMessage,
    hasValidColor = false,
    isDisabled = false,
    isRequired = false,
    label,
    locale,
    name,
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    onValidation,
    value,
    variant = InputVariant.OUTLINE,
}) => (
    <StyledInputCurrency className={className}>
        <Input
            adornment={<Icon type={getCurrencyIcon(locale)} />}
            adornmentPosition={adornmentPosition}
            className={className}
            errorMessage={errorMessage}
            isDisabled={isDisabled}
            isRequired={isRequired}
            isValid={hasValidColor}
            label={label}
            locale={locale}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            onValidation={onValidation}
            type={InputType.CURRENCY}
            value={value}
            variant={variant}
        />
    </StyledInputCurrency>
);

export default InputCurrency;
