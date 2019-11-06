import mapArrayToObject from '../../../utils/mapArrayToObject';
import PropTypes from 'prop-types';

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
    background: PropTypes.shape({
        primary: PropTypes.string.isRequired,
    }).isRequired,
    colorContrastText: PropTypes.shape({
        primary: PropTypes.string.isRequired,
    }).isRequired,
    colorHeaderText: PropTypes.shape({
        primary: PropTypes.string.isRequired,
        secondary: PropTypes.string.isRequired,
    }).isRequired,
    colorBodyText: PropTypes.shape({
        primary: PropTypes.string.isRequired,
        secondary: PropTypes.string.isRequired,
    }).isRequired,
    fontFamilyPrimary: PropTypes.string.isRequired,
    fontFamilySecondary: PropTypes.string.isRequired,
    spacingValue: PropTypes.string.isRequired,
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

export const basicTheme = {
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
    colorContrastText: {},
    colorHeaderText: {},
    colorBodyText: {},
    fontFamilyPrimary: "'Open Sans', arial, sans-serif",
    fontFamilySecondary: "'Exo 2', sans-serif",
    spacingValue: '8px',
    textStyles: {},
    availableTextStyles() {
        return mapArrayToObject(Object.keys(this.textStyles));
    },
    spacing(factor1, factor2, factor3, factor4, ...rest) {
        const [spacing, unit] = this.spacingValue.match(/[a-z]+|[^a-z]+/gi);
        let css = '';

        if (rest.length) {
            throw Error('The spacing function excepts between one and four arguments.');
        }

        if (factor1 === undefined) {
            throw Error('You should atleast require one factor.');
        } else {
            css += `${spacing * factor1}${unit}`;
        }

        if (factor2 !== undefined) {
            css += ` ${spacing * factor2}${unit}`;
        }

        if (factor3 !== undefined) {
            css += ` ${spacing * factor3}${unit}`;
        }

        if (factor4 !== undefined) {
            css += ` ${spacing * factor4}${unit}`;
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

basicTheme.background = {
    primary: basicTheme.shades.eight,
};

basicTheme.colorDisabled = basicTheme.shades.six;

basicTheme.colorContrastText = {
    primary: basicTheme.shades.nine,
};

basicTheme.colorHeaderText = {
    primary: basicTheme.colorPrimary,
    secondary: basicTheme.colorSecondary,
};

basicTheme.colorBodyText = {
    primary: basicTheme.shades.one,
    secondary: basicTheme.shades.four,
};

basicTheme.textStyles.body1 = {
    fontFamily: basicTheme.fontFamilyPrimary,
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '22px',
};

basicTheme.textStyles.body2 = {
    fontFamily: basicTheme.fontFamilyPrimary,
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '18px',
};

basicTheme.textStyles.buttonLarge = {
    fontFamily: basicTheme.fontFamilySecondary,
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '22px',
};

basicTheme.textStyles.buttonMedium = {
    fontFamily: basicTheme.fontFamilySecondary,
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '22px',
};

basicTheme.textStyles.buttonSmall = {
    fontFamily: basicTheme.fontFamilySecondary,
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '22px',
};

basicTheme.textStyles.caption = {
    fontFamily: basicTheme.fontFamilyPrimary,
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '16px',
};

basicTheme.textStyles.h1 = {
    fontFamily: basicTheme.fontFamilySecondary,
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: '34px',
};

basicTheme.textStyles.h2 = {
    fontFamily: basicTheme.fontFamilySecondary,
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '28px',
};

basicTheme.textStyles.h3 = {
    fontFamily: basicTheme.fontFamilySecondary,
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '24px',
};
