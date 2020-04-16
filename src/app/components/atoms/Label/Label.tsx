import React, { FunctionComponent, ReactNode } from 'react';
import { StyledLabel } from './Label.sc';

export interface LabelProps {
    children?: ReactNode;
    className?: string;
    hasError?: boolean;
    isActive?: boolean;
    isDisabled?: boolean;
    isFocused?: boolean;
    isHovered?: boolean;
    isSelectionControlLabel?: boolean;
    isSmall?: boolean;
    isTruncatable?: boolean;
    isValid?: boolean;
}

export const Label: FunctionComponent<LabelProps> = ({
    children,
    className,
    hasError = false,
    isActive = false,
    isDisabled = false,
    isFocused = false,
    isHovered = false,
    isSelectionControlLabel = false,
    isSmall = false,
    isTruncatable = false,
    isValid = false,
}) => (
    <StyledLabel
        className={className}
        hasError={hasError}
        isActive={isActive}
        isDisabled={isDisabled}
        isFocused={isFocused}
        isHovered={isHovered}
        isSelectionControlLabel={isSelectionControlLabel}
        isSmall={isSmall}
        isTruncatable={isTruncatable}
        isValid={isValid}
    >
        {children}
    </StyledLabel>
);

export default Label;
