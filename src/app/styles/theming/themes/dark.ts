import { themeBasic, themeBasicDefinition } from './basic';
import { createDuiTheme } from '../createDuiTheme';
import { Theme } from '../../../types';

/* Some additional colors for the dark theme */
const colorHeaderPrimary = '#002451';
const colorHeaderSecondary = '#647B96';
const colorShadeTen = '#333';
const colorShadeEleven = '#222';

/* eslint-disable sort-keys */
// Fetch the temporary values for further overriding
const themeDarkValues = createDuiTheme(
    themeBasicDefinition(themeBasic.fontFamilyPrimary, themeBasic.fontFamilySecondary),
    {
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
    }
);

export const themeDark: Theme = {
    ...themeDarkValues,

    colorDisabled: themeDarkValues.shades.five,

    colorTextContrast: {
        primary: themeDarkValues.shades.one,
    },

    colorText: {
        primary: themeDarkValues.colorPrimary,
        secondary: themeDarkValues.colorSecondary,
    },

    colorTextBody: {
        primary: themeDarkValues.shades.one,
        secondary: themeDarkValues.shades.three,
    },

    background: {
        primary: themeDarkValues.shades.eight,
        secondary: themeDarkValues.shades.nine,
        tertiary: themeDarkValues.shades.eight,
    },

    button: {
        filled: {
            backgroundColor: {
                disabled: themeDarkValues.colorDisabled,
                hover: themeDarkValues.colorSecondary,
                hoverInverted: themeDarkValues.colorSecondary,
                inverted: themeDarkValues.colorPrimary,
                loader: themeDarkValues.shades.one,
                loaderInverted: themeDarkValues.shades.eight,
                primary: colorHeaderPrimary,
            },
            color: {
                disabled: themeDarkValues.shades.two,
                hover: themeDarkValues.shades.one,
                hoverInverted: themeDarkValues.shades.one,
                inverted: colorHeaderPrimary,
                primary: themeDarkValues.colorPrimary,
            },
        },
        outline: {
            backgroundColor: {
                disabled: colorShadeTen,
                hover: themeDarkValues.colorSecondary,
                hoverInverted: themeDarkValues.colorSecondary,
                inverted: themeDarkValues.colorPrimary,
                loader: themeDarkValues.colorPrimary,
                loaderInverted: themeDarkValues.colorPrimary,
                primary: themeDarkValues.colorPrimary,
            },
            color: {
                disabled: colorShadeTen,
                hover: themeDarkValues.colorSecondary,
                hoverInverted: themeDarkValues.colorSecondary,
                inverted: themeDarkValues.colorPrimary,
                primary: themeDarkValues.colorPrimary,
            },
        },
        textOnly: {
            disabled: colorShadeTen,
            disabledInverted: themeDarkValues.shades.two,
            hover: themeDarkValues.colorSecondary,
            hoverInverted: themeDarkValues.colorSecondary,
            inverted: themeDarkValues.colorPrimary,
            loader: themeDarkValues.colorPrimary,
            loaderInverted: themeDarkValues.colorPrimary,
            primary: themeDarkValues.colorPrimary,
        },
    },

    card: {
        backgroundColor: colorShadeEleven,
    },

    datePicker: {
        backgroundColor: colorShadeEleven,
        color: themeDarkValues.colorPrimary,
        day: {
            accent: themeDarkValues.colorPrimary,
            backgroundColor: themeDarkValues.shades.seven,
            color: themeDarkValues.colorText.primary,
            disabled: {
                backgroundColor: themeDarkValues.shades.eight,
                color: colorShadeTen,
            },
            hover: {
                accent: themeDarkValues.colorSecondary,
                backgroundColor: colorHeaderSecondary,
                color: themeDarkValues.colorText.primary,
            },
            selected: {
                backgroundColor: themeDarkValues.colorSecondary,
                color: themeDarkValues.colorText.primary,
            },
            selectionLimit: {
                backgroundColor: themeDarkValues.colorSecondary,
                color: themeDarkValues.colorText.primary,
            },
        },
    },

    header: {
        backgroundColor: {
            primary: colorHeaderPrimary,
            secondary: colorHeaderSecondary,
        },
    },

    hover: {
        backgroundColor: themeDarkValues.shades.seven,
    },

    loader: {
        primary: themeDarkValues.colorText.primary,
        secondary: themeDarkValues.colorTextContrast.primary,
    },

    table: {
        footer: {
            backgroundColor: themeDarkValues.shades.seven,
        },
        row: {
            backgroundColorOdd: colorShadeEleven,
            backgroundColorEven: themeDarkValues.hover.backgroundColor,
        },
    },
};
