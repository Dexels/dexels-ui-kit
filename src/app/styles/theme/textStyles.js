import { FONT_FAMILY_PRIMARY, FONT_FAMILY_SECONDARY } from '../../utils/constants';
import { css } from 'styled-components';
import mapArrayToObject from '../../utils/mapArrayToObject';

export const textStyles = ({
    body1: {
        fontFamily: FONT_FAMILY_PRIMARY,
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '22px',
    },
    body2: {
        fontFamily: FONT_FAMILY_PRIMARY,
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '18px',
    },
    buttonLarge: {
        fontFamily: FONT_FAMILY_SECONDARY,
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '22px',
    },
    buttonMedium: {
        fontFamily: FONT_FAMILY_SECONDARY,
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '22px',
    },
    buttonSmall: {
        fontFamily: FONT_FAMILY_SECONDARY,
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '22px',
    },
    caption: {
        fontFamily: FONT_FAMILY_PRIMARY,
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '16px',
    },
    h1: {
        fontFamily: FONT_FAMILY_SECONDARY,
        fontSize: '24px',
        fontWeight: '500',
        lineHeight: '34px',
    },
    h2: {
        fontFamily: FONT_FAMILY_SECONDARY,
        fontSize: '20px',
        fontWeight: '500',
        lineHeight: '28px',
    },
    h3: {
        fontFamily: FONT_FAMILY_SECONDARY,
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '24px',
    },
});

export const textStyling = (textStyleSelector = 'body1') => {
    const validTextStylingSelectors = Object.keys(textStyles);

    if (!validTextStylingSelectors.includes(textStyleSelector)) {
        throw new Error(`${textStyleSelector} is not a valid text styling selector. Please use one the following: ${validTextStylingSelectors}`);
    }

    const textStyle = textStyles[textStyleSelector];

    return css`
        line-height: ${textStyle.lineHeight};
        font-family: ${textStyle.fontFamily ? textStyle.fontFamily : FONT_FAMILY_PRIMARY};
        font-size: ${textStyle.fontSize};
        font-weight: ${textStyle.fontWeight};
    `;
};

export const availableTextStyles = () => {
    return mapArrayToObject(Object.keys(textStyles));
};
