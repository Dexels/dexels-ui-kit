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
        seven: '#191919',
        eight: '#050505',
        nine: '#000000',
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
        secondary: themeDark.shades.nine,
        tertiary: themeDark.colorSecondary,
    },
    backgroundColor: {
        primary: themeDark.colorPrimary,
        secondary: themeDark.colorPrimary,
        tertiary: themeDark.colorSecondary,
    },
};

themeDark.card = {
    backgroundColor: '#222',
};

themeDark.colorDisabled = themeDark.shades.six;

themeDark.colorTextContrast = {
    primary: themeDark.shades.one,
};

themeDark.colorText = {
    primary: themeDark.colorPrimary,
    secondary: themeDark.colorSecondary,
};

themeDark.colorTextBody = {
    primary: themeDark.shades.one,
    secondary: themeDark.shades.four,
};

themeDark.header = {
    backgroundColor: {
        primary: '#002451',
        secondary: '#647B96',
    },
};

export default themeDark;
