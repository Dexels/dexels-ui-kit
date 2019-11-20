import mapArrayToObject from '../../../utils/mapArrayToObject';
import PropTypes from 'prop-types';

const buttonObjectShape = PropTypes.shape({
    backgroundColor: {
        disabled: PropTypes.string.isRequired,
        hover: PropTypes.string.isRequired,
        hoverInverted: PropTypes.string.isRequired,
        inverted: PropTypes.string.isRequired,
        primary: PropTypes.string.isRequired,
    },
    color: {
        disabled: PropTypes.string.isRequired,
        hover: PropTypes.string.isRequired,
        hoverInverted: PropTypes.string.isRequired,
        inverted: PropTypes.string.isRequired,
        primary: PropTypes.string.isRequired,
    },
});

export const textStylePropTypes = PropTypes.shape({
    fontFamily: PropTypes.string.isRequired,
    fontSize: PropTypes.string.isRequired,
    fontWeight: PropTypes.string.isRequired,
    lineHeight: PropTypes.string.isRequired,
});

/* eslint-disable sort-keys */
export const themePropTypes = PropTypes.shape({
    shades: PropTypes.shape({
        one: PropTypes.string.isRequired,
        two: PropTypes.string.isRequired,
        three: PropTypes.string.isRequired,
        four: PropTypes.string.isRequired,
        five: PropTypes.string.isRequired,
        six: PropTypes.string.isRequired,
        seven: PropTypes.string.isRequired,
        eight: PropTypes.string.isRequired,
        nine: PropTypes.string.isRequired,
    }).isRequired,
    colorPrimary: PropTypes.string.isRequired,
    colorSecondary: PropTypes.string.isRequired,
    colorTertiary: PropTypes.string.isRequired,
    colorAlert: PropTypes.string.isRequired,
    colorInvalid: PropTypes.string.isRequired,
    colorValid: PropTypes.string.isRequired,
    colorText: PropTypes.shape({
        primary: PropTypes.string.isRequired,
        secondary: PropTypes.string.isRequired,
    }).isRequired,
    colorTextContrast: PropTypes.shape({
        primary: PropTypes.string.isRequired,
    }).isRequired,
    colorTextBody: PropTypes.shape({
        primary: PropTypes.string.isRequired,
        secondary: PropTypes.string.isRequired,
    }).isRequired,
    fontFamilyPrimary: PropTypes.string.isRequired,
    fontFamilySecondary: PropTypes.string.isRequired,
    background: PropTypes.shape({
        primary: PropTypes.string.isRequired,
        secondary: PropTypes.string.isRequired,
        tertiary: PropTypes.string.isRequired,
    }).isRequired,
    button: PropTypes.shape({
        filled: buttonObjectShape,
        outline: buttonObjectShape,
        textOnly: PropTypes.shape({
            disabled: PropTypes.string.isRequired,
            disabledInverted: PropTypes.string.isRequired,
            hover: PropTypes.string.isRequired,
            hoverInverted: PropTypes.string.isRequired,
            inverted: PropTypes.string.isRequired,
            primary: PropTypes.string.isRequired,
        }),
    }).isRequired,
    card: PropTypes.shape({
        backgroundColor: PropTypes.string.isRequired,
    }).isRequired,
    header: PropTypes.shape({
        backgroundColor: PropTypes.shape({
            primary: PropTypes.string.isRequired,
            secondary: PropTypes.string.isRequired,
        }),
    }).isRequired,
    table: PropTypes.shape({
        row: PropTypes.shape({
            backgroundColor: PropTypes.string.isRequired,
            backgroundColorAlt: PropTypes.string.isRequired,
        }),
    }).isRequired,
    spacingValue: PropTypes.number.isRequired,
    textStyles: PropTypes.shape({
        body1: textStylePropTypes.isRequired,
        body2: textStylePropTypes.isRequired,
        buttonLarge: textStylePropTypes.isRequired,
        buttonMedium: textStylePropTypes.isRequired,
        buttonSmall: textStylePropTypes.isRequired,
        caption: textStylePropTypes.isRequired,
        h1: textStylePropTypes.isRequired,
        h2: textStylePropTypes.isRequired,
        h3: textStylePropTypes.isRequired,
    }).isRequired,
    availableTextStyles: PropTypes.func.isRequired,
    spacing: PropTypes.func.isRequired,
    textStyling: PropTypes.func.isRequired,
});

