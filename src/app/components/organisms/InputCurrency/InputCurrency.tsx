import { AdornmentPosition, InputType, InputVariant, Locale } from '../../../types';
import React, { ChangeEvent, FunctionComponent, ReactNode, useCallback } from 'react';
import { getCurrencyIcon } from '../../../utils/functions/financialFunctions';
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
    isRequired?: boolean;
    label?: ReactNode;
    locale: Locale;
    name: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
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
    onChange,
    value,
    variant = InputVariant.OUTLINE,
}) => {
    const onChangeCallback = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
        if (onChange) {
            onChange(event);
        }
    }, []);

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const onBlur = (): void => {}; // Fake function so the correct things get triggered in Input.tsx

    return (
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
                onChange={onChangeCallback}
                type={InputType.CURRENCY}
                value={value}
                variant={variant}
            />
        </StyledInputCurrency>
    );
};

export default InputCurrency;
