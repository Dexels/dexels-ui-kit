import { IconType, InputType, InputVariant } from '../../../types';
import React, { useState } from 'react';
import { StyledInputPassword, VisibilitySwitch } from './InputPassword.sc';
import Icon from '../../atoms/Icon/Icon';
import Input from '../../molecules/Input/Input';

export interface InputPasswordProps {
    className?: string;
    errorMessage?: React.ReactNode;
    hasError?: boolean;
    isDisabled?: boolean;
    isValid?: boolean;
    isVisibleDefault?: boolean;
    label: React.ReactNode;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    value?: string;
    variant?: InputVariant;
}

export const InputPassword: React.FunctionComponent<InputPasswordProps> = ({
    className,
    errorMessage,
    hasError = false,
    isDisabled = false,
    isValid = false,
    isVisibleDefault = false,
    label,
    name,
    onChange,
    onKeyDown,
    value,
    variant = InputVariant.OUTLINE,
}) => {
    const [isVisible, setIsVisible] = useState(isVisibleDefault);

    return (
        <StyledInputPassword className={className}>
            <Input
                errorMessage={errorMessage}
                hasError={hasError}
                isDisabled={isDisabled}
                isValid={isValid}
                label={label}
                name={name}
                onChange={onChange}
                onKeyDown={onKeyDown}
                type={isVisible ? InputType.TEXT : InputType.PASSWORD}
                value={value}
                variant={variant}
            />
            <VisibilitySwitch
                isDisabled={isDisabled}
                onClick={(): void => {
                    setIsVisible(!isVisible);
                }}
                variant={variant}
            >
                <Icon type={isVisible ? IconType.VISIBILITYON : IconType.VISIBILITYOFF} />
            </VisibilitySwitch>
        </StyledInputPassword>
    );
};

export default InputPassword;