export const themeBasic = {
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
    colorPrimary: '#3D4A9A',
    colorSecondary: '#009FFD',
    colorTertiary: '#80CFFE',
    colorAlert: '#EB6500',
    colorInvalid: '#F94E4E',
    colorValid: '#2DD67B',
    background: {},
    button: {},
    colorText: {},
    colorTextContrast: {},
    colorTextBody: {},
    fontFamilyPrimary: "'Open Sans', arial, sans-serif",
    fontFamilySecondary: "'Exo 2', sans-serif",
    spacingValue: 8,
    textStyles: {},
    availableTextStyles() {
        return mapArrayToObject(Object.keys(this.textStyles));
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
            throw Error('You should atleast pass one factor.');
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
            throw new Error(`${textStyleSelector} is not a valid text styling selector. Please use one the following: ${validTextStylingSelectors}`);
        }

        const textStyle = this.textStyles[textStyleSelector];

        return (`
            line-height: ${textStyle.lineHeight};
            font-family: ${textStyle.fontFamily};
            font-size: ${textStyle.fontSize};
            font-weight: ${textStyle.fontWeight};
        `);
    },
};

themeBasic.colorDisabled = themeBasic.shades.six;

themeBasic.colorTextContrast = {
    primary: themeBasic.shades.nine,
};

themeBasic.colorText = {
    primary: themeBasic.colorPrimary,
    secondary: themeBasic.colorSecondary,
};

themeBasic.colorTextBody = {
    primary: themeBasic.shades.one,
    secondary: themeBasic.shades.four,
};

themeBasic.background = {
    primary: themeBasic.shades.eight,
    secondary: themeBasic.shades.nine,
    tertiary: themeBasic.shades.eight,
};

themeBasic.button = {
    filled: {
        backgroundColor: {
            disabled: themeBasic.colorDisabled,
            hover: themeBasic.colorSecondary,
            hoverInverted: themeBasic.colorSecondary,
            inverted: themeBasic.shades.nine,
            primary: themeBasic.colorPrimary,
        },
        color: {
            disabled: themeBasic.shades.nine,
            hover: themeBasic.shades.nine,
            hoverInverted: themeBasic.shades.nine,
            inverted: themeBasic.colorPrimary,
            primary: themeBasic.shades.nine,
        },
    },
    outline: {
        backgroundColor: {
            disabled: themeBasic.colorDisabled,
            hover: themeBasic.colorSecondary,
            hoverInverted: themeBasic.colorSecondary,
            inverted: themeBasic.shades.nine,
            primary: themeBasic.colorPrimary,
        },
        color: {
            disabled: themeBasic.colorDisabled,
            hover: themeBasic.colorSecondary,
            hoverInverted: themeBasic.colorSecondary,
            inverted: themeBasic.shades.nine,
            primary: themeBasic.colorPrimary,
        },
    },
    textOnly: {
        disabled: themeBasic.colorDisabled,
        disabledInverted: themeBasic.shades.seven,
        hover: themeBasic.colorSecondary,
        hoverInverted: themeBasic.colorSecondary,
        inverted: themeBasic.shades.nine,
        primary: themeBasic.colorPrimary,
    },
};

themeBasic.card = {
    backgroundColor: themeBasic.shades.nine,
};

themeBasic.header = {
    backgroundColor: {
        primary: themeBasic.colorPrimary,
        secondary: themeBasic.shades.nine,
    },
};

themeBasic.table = {
    row: {
        backgroundColor: themeBasic.background.primary,
        backgroundColorAlt: themeBasic.shades.eight,
    },
};

themeBasic.textStyles.body1 = {
    fontFamily: themeBasic.fontFamilyPrimary,
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '22px',
};

themeBasic.textStyles.body2 = {
    fontFamily: themeBasic.fontFamilyPrimary,
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '18px',
};

themeBasic.textStyles.buttonLarge = {
    fontFamily: themeBasic.fontFamilySecondary,
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '22px',
};

themeBasic.textStyles.buttonMedium = {
    fontFamily: themeBasic.fontFamilySecondary,
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '22px',
};

themeBasic.textStyles.buttonSmall = {
    fontFamily: themeBasic.fontFamilySecondary,
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '22px',
};

themeBasic.textStyles.buttonXLarge = {
    fontFamily: themeBasic.fontFamilySecondary,
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '22px',
};

themeBasic.textStyles.caption = {
    fontFamily: themeBasic.fontFamilyPrimary,
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '16px',
};

themeBasic.textStyles.h1 = {
    fontFamily: themeBasic.fontFamilySecondary,
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: '34px',
};

themeBasic.textStyles.h2 = {
    fontFamily: themeBasic.fontFamilySecondary,
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '28px',
};

themeBasic.textStyles.h3 = {
    fontFamily: themeBasic.fontFamilySecondary,
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '24px',
};
