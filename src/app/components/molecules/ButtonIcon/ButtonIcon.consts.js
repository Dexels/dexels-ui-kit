import {
    blue100,
    purple100,
    sl10,
    sl2,
} from '../../../styles/colors/colors';
import mapArrayToObject from '../../../utils/mapArrayToObject';
import { SIZES } from '../../../utils/constants';

export const BUTTON_ICON_SIZES = SIZES;

export const BUTTON_ICON_VARIANTS = mapArrayToObject(['DEFAULT', 'HEADER']);

export const BUTTON_ICON_THEME = {
    backgroundColorHover: sl2,
    colorDefault: purple100,
    colorDisabled: sl10,
    colorHover: blue100,
    sizeLarge: '20px',
    sizeSmall: '14px',
};
