import {
    blue100,
    sl10,
    sl100,
    sl5,
} from '../colors/colors';
import defaultTextStyle from './defaultTextStyle';

const themeChip = {
    chip: {
        backgroundColor: sl10,
        backgroundColorDeselected: 'transparent',
        backgroundColorHover: sl5,
        borderRadius: '8px',
        colorDisabled: sl100,
        colorHover: sl100,
        colorPrimary: sl100,
        colorRipple: blue100,
        height: '32px',
    },
    textStyles: {
        chip: defaultTextStyle.default,
    },
};

export default themeChip;
