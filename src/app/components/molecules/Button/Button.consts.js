import {
    blue100,
    purple100,
    sl10,
    white,
} from '../../../styles/colors/colors';
import {
    DIRECTIONS,
    EASINGS,
    FONT_FAMILY_SECONDARY,
    SIZES,
} from '../../../utils/constants';
import mapArrayToObject from '../../../utils/mapArrayToObject';

export const BUTTON_DIRECTIONS = DIRECTIONS;

export const BUTTON_EASINGS = EASINGS;

export const BUTTON_SIZES = SIZES;

export const BUTTON_VARIANTS = mapArrayToObject(['FILLED', 'OUTLINE', 'TEXT_ONLY']);

export const BUTTON_THEME = {
    borderRadiusLarge: '24px',
    borderRadiusSmall: '16px',
    colorDefault: purple100,
    colorDisabled: sl10,
    colorHover: blue100,
    fontFamily: FONT_FAMILY_SECONDARY,
    heightLarge: '48px',
    heightSmall: '32px',
    textColor: white,
};
