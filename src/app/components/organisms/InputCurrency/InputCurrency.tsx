import { CurrencySymbol, StyledInputCurrency } from './InputCurrency.sc';
import { InputType, InputVariant } from '../../../types';
import React, { ChangeEvent, FunctionComponent, ReactNode, useState } from 'react';
import { getCurrencySymbol } from '../../../../lib';
import Input from '../../molecules/Input/Input';
import { isValidMoney } from '../../../utils/functions/validateFunctions';

export interface InputCurrencyProps {
    allowEmpty?: boolean;
    children?: never;
    className?: string;
    errorMessage?: ReactNode;
    hasCurrencySymbol?: boolean;
    hasValidColor?: boolean;
    isDisabled?: boolean;
    label: ReactNode;
    name: string;
    value?: string;
    variant?: InputVariant;
}

export const InputCurrency: FunctionComponent<InputCurrencyProps> = ({
    allowEmpty = true,
    className,
    errorMessage,
    isDisabled = false,
    label,
    name,
    hasCurrencySymbol = true,
    hasValidColor = false,
    value,
    variant = InputVariant.OUTLINE,
}) => {
    const [inputValue, setInputValue] = useState(value);
    const [isValid, setIsValid] = useState(value ? isValidMoney(value) : allowEmpty);

    const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setInputValue(event.currentTarget.value);
        setIsValid(event.currentTarget.value ? isValidMoney(event.currentTarget.value) : allowEmpty);
    };

    return (
        <StyledInputCurrency className={className}>
            <Input
                className={className}
                errorMessage={errorMessage}
                hasError={!isValid}
                hasTextIdentation={hasCurrencySymbol}
                isDisabled={isDisabled}
                isValid={hasValidColor && isValid}
                label={label}
                name={name}
                onChange={onChange}
                type={InputType.TEXT}
                value={inputValue}
                variant={variant}
            />

            {hasCurrencySymbol && (
                <CurrencySymbol isDisabled={isDisabled} variant={variant}>
                    {getCurrencySymbol()}
                </CurrencySymbol>
            )}
        </StyledInputCurrency>
    );
};

export default InputCurrency;
