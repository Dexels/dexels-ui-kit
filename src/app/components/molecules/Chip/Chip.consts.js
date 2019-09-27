import {
    blue100,
    sl10,
    sl100,
    sl5,
} from '../../../styles/colors/colors';
import { DIRECTIONS } from '../../../utils/constants';

export const CHIP_DIRECTIONS = DIRECTIONS;

export const CHIP_THEME = {
    backgroundColor: sl10,
    backgroundColorDeselected: 'transparent',
    backgroundColorHover: sl5,
    borderRadius: '8px',
    colorDisabled: sl100,
    colorHover: sl100,
    colorPrimary: sl100,
    colorRipple: blue100,
    height: '32px',
};

export default CHIP_DIRECTIONS;
