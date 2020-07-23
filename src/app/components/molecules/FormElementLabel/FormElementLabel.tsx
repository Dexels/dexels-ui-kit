import React, { FunctionComponent, ReactNode } from 'react';
import { InputVariant } from '../../../types';
import Label from '../../atoms/Label/Label';
import { StyledFormElementLabel } from './FormElementLabel.sc';

export interface FormElementLabelProps {
    backgroundColor?: string;
    children?: ReactNode;
    className?: string;
    hasError?: boolean;
    hasTextIndentation?: boolean;
    isActive?: boolean;
    isDisabled?: boolean;
    isFocused?: boolean;
    isHovered?: boolean;
    isValid?: boolean;
    variant?: InputVariant;
}

export const FormElementLabel: FunctionComponent<FormElementLabelProps> = ({
    backgroundColor,
    children,
    className,
    hasError = false,
    hasTextIndentation = false,
    isActive = true,
    isDisabled = false,
    isFocused = false,
    isHovered = false,
    isValid = false,
    variant = InputVariant.OUTLINE,
}) => {
    const isSmall = isActive || isFocused;

    return (
        <StyledFormElementLabel
            backgroundColor={backgroundColor}
            className={className}
            hasTextIndentation={hasTextIndentation}
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

export default FormElementLabel;
