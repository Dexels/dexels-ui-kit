import mapArrayToObject from '../../../utils/mapArrayToObject';
// This is how the colors are being called in the design:
// black = #000000
// blue10 = #DFF3FE
// blue25 = #BFE7FE
// blue50 = #80CFFE
// blue100 = #009FFD
// purple50 = #9BA1C9
// purple100 = #3D4A9A
// green = #2DD67B
// orange = #EB6500
// red = #F94E4E
// sl2 = #FAFBFC
// sl5 = #F2F4F6
// sl10 = #E5E9ED
// sl25 = #BFC8D3
// sl50 = #7F91A8
// sl75 = #3F5A7C
// sl100 = #002451
// white = #FFFFFF

/* eslint-disable sort-keys */
const themeBasic = {
    colorPrimary: {
        dark: '#3D4A9A',
        main: '#9BA1C9',
    },
    colorSecondary: {
        dark: '#009FFD',
        main: '#80CFFE',
        light: '#BFE7FE',
    },
    colorDisabled: {
        main: '#E5E9ED',
    },
    colorError: {
        main: '#F94E4E',
    },
    colorValid: {
        main: '#2DD67B',
    },
    colorWarning: {
        main: '#EB6500',
    },
    colorDark: {
        dark: '#000000',
        main: '#002451',
        light: '#3F5A7C',
    },
    colorMedium: {
        dark: '#7F91A8',
        main: '#BFC8D3',
        light: '#E5E9ED', // @TODO discuss this with Marrick since this is the same color as the colorDisabled.main
    },
    colorLight: {
        dark: '#F2F4F6',
        main: '#FAFBFC',
        light: '#FFFFFF',
    },
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
