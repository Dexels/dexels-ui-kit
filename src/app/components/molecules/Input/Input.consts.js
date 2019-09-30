import {
    blue100,
    green,
    purple100,
    red,
    sl10,
    sl25,
} from '../../../styles/colors/colors';
import mapArrayToObject from '../../../utils/mapArrayToObject';

export const INPUT_TYPES = mapArrayToObject([
    'EMAIL',
    'NUMBER',
    'PASSWORD',
    'TEXT',
], true);

export const INPUT_THEME = {
    borderRadius: '8px',
    colorDisabled: sl10,
    colorError: red,
    colorFocus: blue100,
    colorHover: blue100,
    colorPrimary: purple100,
    colorValid: green,
    heightCompact: '24px',
    heightFullSize: '46px',
    heightTextarea: '126px',
    labelColorActive: purple100,
    labelColorDisabled: sl10,
    labelColorError: red,
    labelColorFocus: blue100,
    labelColorHover: purple100,
    labelColorPrimary: sl25,
    labelColorValid: green,
    textColor: purple100,
};
