import { InputField, Label, StyledInput } from './Input.sc';
import Icon from '../../atoms/Icon/Icon';
import { INPUT_VARIANTS } from './Input.consts';
import PropTypes from 'prop-types';
import React from 'react';

const Input = ({
    isDisabled,
    label,
    name,
    type,
    variant,
}) => (
    <StyledInput isDisabled={isDisabled} variant={variant}>
        <InputField name={name} type={type} />
        <Label>
            {label}
        </Label>
    </StyledInput>
);

Input.variants = INPUT_VARIANTS;

Input.propTypes = {
    isDisabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['email', 'number', 'password', 'text']),
    variant: PropTypes.oneOf(Object.values(Input.variants)),
};

Input.defaultProps = {
    isDisabled: false,
    type: 'text',
    variant: Input.variants.FULL_SIZE,
};

export default Input;
