import {
    blue10,
    green,
    grey10,
    purple100,
    red,
    white,
} from '../../../styles/colors/colors';
import { DIRECTIONS, EASINGS } from '../../../utils/constants';
import mapArrayToObject from '../../../utils/mapArrayToObject';

export const SELECTION_CONTROL_DIRECTIONS = DIRECTIONS;

export const SELECTION_CONTROL_EASINGS = EASINGS;

export const SELECTION_CONTROL_THEME = {
    checkboxBorderRadius: '5px',
    colorDefault: purple100,
    colorDisabled: grey10,
    colorError: red,
    colorHover: blue10,
    colorValid: green,
    iconColor: white,
    iconSize: '20px',
    radioButtonDotSize: '60%',
    size: '24px',
};

export const SELECTION_CONTROL_TYPES = mapArrayToObject([
    'CHECKBOX',
    'RADIO',
], true);
