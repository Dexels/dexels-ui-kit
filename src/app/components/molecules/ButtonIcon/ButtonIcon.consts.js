import mapArrayToObject from '../../../utils/mapArrayToObject';
import { SIZES } from '../../../utils/constants';
import theme from 'styled-theming';

export const BUTTON_ICON_SIZES = SIZES;

export const BUTTON_ICON_VARIANTS = mapArrayToObject(['DEFAULT', 'HEADER']);

export const buttonIconFontSize = theme.variants('layout', 'size', {
    [SIZES.LARGE]: {
        basic: '20px',
        compact: '18px',
    },
    [SIZES.MEDIUM]: {
        basic: '18px',
        compact: '16px',
    },
    [SIZES.SMALL]: {
        basic: '14px',
        compact: '12px',
    },
});
