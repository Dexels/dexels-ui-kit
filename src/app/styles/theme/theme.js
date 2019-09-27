import { css } from 'styled-components';
import defaultTextStyle from './defaultTextStyle';
import mapArrayToObject from '../../utils/mapArrayToObject';
/* Theme files for the components */
import themeButton from './theme_button';
import themeButtonIcon from './theme_buttonIcon';
import themeCard from './theme_card';
import themeChip from './theme_chip';
import themeInput from './theme_input';
import themeTextIcon from './theme_textIcon';
import themeTooltip from './theme_tooltip';

const theme = {
    availableTextStyles() {
        return mapArrayToObject(Object.keys(this.textStyles));
    },
    /* COMPONENT STYLES */
    button: themeButton.button,
    buttonIcon: themeButtonIcon.buttonIcon,
    card: themeCard.card,
    chip: themeChip.chip,
    input: themeInput.input,
    textIcon: themeTextIcon.textIcon,
    /* TEXT STYLES */
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
        buttonLarge: themeButton.textStyles.buttonLarge,
        buttonSmall: themeButton.textStyles.buttonSmall,
        caption: {
            fontSize: '12px',
            fontWeight: '300',
            lineHeight: '16px',
        },
        chip: themeChip.textStyles.chip,
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
        textIcon: themeTextIcon.textStyles.textIcon,
        tooltip: themeTooltip.textStyles.tooltip,
    },
    textStyling(textStyleSelector) {
        const validTextStylingSelectors = Object.keys(this.textStyles);

        if (!validTextStylingSelectors.includes(textStyleSelector)) {
            throw new Error(`${textStyleSelector} is not a valid text styling selector. Please use one the following: ${validTextStylingSelectors}`);
        }

        const textStyle = this.textStyles[textStyleSelector];

        /* Use the default style as fallback setting */
        return css`
            line-height: ${textStyle.lineHeight ? textStyle.lineHeight : defaultTextStyle.lineHeight};
            font-family: ${textStyle.fontFamily ? textStyle.fontFamily : defaultTextStyle.fontFamily};
            font-size: ${textStyle.fontSize ? textStyle.fontSize : defaultTextStyle.fontSize};
            font-weight: ${textStyle.fontWeight ? textStyle.fontWeight : defaultTextStyle.fontWeight};
        `;
    },
    tooltip: themeTooltip.tooltip,
};

export default theme;
