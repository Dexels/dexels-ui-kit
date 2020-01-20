import React from 'react';
import { StyledLabel } from './Label.sc';

export interface LabelProps {
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

export const Label: React.FunctionComponent<LabelProps> = ({
    children,
    className,
    hasError,
    isActive,
    isCheckboxLabel,
    isDisabled,
    isFocused,
    isHovered,
    isSmall,
    isTruncatable,
    isValid,
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

Label.defaultProps = {
    className: '',
    hasError: false,
    isActive: false,
    isCheckboxLabel: false,
    isDisabled: false,
    isFocused: false,
    isHovered: false,
    isSmall: false,
    isTruncatable: false,
    isValid: false,
};

export default Label;
