import { createDuiTheme } from '../createDuiTheme';
import { themeBasic } from './basic';

/* eslint-disable sort-keys */
const themeTemp = createDuiTheme(themeBasic, {
    shades: {
        one: '#002451',
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
    colorSecondary: '#C2C2C2',
    colorTertiary: '#D6D6D6',
    colorAlert: '#EB6500',
    colorInvalid: '#F94E4E',
    colorValid: '#2DD67B',
    spacingValue: 8,
    fontFamilyPrimary: 'Cuprum, Arial, sans-serif',
    fontFamilySecondary: "'Fira Sans Extra Condensed', Arial, sans-serif",
});

export const themeCyrillic = {
    ...themeTemp,
};
/* eslint-enable */

export default themeCyrillic;

themeCyrillic.colorDisabled = themeCyrillic.shades.seven;

themeCyrillic.colorTextContrast = {
    primary: themeCyrillic.shades.nine,
};

themeCyrillic.colorText = {
    primary: themeCyrillic.colorPrimary,
    secondary: themeCyrillic.colorSecondary,
};

themeCyrillic.colorTextBody = {
    primary: themeCyrillic.shades.one,
    secondary: themeCyrillic.shades.four,
};

themeCyrillic.background = {
    primary: themeCyrillic.shades.nine,
    secondary: themeCyrillic.shades.eight,
    tertiary: themeCyrillic.shades.seven,
};

themeCyrillic.button = {
    filled: {
        backgroundColor: {
            disabled: themeCyrillic.colorDisabled,
            hover: themeCyrillic.shades.four,
            hoverInverted: themeCyrillic.colorSecondary,
            inverted: themeCyrillic.shades.nine,
            loader: themeCyrillic.colorTextContrast.primary,
            loaderInverted: themeCyrillic.colorText.primary,
            primary: themeCyrillic.colorPrimary,
        },
        color: {
            disabled: themeCyrillic.shades.nine,
            hover: themeCyrillic.shades.nine,
            hoverInverted: themeCyrillic.shades.nine,
            inverted: themeCyrillic.colorPrimary,
            primary: themeCyrillic.shades.nine,
        },
    },
    outline: {
        backgroundColor: {
            disabled: themeCyrillic.colorDisabled,
            hover: themeCyrillic.shades.four,
            hoverInverted: themeCyrillic.colorSecondary,
            inverted: themeCyrillic.shades.nine,
            loader: themeCyrillic.colorText.primary,
            loaderInverted: themeCyrillic.colorTextContrast.primary,
            primary: themeCyrillic.colorPrimary,
        },
        color: {
            disabled: themeCyrillic.colorDisabled,
            hover: themeCyrillic.shades.four,
            hoverInverted: themeCyrillic.colorSecondary,
            inverted: themeCyrillic.shades.nine,
            primary: themeCyrillic.colorPrimary,
        },
    },
    textOnly: {
        disabled: themeCyrillic.colorDisabled,
        disabledInverted: themeCyrillic.shades.four,
        hover: themeCyrillic.shades.four,
        hoverInverted: themeCyrillic.colorSecondary,
        inverted: themeCyrillic.shades.nine,
        loader: themeCyrillic.shades.one,
        loaderInverted: themeCyrillic.shades.nine,
        primary: themeCyrillic.colorPrimary,
    },
};

themeCyrillic.card = {
    backgroundColor: themeCyrillic.shades.nine,
};

themeCyrillic.datePicker = {
    backgroundColor: themeCyrillic.shades.nine,
    color: themeCyrillic.colorPrimary,
    day: {
        accent: themeCyrillic.colorPrimary,
        backgroundColor: themeCyrillic.shades.seven,
        color: themeCyrillic.shades.one,
        disabled: {
            backgroundColor: themeCyrillic.shades.eight,
            color: themeCyrillic.colorDisabled,
        },
        hover: {
            accent: themeCyrillic.colorSecondary,
            backgroundColor: themeCyrillic.colorPrimary,
            color: themeCyrillic.shades.nine,
        },
        selected: {
            backgroundColor: themeCyrillic.colorSecondary,
            color: themeCyrillic.shades.nine,
        },
        selectionLimit: {
            backgroundColor: themeCyrillic.colorSecondary,
            color: themeCyrillic.shades.nine,
        },
    },
};

themeCyrillic.header = {
    backgroundColor: {
        primary: themeCyrillic.colorPrimary,
        secondary: themeCyrillic.shades.nine,
    },
};

themeCyrillic.hover = {
    backgroundColor: themeCyrillic.colorTertiary,
};

themeCyrillic.loader = {
    primary: themeCyrillic.colorText.primary,
    secondary: themeCyrillic.colorTextContrast.primary,
};

themeCyrillic.table = {
    footer: {
        backgroundColor: themeCyrillic.shades.seven,
    },
    row: {
        backgroundColorEven: themeCyrillic.hover.backgroundColor,
        backgroundColorOdd: themeCyrillic.shades.nine,
    },
};

themeCyrillic.textStyles.body1 = {
    fontFamily: themeCyrillic.fontFamilyPrimary,
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '22px',
};

themeCyrillic.textStyles.body2 = {
    fontFamily: themeCyrillic.fontFamilyPrimary,
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '18px',
};

themeCyrillic.textStyles.buttonLarge = {
    fontFamily: themeCyrillic.fontFamilySecondary,
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '22px',
};

themeCyrillic.textStyles.buttonMedium = {
    fontFamily: themeCyrillic.fontFamilySecondary,
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '22px',
};

themeCyrillic.textStyles.buttonSmall = {
    fontFamily: themeCyrillic.fontFamilySecondary,
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '22px',
};

themeCyrillic.textStyles.caption = {
    fontFamily: themeCyrillic.fontFamilyPrimary,
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '16px',
};

themeCyrillic.textStyles.h1 = {
    fontFamily: themeCyrillic.fontFamilySecondary,
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: '34px',
};

themeCyrillic.textStyles.h2 = {
    fontFamily: themeCyrillic.fontFamilySecondary,
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '28px',
};

themeCyrillic.textStyles.h3 = {
    fontFamily: themeCyrillic.fontFamilySecondary,
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '24px',
};
