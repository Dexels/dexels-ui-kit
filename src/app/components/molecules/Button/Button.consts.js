import {
    DIRECTIONS,
    EASINGS,
    SIZES,
} from '../../../utils/constants';
import mapArrayToObject from '../../../utils/mapArrayToObject';
import theme from 'styled-theming';

export const BUTTON_DIRECTIONS = DIRECTIONS;

export const BUTTON_EASINGS = EASINGS;

export const BUTTON_SIZES = SIZES;

export const BUTTON_VARIANTS = mapArrayToObject(['FILLED', 'OUTLINE', 'OUTLINE_HEADER', 'TEXT_ONLY']);

export const buttonBorderRadius = theme('layout', {
    basic: '50px',
    compact: '4px',
});

export const buttonHeight = theme.variants('layout', 'size', {
    [SIZES.LARGE]: {
        basic: '48px',
        compact: '46px',
    },
    [SIZES.MEDIUM]: {
        basic: '32px',
        compact: '30px',
    },
    [SIZES.SMALL]: {
        basic: '30px',
        compact: '28px',
    },
});
