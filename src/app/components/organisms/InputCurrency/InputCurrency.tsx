import { CurrencySymbol, StyledInputCurrency } from './InputCurrency.sc';
import { InputType, InputVariant } from '../../../types';
import React, { ChangeEvent, FunctionComponent, ReactNode, useState } from 'react';
import { getCurrencySymbol } from '../../../utils/functions/financialFunctions';
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
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    variant?: InputVariant;
}

export const InputCurrency: FunctionComponent<InputCurrencyProps> = ({
    allowEmpty = true,
    className,
    errorMessage,
    hasCurrencySymbol = true,
    hasValidColor = false,
    isDisabled = false,
    label,
    name,
    onChange,
    value,
    variant = InputVariant.OUTLINE,
}) => {
    const [inputValue, setInputValue] = useState(value);
    const [isValid, setIsValid] = useState(value ? isValidMoney(value) : allowEmpty);
    const hasValue = inputValue ? inputValue.length > 0 : false;

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
        setInputValue(event.currentTarget.value);
        setIsValid(event.currentTarget.value ? isValidMoney(event.currentTarget.value) : allowEmpty);

        if (onChange) {
            onChange(event);
        }
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
                onChange={onChangeInput}
                type={InputType.TEXT}
                value={inputValue}
                variant={variant}
            />

            {hasCurrencySymbol && (
                <CurrencySymbol hasValue={hasValue} isDisabled={isDisabled} variant={variant}>
                    {getCurrencySymbol()}
                </CurrencySymbol>
            )}
        </StyledInputCurrency>
    );
};

export default InputCurrency;
