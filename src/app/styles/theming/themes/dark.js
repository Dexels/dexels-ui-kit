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

themeDark.background = {
    primary: themeDark.shades.eight,
    secondary: themeDark.shades.nine,
    tertiary: themeDark.shades.eight,
};

themeDark.button = {
    filled: {
        backgroundColor: {
            disabled: themeDark.colorDisabled,
            hover: themeDark.colorSecondary,
            hoverInverted: themeDark.colorSecondary,
            inverted: themeDark.colorPrimary,
            primary: '#002451',
        },
        color: {
            disabled: themeDark.shades.two,
            hover: themeDark.shades.one,
            hoverInverted: themeDark.shades.one,
            inverted: '#002451',
            primary: themeDark.colorPrimary,
        },
    },
    outline: {
        backgroundColor: {
            disabled: themeDark.colorDisabled,
            hover: themeDark.colorSecondary,
            hoverInverted: themeDark.colorSecondary,
            inverted: themeDark.shades.nine,
            primary: themeDark.colorPrimary,
        },
        color: {
            disabled: themeDark.colorDisabled,
            hover: themeDark.colorSecondary,
            hoverInverted: themeDark.colorSecondary,
            inverted: themeDark.shades.nine,
            primary: themeDark.colorPrimary,
        },
    },
    textOnly: {
        disabled: themeDark.colorDisabled,
        disabledInverted: themeDark.shades.seven,
        hover: themeDark.colorSecondary,
        hoverInverted: themeDark.colorSecondary,
        inverted: themeDark.shades.nine,
        primary: themeDark.colorPrimary,
    },
};

themeDark.card = {
    backgroundColor: '#222',
};

themeDark.header = {
    backgroundColor: {
        primary: '#002451',
        secondary: '#647B96',
    },
};

themeDark.table = {
    row: {
        backgroundColor: '#222',
        backgroundColorAlt: themeDark.shades.seven,
    },
};

export default themeDark;
