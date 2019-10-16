import React, { useState } from 'react';
import { StyledInputPassword, VisibilitySwitch } from './InputPassword.sc';
import Icon from '../../atoms/Icon/Icon';
import Input from '../../molecules/Input/Input';
import { INPUT_PASSWORD_VARIANTS } from './InputPassword.consts';
import PropTypes from 'prop-types';

const InputPassword = ({
    errorMessage,
    hasError,
    isDisabled,
    isValid,
    isVisibleDefault,
    label,
    name,
    onChange,
    value,
    variant,
}) => {
    const [isVisible, setIsVisible] = useState(isVisibleDefault);

    return (
        <StyledInputPassword>
            <Input
                errorMessage={errorMessage}
                hasError={hasError}
                isDisabled={isDisabled}
                isValid={isValid}
                label={label}
                name={name}
                onChange={onChange}
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
                <Icon type={isVisible ? Icon.types.VISIBILITY_ON : Icon.types.VISIBILITY_OFF} />
            </VisibilitySwitch>
        </StyledInputPassword>
    );
};

InputPassword.variants = INPUT_PASSWORD_VARIANTS;

InputPassword.propTypes = {
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isValid: PropTypes.bool,
    isVisibleDefault: PropTypes.bool,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    variant: PropTypes.oneOf(Object.values(InputPassword.variants)),
};

InputPassword.defaultProps = {
    errorMessage: '',
    hasError: false,
    isDisabled: false,
    isValid: false,
    isVisibleDefault: false,
    value: '',
    variant: InputPassword.variants.FULL_SIZE,
};

export default InputPassword;
