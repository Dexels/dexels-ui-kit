import { FORM_ELEMENT_LABEL_VARIANTS } from './FormElementLabel.consts';
import Label from '../../atoms/Label/Label';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledFormElementLabel } from './FormElementLabel.sc';

const FormElementLabel = ({
    children,
    hasError,
    isActive,
    isDisabled,
    isFocused,
    isValid,
    variant,
}) => (
    <StyledFormElementLabel isActive={isActive || isFocused} variant={variant}>
        <Label
            hasError={hasError}
            isActive={isActive}
            isDisabled={isDisabled}
            isFocused={isFocused}
            isSmall={isActive || isFocused}
            isTruncatable
            isValid={isValid}
        >
            {children}
        </Label>
    </StyledFormElementLabel>
);

FormElementLabel.variants = FORM_ELEMENT_LABEL_VARIANTS;

FormElementLabel.propTypes = {
    children: PropTypes.node.isRequired,
    hasError: PropTypes.bool,
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isFocused: PropTypes.bool,
    isValid: PropTypes.bool,
    variant: PropTypes.oneOf(Object.values(FormElementLabel.variants)),
};

FormElementLabel.defaultProps = {
    hasError: false,
    isActive: true,
    isDisabled: false,
    isFocused: false,
    isValid: false,
    variant: FormElementLabel.variants.OUTLINE,
};

export default FormElementLabel;
