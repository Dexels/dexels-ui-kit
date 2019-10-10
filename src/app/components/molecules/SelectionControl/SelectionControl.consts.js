import {
    blue10,
    blue50,
    green,
    purple100,
    red,
    sl10,
    white,
} from '../../../styles/colors/colors';
import { DIRECTIONS, EASINGS } from '../../../utils/constants';
import mapArrayToObject from '../../../utils/mapArrayToObject';

export const SELECTION_CONTROL_DIRECTIONS = DIRECTIONS;

export const SELECTION_CONTROL_EASINGS = EASINGS;

export const SELECTION_CONTROL_THEME = {
    checkboxBorderRadius: '5px',
    colorDefault: purple100,
    colorDisabled: sl10,
    colorError: red,
    colorHover: blue10,
    colorPressed: blue50,
    colorValid: green,
    iconColor: white,
    iconSize: '20px',
    radioButtonInnerSize: '60%',
    size: '24px',
    sizeHover: '40px',
};

export const SELECTION_CONTROL_TYPES = mapArrayToObject([
    'CHECKBOX',
    'RADIO',
], true);
