import {
    blue100,
    green,
    purple100,
    red,
    sl10,
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
    colorDefault: purple100,
    colorDisabled: sl10,
    colorError: red,
    colorFocus: blue100,
    colorHover: blue100,
    colorValid: green,
    heightCompact: '24px',
    heightFullSize: '46px',
    heightTextarea: '126px',
    textColor: purple100,
};
