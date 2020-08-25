import { AdornmentPosition, InputType, InputVariant, Locale } from '../../../types';
import React, { ChangeEvent, FunctionComponent, ReactNode } from 'react';
import { getCurrencyIcon } from '../../../utils/functions/financialFunctions';
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
    label: ReactNode;
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
    const isValid = value ? isValidMoney(value, locale) : allowEmpty;

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
                onChange={onChange}
                type={InputType.TEXT}
                value={value}
                variant={variant}
            />
        </StyledInputCurrency>
    );
};

export default InputCurrency;
