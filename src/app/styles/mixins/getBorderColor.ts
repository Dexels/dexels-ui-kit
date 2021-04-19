import { Theme } from '../../types';

export const getBorderColor = ({
    hasError = false,
    isDisabled = false,
    isFocused = false,
    isHovered = false,
    isValid = false,
    defaultColor,
    theme,
}: {
    defaultColor?: string;
    hasError?: boolean;
    isDisabled?: boolean;
    isFocused?: boolean;
    isHovered?: boolean;
    isValid?: boolean;
    theme: Theme;
}): string => {
    if (hasError) {
        return theme.colorInvalid;
    }

    if (isDisabled) {
        return theme.colorDisabled;
    }

    if (isFocused) {
        return theme.colorSecondary;
    }

    if (isHovered) {
        return theme.colorSecondary;
    }

    if (isValid) {
        return theme.colorValid;
    }

    return defaultColor || theme.colorPrimary;
};
