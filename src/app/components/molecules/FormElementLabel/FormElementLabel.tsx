import { InputVariant } from '../../../types';
import Label from '../../atoms/Label/Label';
import React from 'react';
import { StyledFormElementLabel } from './FormElementLabel.sc';

export interface FormElementLabelProps {
    backgroundColor?: string;
    children: React.ReactNode;
    className?: string;
    hasError?: boolean;
    isActive?: boolean;
    isDisabled?: boolean;
    isFocused?: boolean;
    isHovered?: boolean;
    isValid?: boolean;
    variant?: InputVariant;
}

export const FormElementLabel: React.FunctionComponent<FormElementLabelProps> = ({
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

FormElementLabel.defaultProps = {
    backgroundColor: '',
    className: '',
    hasError: false,
    isActive: true,
    isDisabled: false,
    isFocused: false,
    isHovered: false,
    isValid: false,
    variant: InputVariant.OUTLINE,
};

export default FormElementLabel;
