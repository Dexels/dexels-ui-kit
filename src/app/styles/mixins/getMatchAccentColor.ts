import { Theme } from '../../types';

export const getMatchAccentColor = (
    fieldIndex: number,
    isPlannable: boolean,
    isSelected: boolean,
    theme: Theme
): string => {
    if (!isPlannable) {
        return isSelected
            ? `linear-gradient(90deg, ${theme.colorText.primary}, ${theme.colorText.primary} 8px, ${theme.colorText.secondary} 8px, ${theme.colorText.secondary})`
            : `linear-gradient(90deg, ${theme.colorText.primary}, ${theme.colorText.primary} 8px, ${theme.colorText.primary} 8px, ${theme.colorText.primary})`;
    }

    if (fieldIndex < 0) {
        return isSelected
            ? `linear-gradient(90deg, ${theme.colorAlert}, ${theme.colorAlert} 8px, ${theme.colorText.secondary} 8px, ${theme.colorText.secondary})`
            : `linear-gradient(90deg, ${theme.colorAlert}, ${theme.colorAlert} 8px, ${theme.colorText.primary} 8px, ${theme.colorText.primary})`;
    }

    return isSelected
        ? `linear-gradient(90deg, ${theme.colorText.secondary}, ${theme.colorText.secondary} 8px, ${theme.colorText.secondary} 8px, ${theme.colorText.secondary})`
        : `linear-gradient(90deg, ${theme.colorText.secondary}, ${theme.colorText.secondary} 8px, ${theme.colorText.primary} 8px, ${theme.colorText.primary})`;
};

export default getMatchAccentColor;
