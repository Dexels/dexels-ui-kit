import { AdornmentPosition, InputVariant } from '../../../types';
import React, { FunctionComponent, ReactNode } from 'react';
import Label from '../../atoms/Label/Label';
import { StyledFormElementLabel } from './FormElementLabel.sc';

export interface FormElementLabelProps {
    adornmentPosition?: AdornmentPosition;
    backgroundColor?: string;
    children?: ReactNode;
    className?: string;
    hasError?: boolean;
    isActive?: boolean;
    isDisabled?: boolean;
    isFocused?: boolean;
    isHovered?: boolean;
    isValid?: boolean;
    variant?: InputVariant;
}

export const FormElementLabel: FunctionComponent<FormElementLabelProps> = ({
    adornmentPosition = AdornmentPosition.LEFT,
    backgroundColor,
    children,
    className,
    hasError = false,
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
            adornmentPosition={adornmentPosition}
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

export default FormElementLabel;
