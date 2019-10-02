import {
    blue100,
    green,
    purple100,
    red,
    sl10,
    white,
} from '../../../styles/colors/colors';
import { DIRECTIONS } from '../../../utils/constants';
import mapArrayToObject from '../../../utils/mapArrayToObject';

export const SELECTION_CONTROL_DIRECTIONS = DIRECTIONS;

export const SELECTION_CONTROL_THEME = {
    checkboxBorderRadius: '5px',
    colorDefault: purple100,
    colorDisabled: sl10,
    colorError: red,
    colorFocus: blue100,
    colorHover: blue100,
    colorValid: green,
    iconColor: white,
    iconSize: '12px',
    size: '24px',
};

export const SELECTION_CONTROL_TYPES = mapArrayToObject([
    'CHECKBOX',
    'RADIO',
], true);
