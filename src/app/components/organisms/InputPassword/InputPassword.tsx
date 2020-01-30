import { InputVariants, InputVariantsMap } from '../../../types';
import React, { useState } from 'react';
import { StyledInputPassword, VisibilitySwitch } from './InputPassword.sc';
import Icon from '../../atoms/Icon/Icon';
import Input from '../../molecules/Input/Input';
import { INPUT_PASSWORD_VARIANTS } from './InputPassword.consts';

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
    variant?: InputVariants;
}

interface InputPasswordComponent extends React.FunctionComponent<InputPasswordProps> {
    variants: InputVariantsMap;
}

export const InputPassword: InputPasswordComponent = ({
    className,
    errorMessage,
    hasError,
    isDisabled,
    isValid,
    isVisibleDefault,
    label,
    name,
    onChange,
    onKeyDown,
    value,
    variant,
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
                type={isVisible ? Input.types.TEXT : Input.types.PASSWORD}
                value={value}
                variant={variant}
            />
            <VisibilitySwitch
                isDisabled={isDisabled}
                onClick={() => {
                    setIsVisible(!isVisible);
                }}
                variant={variant}
            >
                <Icon type={isVisible ? Icon.types.VISIBILITYON : Icon.types.VISIBILITYOFF} />
            </VisibilitySwitch>
        </StyledInputPassword>
    );
};

InputPassword.variants = INPUT_PASSWORD_VARIANTS;

InputPassword.defaultProps = {
    className: '',
    errorMessage: null,
    hasError: false,
    isDisabled: false,
    isValid: false,
    isVisibleDefault: false,
    onKeyDown: null,
    value: '',
    variant: InputPassword.variants.OUTLINE,
};

export default InputPassword;
