import mapArrayToObject from '../../../utils/mapArrayToObject';

/* eslint-disable sort-keys */
const themeBasic = {
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
    colorError: '#F94E4E',
    colorValid: '#2DD67B',
    colorWarning: '#EB6500',
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

themeBasic.background = {
    primary: themeBasic.shades.eight,
};

themeBasic.colorDisabled = themeBasic.shades.six;

themeBasic.colorContrastText = {
    primary: themeBasic.shades.nine,
};

themeBasic.colorHeaderText = {
    primary: themeBasic.colorPrimary,
    secondary: themeBasic.colorSecondary,
};

themeBasic.colorBodyText = {
    primary: themeBasic.shades.one,
    secondary: themeBasic.shades.four,
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

export default themeBasic;
