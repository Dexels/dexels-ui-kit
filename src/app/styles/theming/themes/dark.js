import createDuiTheme from '../createDuiTheme';
import { themeBasic } from './basic';

/* eslint-disable */
export const themeDark = createDuiTheme(themeBasic, {
    shades: {
        one: '#FFFFFF',
        two: '#888',
        three: '#777',
        four: '#666',
        five: '#555',
        six: '#444',
        seven: '#333',
        eight: '#222',
        nine: '#111',
    },
    colorPrimary: '#FFFFFF',
    colorSecondary: '#009FFD',
    colorTertiary: '#80CFFE',
});

themeDark.background = {
    primary: themeDark.shades.eight,
    secondary: themeDark.shades.nine,
    tertiary: themeDark.shades.eight,
};

themeDark.button = {
    color: {
        primary: themeDark.shades.nine,
        secondary: themeDark.shades.one,
        tertiary: themeDark.colorSecondary,
    },
    backgroundColor: {
        primary: themeDark.colorPrimary,
        secondary: themeDark.shades.nine,
        tertiary: themeDark.colorSecondary,
    },
};

themeDark.colorDisabled = themeDark.shades.six;

themeDark.colorTextContrast = {
    primary: themeDark.shades.nine,
};

themeDark.colorText = {
    primary: themeDark.colorPrimary,
    secondary: themeDark.colorSecondary,
};

themeDark.colorTextBody = {
    primary: themeDark.shades.one,
    secondary: themeDark.shades.four,
};

export default themeDark;
