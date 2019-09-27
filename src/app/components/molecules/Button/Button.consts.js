import {
    blue100,
    purple100,
    sl10,
    white,
} from '../../../styles/colors/colors';
import { DIRECTIONS, SIZES } from '../../../utils/constants';
import mapArrayToObject from '../../../utils/mapArrayToObject';

export const BUTTON_DIRECTIONS = DIRECTIONS;

export const BUTTON_SIZES = SIZES;

export const BUTTON_VARIANTS = mapArrayToObject(['FILLED', 'OUTLINE', 'TEXT_ONLY']);

export const BUTTON_THEME = {
    borderRadiusLarge: '24px',
    borderRadiusSmall: '16px',
    colorDisabled: sl10,
    colorHover: blue100,
    colorPrimary: purple100,
    heightLarge: '48px',
    heightSmall: '32px',
    textColor: white,
    textStyles: {
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
    },
};
