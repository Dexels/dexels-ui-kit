import { createDuiTheme } from '../createDuiTheme';
import { Theme } from '../../../types';
import { themeBasic } from './basic';

/* Some additional colors for the dark theme */
const colorHeaderPrimary = '#002451';
const colorHeaderSecondary = '#647B96';
const colorShadeTen = '#333';
const colorShadeEleven = '#222';

/* eslint-disable sort-keys */
export const themeDark: Theme = createDuiTheme(themeBasic, {
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
            loader: themeDark.shades.one,
            loaderInverted: themeDark.shades.eight,
            primary: colorHeaderPrimary,
        },
        color: {
            disabled: themeDark.shades.two,
            hover: themeDark.shades.one,
            hoverInverted: themeDark.shades.one,
            inverted: colorHeaderPrimary,
            primary: themeDark.colorPrimary,
        },
    },
    outline: {
        backgroundColor: {
            disabled: colorShadeTen,
            hover: themeDark.colorSecondary,
            hoverInverted: themeDark.colorSecondary,
            inverted: themeDark.colorPrimary,
            loader: themeDark.colorPrimary,
            loaderInverted: themeDark.colorPrimary,
            primary: themeDark.colorPrimary,
        },
        color: {
            disabled: colorShadeTen,
            hover: themeDark.colorSecondary,
            hoverInverted: themeDark.colorSecondary,
            inverted: themeDark.colorPrimary,
            primary: themeDark.colorPrimary,
        },
    },
    textOnly: {
        disabled: colorShadeTen,
        disabledInverted: themeDark.shades.two,
        hover: themeDark.colorSecondary,
        hoverInverted: themeDark.colorSecondary,
        inverted: themeDark.colorPrimary,
        loader: themeDark.colorPrimary,
        loaderInverted: themeDark.colorPrimary,
        primary: themeDark.colorPrimary,
    },
};

themeDark.card = {
    backgroundColor: colorShadeEleven,
};

themeDark.datePicker = {
    backgroundColor: colorShadeEleven,
    color: themeDark.colorPrimary,
    day: {
        accent: themeDark.colorPrimary,
        backgroundColor: themeDark.shades.seven,
        color: themeDark.colorText.primary,
        disabled: {
            backgroundColor: themeDark.shades.eight,
            color: colorShadeTen,
        },
        hover: {
            accent: themeDark.colorSecondary,
            backgroundColor: colorHeaderSecondary,
            color: themeDark.colorText.primary,
        },
        selected: {
            backgroundColor: themeDark.colorSecondary,
            color: themeDark.colorText.primary,
        },
        selectionLimit: {
            backgroundColor: themeDark.colorSecondary,
            color: themeDark.colorText.primary,
        },
    },
};

themeDark.header = {
    backgroundColor: {
        primary: colorHeaderPrimary,
        secondary: colorHeaderSecondary,
    },
};

themeDark.hover = {
    backgroundColor: themeDark.shades.seven,
};

themeDark.loader = {
    primary: themeDark.colorText.primary,
    secondary: themeDark.colorTextContrast.primary,
};

themeDark.table = {
    footer: {
        backgroundColor: themeDark.shades.seven,
    },
    row: {
        backgroundColorOdd: colorShadeEleven,
        backgroundColorEven: themeDark.hover.backgroundColor,
    },
};

export default themeDark;
