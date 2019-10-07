import { FONT_FAMILY_PRIMARY, FONT_FAMILY_SECONDARY } from '../../utils/constants';
import { ALERT_DIALOG_THEME } from '../../components/organisms/AlertDialog/AlertDialog.consts';
import { BUTTON_ICON_THEME } from '../../components/molecules/ButtonIcon/ButtonIcon.consts';
import { BUTTON_THEME } from '../../components/molecules/Button/Button.consts';
import { CARD_THEME } from '../../components/molecules/Card/Card.consts';
import { CHIP_THEME } from '../../components/molecules/Chip/Chip.consts';
import { css } from 'styled-components';
import { ERROR_MESSAGE_THEME } from '../../components/atoms/ErrorMessage/ErrorMessage.consts';
import { INPUT_PASSWORD_THEME } from '../../components/organisms/InputPassword/InputPassword.consts';
import { INPUT_THEME } from '../../components/molecules/Input/Input.consts';
import { LABEL_THEME } from '../../components/atoms/Label/Label.consts';
import mapArrayToObject from '../../utils/mapArrayToObject';
import { NO_RESULTS_CARD_THEME } from '../../components/organisms/NoResultsCard/NoResultsCard.consts';
import { OVERLAY_THEME } from '../../components/molecules/Overlay/Overlay.consts';
import { SELECTION_CONTROL_THEME } from '../../components/molecules/SelectionControl/SelectionControl.consts';
import { TEXT_ICON_THEME } from '../../components/molecules/TextIcon/TextIcon.consts';
import { TOOLTIP_THEME } from '../../components/molecules/Tooltip/Tooltip.consts';

const theme = {
    alertDialog: ALERT_DIALOG_THEME,
    availableTextStyles() {
        return mapArrayToObject(Object.keys(this.textStyles));
    },
    button: BUTTON_THEME,
    buttonIcon: BUTTON_ICON_THEME,
    card: CARD_THEME,
    chip: CHIP_THEME,
    errorMessage: ERROR_MESSAGE_THEME,
    fontFamilyPrimary: FONT_FAMILY_PRIMARY,
    fontFamilySecondary: FONT_FAMILY_SECONDARY,
    input: INPUT_THEME,
    inputPassword: INPUT_PASSWORD_THEME,
    label: LABEL_THEME,
    noResultsCard: NO_RESULTS_CARD_THEME,
    overlay: OVERLAY_THEME,
    selectionControl: SELECTION_CONTROL_THEME,
    statusIndicator: {
        size: '8px',
    },
    textIcon: TEXT_ICON_THEME,
    textStyles: {
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
    },
    textStyling(textStyleSelector = 'body1') {
        const validTextStylingSelectors = Object.keys(this.textStyles);

        if (!validTextStylingSelectors.includes(textStyleSelector)) {
            throw new Error(`${textStyleSelector} is not a valid text styling selector. Please use one the following: ${validTextStylingSelectors}`);
        }

        const textStyle = this.textStyles[textStyleSelector];

        return css`
            line-height: ${textStyle.lineHeight};
            font-family: ${textStyle.fontFamily ? textStyle.fontFamily : FONT_FAMILY_PRIMARY};
            font-size: ${textStyle.fontSize};
            font-weight: ${textStyle.fontWeight};
        `;
    },
    tooltip: TOOLTIP_THEME,
};

export default theme;
