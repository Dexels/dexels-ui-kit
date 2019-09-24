import {
    blue100,
    purple100,
    sl10,
    sl2,
    sl25,
    white,
} from '../colors/colors';
import { css } from 'styled-components';
import mapArrayToObject from '../../utils/mapArrayToObject';

const DEFAULT_FONT_SIZE = 14;
const DEFAULT_LINE_HEIGHT = 18;
const DEFAULT_SIZE_UNIT = 8; // Used for padding/margin/sizing

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
        heightLarge: (DEFAULT_SIZE_UNIT * 6).toString().concat('px'),
        heightSmall: (DEFAULT_SIZE_UNIT * 4).toString().concat('px'),
        textColor: white,
    },
    buttonIcon: {
        backgroundColorHover: sl2,
        colorDisabled: sl10,
        colorHover: blue100,
        colorPrimary: purple100,
        // Icons are actually fonts, so use fontsize
        sizeLarge: DEFAULT_FONT_SIZE.toString().concat('px'),
        sizeSmall: (DEFAULT_FONT_SIZE * 0.8).toString().concat('px'),
    },
    input: {
        borderRadius: '8px',
        colorFocus: blue100,
        colorHover: blue100,
        colorPrimary: purple100,
        heightFullSize: (DEFAULT_SIZE_UNIT * 6).toString().concat('px'),
        labelColorHover: purple100,
        labelColorPrimary: sl25,
    },
    textStyles: {
        body1: {
            fontSize: (DEFAULT_FONT_SIZE + 2).toString().concat('px'),
            fontWeight: '400',
            lineHeight: (DEFAULT_LINE_HEIGHT + 6).toString().concat('px'),
        },
        body2: {
            fontSize: DEFAULT_FONT_SIZE.toString().concat('px'),
            fontWeight: '400',
            lineHeight: DEFAULT_LINE_HEIGHT.toString().concat('px'),
        },
        body3: {
            fontSize: DEFAULT_FONT_SIZE.toString().concat('px'),
            fontWeight: '300',
            lineHeight: DEFAULT_LINE_HEIGHT.toString().concat('px'),
        },
        buttonLarge: {
            fontSize: (DEFAULT_FONT_SIZE + 2).toString().concat('px'),
            fontWeight: '500',
            lineHeight: (DEFAULT_LINE_HEIGHT + 2).toString().concat('px'),
        },
        buttonSmall: {
            fontSize: DEFAULT_FONT_SIZE.toString().concat('px'),
            fontWeight: '500',
            lineHeight: (DEFAULT_LINE_HEIGHT - 2).toString().concat('px'),
        },
        caption: {
            fontSize: (DEFAULT_FONT_SIZE - 2).toString().concat('px'),
            fontWeight: '300',
            lineHeight: (DEFAULT_LINE_HEIGHT - 2).toString().concat('px'),
        },
        h1: {
            fontSize: (DEFAULT_FONT_SIZE + 10).toString().concat('px'),
            fontWeight: '500',
            lineHeight: (DEFAULT_LINE_HEIGHT + 12).toString().concat('px'),
        },
        h2: {
            fontSize: (DEFAULT_FONT_SIZE + 6).toString().concat('px'),
            fontWeight: '500',
            lineHeight: (DEFAULT_LINE_HEIGHT + 10).toString().concat('px'),
        },
        h3: {
            fontSize: (DEFAULT_FONT_SIZE + 2).toString().concat('px'),
            fontWeight: '600',
            lineHeight: (DEFAULT_LINE_HEIGHT + 6).toString().concat('px'),
        },
        h4: {
            fontSize: DEFAULT_FONT_SIZE.toString().concat('px'),
            fontWeight: '600',
            lineHeight: (DEFAULT_LINE_HEIGHT + 4).toString().concat('px'),
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
