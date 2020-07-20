import { InputType, InputVariant } from '../../../types';
import React, { ChangeEvent, FunctionComponent, ReactNode, useState } from 'react';
import { Input } from '../../../../lib';

export interface InputCurrencyProps {
    children?: never;
    className?: string;
    errorMessage?: ReactNode;
    hasError?: boolean;
    isDisabled?: boolean;
    isValid?: boolean;
    label: ReactNode;
    name: string;
    value?: string;
    variant?: InputVariant;
}

export const InputCurrency: FunctionComponent<InputCurrencyProps> = ({
    className,
    errorMessage,
    hasError = false,
    isDisabled = false,
    isValid = false,
    label,
    name,
    value,
    variant = InputVariant.OUTLINE,
}) => {
    const [inputValue, setInputValue] = useState(value);

    // TODO: add validation to the onChange function
    const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setInputValue(event.currentTarget.value);
    };

    return (
        <Input
            className={className}
            errorMessage={errorMessage}
            hasError={hasError}
            isDisabled={isDisabled}
            isValid={isValid}
            label={label}
            name={name}
            onChange={onChange}
            type={InputType.TEXT}
            value={inputValue}
            variant={variant}
        />

        // TODO: add currency symbol
        // TODO: add error message
    );
};

export default InputCurrency;
