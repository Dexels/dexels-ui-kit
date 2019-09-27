import React, { useState } from 'react';
import { StyledInputPassword, VisibilitySwitch } from './InputPassword.sc';
import Icon from '../../atoms/Icon/Icon';
import Input from '../../molecules/Input/Input';
import PropTypes from 'prop-types';

const InputPassword = ({
    hasError,
    isDisabled,
    isValid,
    isVisibleDefault,
    label,
    name,
    variant,
}) => {
    const [isVisible, setIsVisible] = useState(isVisibleDefault);

    return (
        <StyledInputPassword>
            <Input
                hasError={hasError}
                isDisabled={isDisabled}
                isValid={isValid}
                label={label}
                name={name}
                type={isVisible ? Input.types.TEXT : Input.types.PASSWORD}
                variant={variant}
            />
            <VisibilitySwitch
                onClick={() => {
                    setIsVisible(!isVisible);
                }}
            >
                <Icon type={isVisible ? Icon.types.VISIBILITY_ON : Icon.types.VISIBILITY_OFF} />
            </VisibilitySwitch>
        </StyledInputPassword>
    );
};

InputPassword.variants = Input.variants;

InputPassword.propTypes = {
    hasError: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isValid: PropTypes.bool,
    isVisibleDefault: PropTypes.bool,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(Object.values(InputPassword.variants)),
};

InputPassword.defaultProps = {
    hasError: false,
    isDisabled: false,
    isValid: false,
    isVisibleDefault: false,
    variant: InputPassword.variants.FULL_SIZE,
};

export default InputPassword;
