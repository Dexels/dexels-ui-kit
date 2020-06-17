import { Theme } from '../../types';

export const getColorsFromTheme = (theme: Theme, colorKeys: string[]): { [key: string]: string } => {
    const colors: { [key: string]: string } = {};

    colorKeys.forEach((colorKey) => {
        if (typeof theme[colorKey] === 'object') {
            Object.keys(theme[colorKey]).forEach((colorName) => {
                colors[`${colorKey}-${colorName}`] = theme[colorKey][colorName] as string;
            });
        } else {
            colors[colorKey] = theme[colorKey] as string;
        }
    });

    return colors;
};

export default getColorsFromTheme;
