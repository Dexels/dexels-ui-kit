import { Theme, ThemeTextStylesMap } from '../../../types';
import mapArrayToObject from '../../../utils/mapArrayToObject';

/* eslint-disable sort-keys */
const shades = {
    one: '#002451',
    two: '#324F73',
    three: '#647B96',
    four: '#96A5B8',
    five: '#BFC8D3',
    six: '#E5E9ED',
    seven: '#F2F4F6',
    eight: '#FAFBFC',
    nine: '#FFFFFF',
};
/* eslint-enable sort-keys */

const background = {
    primary: shades.eight,
    secondary: shades.nine,
    tertiary: shades.eight,
};

const colorAlert = '#EB6500';
const colorDisabled = shades.six;
const colorInvalid = '#F94E4E';
const colorPrimary = '#3D4A9A';
const colorSecondary = '#009FFD';
const colorTertiary = '#80CFFE';
const colorValid = '#2DD67B';

const colorText = {
    primary: colorPrimary,
    secondary: colorSecondary,
};

const colorTextContrast = {
    primary: shades.nine,
};

const fontFamilyPrimary = "'Open Sans', arial, sans-serif";
const fontFamilySecondary = "'Exo 2', sans-serif";

const hover = {
    backgroundColor: background.primary,
};

/* eslint-disable sort-keys */
export const themeBasic: Theme = {
    card: {
        backgroundColor: shades.nine,
    },
    colorAlert,
    colorDisabled,
    colorInvalid,
    colorPrimary,
    colorSecondary,
    colorTertiary,
    colorValid,
    background,
    button: {
        filled: {
            backgroundColor: {
                disabled: colorDisabled,
                hover: colorSecondary,
                hoverInverted: colorSecondary,
                inverted: shades.nine,
                loader: colorTextContrast.primary,
                loaderInverted: colorText.primary,
                primary: colorPrimary,
            },
            color: {
                disabled: shades.nine,
                hover: shades.nine,
                hoverInverted: shades.nine,
                inverted: colorPrimary,
                primary: shades.nine,
            },
        },
        outline: {
            backgroundColor: {
                disabled: colorDisabled,
                hover: colorSecondary,
                hoverInverted: colorSecondary,
                inverted: shades.nine,
                loader: colorText.primary,
                loaderInverted: colorTextContrast.primary,
                primary: colorPrimary,
            },
            color: {
                disabled: colorDisabled,
                hover: colorSecondary,
                hoverInverted: colorSecondary,
                inverted: shades.nine,
                primary: colorPrimary,
            },
        },
        textOnly: {
            disabled: colorDisabled,
            disabledInverted: shades.seven,
            hover: colorSecondary,
            hoverInverted: colorSecondary,
            inverted: shades.nine,
            loader: shades.one,
            loaderInverted: shades.nine,
            primary: colorPrimary,
        },
    },
    colorText,
    colorTextBody: {
        primary: shades.one,
        secondary: shades.four,
    },
    colorTextContrast,
    datePicker: {
        backgroundColor: shades.nine,
        color: colorPrimary,
        day: {
            accent: colorPrimary,
            backgroundColor: shades.seven,
            color: shades.one,
            disabled: {
                backgroundColor: shades.eight,
                color: colorDisabled,
            },
            hover: {
                accent: colorSecondary,
                backgroundColor: colorPrimary,
                color: shades.nine,
            },
            selected: {
                backgroundColor: colorSecondary,
                color: shades.nine,
            },
            selectionLimit: {
                backgroundColor: colorSecondary,
                color: shades.nine,
            },
        },
    },
    fontFamilyPrimary,
    fontFamilySecondary,
    header: {
        backgroundColor: {
            primary: colorPrimary,
            secondary: shades.nine,
        },
    },
    hover,
    loader: {
        primary: colorText.primary,
        secondary: colorTextContrast.primary,
    },
    shades,
    spacingValue: 8,
    table: {
        row: {
            backgroundColorEven: hover.backgroundColor,
            backgroundColorOdd: shades.nine,
        },
    },
    textStyles: {
        body1: {
            fontFamily: fontFamilyPrimary,
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '22px',
        },
        body2: {
            fontFamily: fontFamilyPrimary,
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '18px',
        },
        buttonLarge: {
            fontFamily: fontFamilySecondary,
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '22px',
        },
        buttonMedium: {
            fontFamily: fontFamilySecondary,
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '22px',
        },
        buttonSmall: {
            fontFamily: fontFamilySecondary,
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '22px',
        },
        caption: {
            fontFamily: fontFamilyPrimary,
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '16px',
        },
        h1: {
            fontFamily: fontFamilySecondary,
            fontSize: '24px',
            fontWeight: '500',
            lineHeight: '34px',
        },
        h2: {
            fontFamily: fontFamilySecondary,
            fontSize: '20px',
            fontWeight: '500',
            lineHeight: '28px',
        },
        h3: {
            fontFamily: fontFamilySecondary,
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '24px',
        },
    },
    availableTextStyles() {
        return mapArrayToObject(Object.keys(this.textStyles)) as ThemeTextStylesMap;
    },
    spacing(factor1, factor2, factor3, factor4, ...rest) {
        let css = '';

        if (typeof this.spacingValue !== 'number') {
            throw Error(`The spacing value should a be number instead of a ${typeof this.spacingValue}`);
        }

        if (rest.length) {
            throw Error('The spacing function expects between one and four arguments.');
        }

        if (factor1 === undefined) {
            throw Error('You should pass at least one factor.');
        } else {
            css += `${this.spacingValue * factor1}px`;
        }

        if (factor2 !== undefined) {
            css += ` ${this.spacingValue * factor2}px`;
        }

        if (factor3 !== undefined) {
            css += ` ${this.spacingValue * factor3}px`;
        }

        if (factor4 !== undefined) {
            css += ` ${this.spacingValue * factor4}px`;
        }

        return css;
    },
    textStyling(textStyleSelector = 'body1') {
        const validTextStylingSelectors = Object.keys(this.textStyles);

        if (!validTextStylingSelectors.includes(textStyleSelector)) {
            throw new Error(
                `${textStyleSelector} is not a valid text styling selector. Please use one the following: ${validTextStylingSelectors}`
            );
        }

        const textStyle = this.textStyles[textStyleSelector];

        return `
            line-height: ${textStyle.lineHeight};
            font-family: ${textStyle.fontFamily};
            font-size: ${textStyle.fontSize};
            font-weight: ${textStyle.fontWeight};
        `;
    },
};
/* eslint-enable sort-keys */

export default themeBasic;
