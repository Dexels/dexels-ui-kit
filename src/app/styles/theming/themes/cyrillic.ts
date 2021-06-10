/* eslint-disable sort-keys */
import { createDuiTheme } from '../createDuiTheme';
import { Theme } from '../../../types';
import { themeBasicDefinition } from './basic';

const colorAlert = '#EB6500';
const colorInvalid = '#F94E4E';
const colorValid = '#2DD67B';
const fontFamilyPrimary = 'Cuprum, Arial, sans-serif';
const fontFamilySecondary = "'Fira Sans Condensed', Arial, sans-serif";

const themeCyrillicValues: Theme = createDuiTheme(themeBasicDefinition(fontFamilyPrimary, fontFamilySecondary), {
    shades: {
        one: '#647B96',
        two: '#324F73',
        three: '#647B96',
        four: '#96A5B8',
        five: '#BFC8D3',
        six: '#E5E9ED',
        seven: '#F2F4F6',
        eight: '#FAFBFC',
        nine: '#FFFFFF',
    },
    colorPrimary: '#647B96',
    colorSecondary: '#009FFD',
    colorTertiary: '#D6D6D6',
    colorAlert,
    colorInvalid,
    colorValid,
    fontFamilyPrimary,
    fontFamilySecondary,
});

/* eslint-disable sort-keys */
export const themeCyrillic: Theme = {
    ...themeCyrillicValues,

    colorDisabled: themeCyrillicValues.shades.seven,

    colorTextContrast: {
        primary: themeCyrillicValues.shades.nine,
    },

    colorText: {
        primary: themeCyrillicValues.colorPrimary,
        secondary: themeCyrillicValues.colorSecondary,
    },

    colorTextBody: {
        primary: themeCyrillicValues.shades.one,
        secondary: themeCyrillicValues.shades.three,
    },

    background: {
        primary: themeCyrillicValues.shades.nine,
        secondary: themeCyrillicValues.shades.eight,
        tertiary: themeCyrillicValues.shades.seven,
    },

    button: {
        filled: {
            backgroundColor: {
                disabled: themeCyrillicValues.colorDisabled,
                hover: themeCyrillicValues.shades.four,
                hoverInverted: themeCyrillicValues.colorSecondary,
                inverted: themeCyrillicValues.shades.nine,
                loader: themeCyrillicValues.colorTextContrast.primary,
                loaderInverted: themeCyrillicValues.colorText.primary,
                primary: themeCyrillicValues.colorPrimary,
            },
            color: {
                disabled: themeCyrillicValues.shades.nine,
                hover: themeCyrillicValues.shades.nine,
                hoverInverted: themeCyrillicValues.shades.nine,
                inverted: themeCyrillicValues.colorPrimary,
                primary: themeCyrillicValues.shades.nine,
            },
        },
        outline: {
            backgroundColor: {
                disabled: themeCyrillicValues.colorDisabled,
                hover: themeCyrillicValues.shades.four,
                hoverInverted: themeCyrillicValues.colorSecondary,
                inverted: themeCyrillicValues.shades.nine,
                loader: themeCyrillicValues.colorText.primary,
                loaderInverted: themeCyrillicValues.colorTextContrast.primary,
                primary: themeCyrillicValues.colorPrimary,
            },
            color: {
                disabled: themeCyrillicValues.colorDisabled,
                hover: themeCyrillicValues.shades.four,
                hoverInverted: themeCyrillicValues.colorSecondary,
                inverted: themeCyrillicValues.shades.nine,
                primary: themeCyrillicValues.colorPrimary,
            },
        },
        textOnly: {
            disabled: themeCyrillicValues.colorDisabled,
            disabledInverted: themeCyrillicValues.shades.four,
            hover: themeCyrillicValues.shades.four,
            hoverInverted: themeCyrillicValues.colorSecondary,
            inverted: themeCyrillicValues.shades.nine,
            loader: themeCyrillicValues.shades.one,
            loaderInverted: themeCyrillicValues.shades.nine,
            primary: themeCyrillicValues.colorPrimary,
        },
    },

    card: {
        backgroundColor: themeCyrillicValues.shades.nine,
    },

    datePicker: {
        backgroundColor: themeCyrillicValues.shades.nine,
        color: themeCyrillicValues.colorPrimary,
        day: {
            accent: themeCyrillicValues.colorPrimary,
            backgroundColor: themeCyrillicValues.shades.seven,
            color: themeCyrillicValues.shades.one,
            disabled: {
                backgroundColor: themeCyrillicValues.shades.eight,
                color: themeCyrillicValues.colorDisabled,
            },
            hover: {
                accent: themeCyrillicValues.colorSecondary,
                backgroundColor: themeCyrillicValues.colorPrimary,
                color: themeCyrillicValues.shades.nine,
            },
            selected: {
                backgroundColor: themeCyrillicValues.colorSecondary,
                color: themeCyrillicValues.shades.nine,
            },
            selectionLimit: {
                backgroundColor: themeCyrillicValues.colorSecondary,
                color: themeCyrillicValues.shades.nine,
            },
        },
    },

    header: {
        backgroundColor: {
            primary: themeCyrillicValues.colorPrimary,
            secondary: themeCyrillicValues.shades.nine,
        },
    },

    hover: {
        backgroundColor: themeCyrillicValues.colorTertiary,
    },

    loader: {
        primary: themeCyrillicValues.colorText.primary,
        secondary: themeCyrillicValues.colorTextContrast.primary,
    },

    table: {
        footer: {
            backgroundColor: themeCyrillicValues.shades.seven,
        },
        row: {
            backgroundColorEven: themeCyrillicValues.hover.backgroundColor,
            backgroundColorOdd: themeCyrillicValues.shades.nine,
            borderColorRowSelector: themeCyrillicValues.shades.five,
            borderColorRowSelectorDisabled: themeCyrillicValues.shades.six,
        },
    },
};
/* eslint-enable */
