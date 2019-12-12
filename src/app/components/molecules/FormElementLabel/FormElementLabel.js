import { FORM_ELEMENT_LABEL_VARIANTS } from './FormElementLabel.consts';
import Label from '../../atoms/Label/Label';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledFormElementLabel } from './FormElementLabel.sc';

const FormElementLabel = ({
    backgroundColor,
    children,
    className,
    hasError,
    isActive,
    isDisabled,
    isFocused,
    isHovered,
    isValid,
    variant,
}) => {
    const isSmall = isActive || isFocused;

    return (
        <StyledFormElementLabel
            backgroundColor={backgroundColor}
            className={className}
            isActive={isActive || isFocused}
            variant={variant}
        >
            <Label
                hasError={hasError}
                isActive={isActive}
                isDisabled={isDisabled}
                isFocused={isFocused}
                isHovered={isSmall && isHovered}
                isSmall={isSmall}
                isTruncatable
                isValid={isValid}
            >
                {children}
            </Label>
        </StyledFormElementLabel>
    );
};

FormElementLabel.variants = FORM_ELEMENT_LABEL_VARIANTS;

FormElementLabel.propTypes = {
    backgroundColor: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    hasError: PropTypes.bool,
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isFocused: PropTypes.bool,
    isHovered: PropTypes.bool,
    isValid: PropTypes.bool,
    variant: PropTypes.oneOf(Object.values(FormElementLabel.variants)),
};

FormElementLabel.defaultProps = {
    backgroundColor: '',
    className: '',
    hasError: false,
    isActive: true,
    isDisabled: false,
    isFocused: false,
    isHovered: false,
    isValid: false,
    variant: FormElementLabel.variants.OUTLINE,
};

export default FormElementLabel;
