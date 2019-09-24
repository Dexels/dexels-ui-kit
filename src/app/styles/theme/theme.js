import {
    blue100,
    purple100,
    red,
    sl10,
    sl2,
    sl25,
    white,
} from '../colors/colors';
import { css } from 'styled-components';
import mapArrayToObject from '../../utils/mapArrayToObject';

const theme = {
    availableTextStyles() {
        return mapArrayToObject(Object.keys(this.textStyles));
    },
    button: {
        borderRadiusLarge: '24px',
        borderRadiusSmall: '16px',
        colorDisabled: sl10,
        colorHover: blue100,
        colorPrimary: purple100,
        heightLarge: '48px',
        heightSmall: '32px',
        textColor: white,
    },
    buttonIcon: {
        backgroundColorHover: sl2,
        colorDisabled: sl10,
        colorHover: blue100,
        colorPrimary: purple100,
        sizeLarge: '14px',
        sizeSmall: '12px',
    },
    input: {
        borderRadius: '8px',
        colorDisabled: sl10,
        colorError: red,
        colorFocus: blue100,
        colorHover: blue100,
        colorPrimary: purple100,
        heightFullSize: '48px',
        labelColorActive: purple100,
        labelColorDisabled: sl10,
        labelColorError: red,
        labelColorFocus: blue100,
        labelColorHover: purple100,
        labelColorPrimary: sl25,
        textColor: purple100,
    },
    textStyles: {
        body1: {
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '24px',
        },
        body2: {
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '18px',
        },
        body3: {
            fontSize: '14px',
            fontWeight: '300',
            lineHeight: '18px',
        },
        buttonLarge: {
            fontSize: '16px',
            fontWeight: '500',
            lineHeight: '20px',
        },
        buttonSmall: {
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '16px',
        },
        caption: {
            fontSize: '12px',
            fontWeight: '300',
            lineHeight: '16px',
        },
        h1: {
            fontSize: '24px',
            fontWeight: '500',
            lineHeight: '30px',
        },
        h2: {
            fontSize: '20px',
            fontWeight: '500',
            lineHeight: '28px',
        },
        h3: {
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '24px',
        },
        h4: {
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '22px',
        },
    },
    textStyling(textStyleSelector) {
        const validTextStylingSelectors = Object.keys(this.textStyles);

        if (!validTextStylingSelectors.includes(textStyleSelector)) {
            throw new Error(`${textStyleSelector} is not a valid text styling selector. Please use one the following: ${validTextStylingSelectors}`);
        }

        const textStyle = this.textStyles[textStyleSelector];

        return css`
            line-height: ${textStyle.lineHeight};
            font-size: ${textStyle.fontSize};
            font-weight: ${textStyle.fontWeight};
        `;
    },
};

export default theme;
