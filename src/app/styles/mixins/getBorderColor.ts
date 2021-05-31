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

    if (isValid) {
        return theme.colorValid;
    }

    if (isDisabled) {
        return theme.colorDisabled;
    }

    if (isFocused || isHovered) {
        return theme.colorSecondary;
    }

    return defaultColor || theme.colorPrimary;
};
