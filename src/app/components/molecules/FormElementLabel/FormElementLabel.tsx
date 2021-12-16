import { AdornmentPosition, InputVariant } from '../../../types';
import React, { FunctionComponent, ReactNode } from 'react';
import Label from '../../atoms/Label/Label';
import RequiredIndicator from '../../atoms/RequiredIndicator/RequiredIndicator';
import { StyledFormElementLabel } from './FormElementLabel.sc';

export interface FormElementLabelProps {
    adornmentPosition?: AdornmentPosition;
    backgroundColor?: string;
    children?: ReactNode;
    className?: string;
    hasAdornment?: boolean;
    hasError?: boolean;
    isActive?: boolean;
    isDisabled?: boolean;
    isFocused?: boolean;
    isHovered?: boolean;
    isRequired?: boolean;
    isValid?: boolean;
    variant?: InputVariant;
}

export const FormElementLabel: FunctionComponent<FormElementLabelProps> = ({
    adornmentPosition = AdornmentPosition.LEFT,
    backgroundColor,
    children,
    className,
    hasAdornment = false,
    hasError = false,
    isActive = true,
    isDisabled = false,
    isFocused = false,
    isHovered = false,
    isRequired = false,
    isValid = false,
    variant = InputVariant.OUTLINE,
}) => {
    const isSmall = isActive || isFocused;

    return (
        <StyledFormElementLabel
            adornmentPosition={adornmentPosition}
            backgroundColor={backgroundColor}
            className={className}
            hasAdornment={hasAdornment}
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
                {isRequired && <RequiredIndicator isDisabled={isDisabled} />}
            </Label>
        </StyledFormElementLabel>
    );
};

export default FormElementLabel;
