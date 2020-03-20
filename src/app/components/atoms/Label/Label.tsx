import React, { FunctionComponent, ReactNode } from 'react';
import { StyledLabel } from './Label.sc';

export interface LabelProps {
    children?: ReactNode;
    className?: string;
    hasError?: boolean;
    isActive?: boolean;
    isCheckboxLabel?: boolean;
    isDisabled?: boolean;
    isFocused?: boolean;
    isHovered?: boolean;
    isSmall?: boolean;
    isTruncatable?: boolean;
    isValid?: boolean;
}

export const Label: FunctionComponent<LabelProps> = ({
    children,
    className,
    hasError = false,
    isActive = false,
    isCheckboxLabel = false,
    isDisabled = false,
    isFocused = false,
    isHovered = false,
    isSmall = false,
    isTruncatable = false,
    isValid = false,
}) => (
    <StyledLabel
        className={className}
        hasError={hasError}
        isActive={isActive}
        isCheckboxLabel={isCheckboxLabel}
        isDisabled={isDisabled}
        isFocused={isFocused}
        isHovered={isHovered}
        isSmall={isSmall}
        isTruncatable={isTruncatable}
        isValid={isValid}
    >
        {children}
    </StyledLabel>
);

export default Label;
