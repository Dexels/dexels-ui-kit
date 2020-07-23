import { AdornmentPosition, InputType, InputVariant, Locale } from '../../../types';
import React, { ChangeEvent, FunctionComponent, ReactNode, useState } from 'react';
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
    const [inputValue, setInputValue] = useState(value);
    const [isValid, setIsValid] = useState(value ? isValidMoney(value, locale) : allowEmpty);

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
        setInputValue(event.currentTarget.value);
        setIsValid(event.currentTarget.value ? isValidMoney(event.currentTarget.value, locale) : allowEmpty);

        if (onChange) {
            onChange(event);
        }
    };

    return (
        <StyledInputCurrency className={className}>
            <Input
                adornment={<Icon type={getCurrencyIcon()} />}
                adornmentPosition={adornmentPosition}
                className={className}
                errorMessage={errorMessage}
                hasError={!isValid}
                isDisabled={isDisabled}
                isValid={hasValidColor && isValid}
                label={label}
                name={name}
                onChange={onChangeInput}
                type={InputType.NUMBER}
                value={inputValue}
                variant={variant}
            />
        </StyledInputCurrency>
    );
};

export default InputCurrency;
