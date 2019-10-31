import { INPUT_LABEL_VARIANTS } from './InputLabel.consts';
import Label from '../../atoms/Label/Label';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledInputLabel } from './InputLabel.sc';

const InputLabel = ({
    children,
    hasError,
    isActive,
    isDisabled,
    isFocused,
    isValid,
    variant,
}) => (
    <StyledInputLabel isActive={isActive || isFocused} variant={variant}>
        <Label
            hasError={hasError}
            isActive={isActive}
            isDisabled={isDisabled}
            isFocused={isFocused}
            isSmall={isActive || isFocused}
            isValid={isValid}
        >
            {children}
        </Label>
    </StyledInputLabel>
);

InputLabel.variants = INPUT_LABEL_VARIANTS;

InputLabel.propTypes = {
    children: PropTypes.node.isRequired,
    hasError: PropTypes.bool,
    isActive: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool,
    isFocused: PropTypes.bool.isRequired,
    isValid: PropTypes.bool,
    variant: PropTypes.oneOf(Object.values(InputLabel.variants)),
};

InputLabel.defaultProps = {
    hasError: false,
    isDisabled: false,
    isValid: false,
    variant: InputLabel.variants.OUTLINE,
};

export default InputLabel;
