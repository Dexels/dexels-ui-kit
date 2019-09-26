import {
    sl10,
    sl100,
} from '../colors/colors';
import defaultTextStyle from './defaultTextStyle';

const themeChip = {
    chip: {
        backgroundColor: sl10,
        backgroundColorDeselected: 'transparent',
        backgroundColorHover: 'transparent',
        borderRadius: '8px',
        colorDisabled: sl100,
        colorHover: sl100,
        colorPrimary: sl100,
        height: '32px',
    },
    textStyles: {
        // LEFT AS DISCUSSION EXAMPLE FOR USING DEFAULT AS FALLBACK, BUT OVERRIDE SPECIFIC PROPS
        // chip: {
        //     fontSize: '24px',
        //     fontWeight: '400',
        //     lineHeight: defaultTextStyle.default.lineHeight,
        // },
        chip: defaultTextStyle.default,
    },
};

export default themeChip;
