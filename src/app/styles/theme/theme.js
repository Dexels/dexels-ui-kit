import * as colors from '../colors/colors';
import { FONT_FAMILY_PRIMARY, FONT_FAMILY_SECONDARY } from '../../utils/constants';
import mapArrayToObject from '../../utils/mapArrayToObject';
import theme from 'styled-theming';

export const themeModes = mapArrayToObject([
    'basic',
    'dark',
    'light',
]);

export const getAvailableThemeModes = () => (
    Object.values(themeModes)
);

/* FONTS */
export const fontPrimary = theme('mode', {
    [themeModes.basic]: FONT_FAMILY_PRIMARY,
    [themeModes.dark]: FONT_FAMILY_SECONDARY,
    [themeModes.light]: FONT_FAMILY_PRIMARY,
});

export const fontSecondary = theme('mode', {
    [themeModes.basic]: FONT_FAMILY_SECONDARY,
    [themeModes.dark]: FONT_FAMILY_PRIMARY,
    [themeModes.light]: FONT_FAMILY_SECONDARY,
});

/* BASIC / ROOT */
export const colorPrimary = theme('mode', {
    [themeModes.basic]: colors.purple100,
    [themeModes.dark]: colors.white,
    [themeModes.light]: colors.black,
});

export const colorPrimaryHover = theme('mode', {
    [themeModes.basic]: colors.blue100,
    [themeModes.dark]: colors.grey50,
    [themeModes.light]: colors.grey25,
});

export const colorPrimarySelected = theme('mode', {
    [themeModes.basic]: colors.blue100,
    [themeModes.dark]: colors.grey50,
    [themeModes.light]: colors.grey25,
});

export const colorSecondary = theme('mode', {
    [themeModes.basic]: colors.blue100,
    [themeModes.dark]: colors.grey2,
    [themeModes.light]: colors.grey100,
});

export const colorSecondaryHover = theme('mode', {
    [themeModes.basic]: colors.blue50,
    [themeModes.dark]: colors.grey50,
    [themeModes.light]: colors.grey10,
});

export const colorSecondarySelected = theme('mode', {
    [themeModes.basic]: colors.blue25,
    [themeModes.dark]: colors.grey75,
    [themeModes.light]: colors.grey25,
});

export const colorTertiary = theme('mode', {
    [themeModes.basic]: colors.blue50,
    [themeModes.dark]: colors.grey2,
    [themeModes.light]: colors.grey100,
});

export const colorTertiaryHover = theme('mode', {
    [themeModes.basic]: colors.blue50,
    [themeModes.dark]: colors.grey50,
    [themeModes.light]: colors.grey10,
});

export const colorTertiarySelected = theme('mode', {
    [themeModes.basic]: colors.blue25,
    [themeModes.dark]: colors.grey75,
    [themeModes.light]: colors.grey25,
});

export const colorDisabled = theme('mode', {
    [themeModes.basic]: colors.grey10,
    [themeModes.dark]: colors.grey10,
    [themeModes.light]: colors.grey10,
});

export const backgroundColorPrimary = theme('mode', {
    [themeModes.basic]: colors.white,
    [themeModes.dark]: colors.black,
    [themeModes.light]: colors.white,
});

export const backgroundColorSecondary = theme('mode', {
    [themeModes.basic]: colors.grey2,
    [themeModes.dark]: colors.grey100,
    [themeModes.light]: colors.grey2,
});

export const backgroundColorTertiary = theme('mode', {
    [themeModes.basic]: colors.purple100,
    [themeModes.dark]: colors.black,
    [themeModes.light]: colors.white,
});

/* TEXT / ICON */
export const colorHeadingDark = theme('mode', {
    [themeModes.basic]: colors.purple100,
    [themeModes.dark]: colors.black,
    [themeModes.light]: colors.grey2,
});

export const colorHeadingLight = theme('mode', {
    [themeModes.basic]: colors.white,
    [themeModes.dark]: colors.grey2,
    [themeModes.light]: colors.white,
});

export const colorBodyDark = theme('mode', {
    [themeModes.basic]: colors.grey100,
    [themeModes.dark]: colors.black,
    [themeModes.light]: colors.grey2,
});

export const colorBodyLight = theme('mode', {
    [themeModes.basic]: colors.grey50,
    [themeModes.dark]: colors.grey100,
    [themeModes.light]: colors.white,
});

export const colorButtonDark = theme('mode', {
    [themeModes.basic]: colors.purple100,
    [themeModes.dark]: colors.black,
    [themeModes.light]: colors.grey50,
});

export const colorButtonLight = theme('mode', {
    [themeModes.basic]: colors.white,
    [themeModes.dark]: colors.white,
    [themeModes.light]: colors.black,
});

/* SIGNAL / ACCENT */
export const colorSignalStandard = theme('mode', {
    [themeModes.basic]: colors.purple100,
    [themeModes.dark]: colors.purple100,
    [themeModes.light]: colors.purple100,
});

export const colorSignalValid = theme('mode', {
    [themeModes.basic]: colors.green,
    [themeModes.dark]: colors.green,
    [themeModes.light]: colors.green,
});

export const colorSignalWarning = theme('mode', {
    [themeModes.basic]: colors.orange,
    [themeModes.dark]: colors.orange,
    [themeModes.light]: colors.orange,
});

export const colorSignalError = theme('mode', {
    [themeModes.basic]: colors.red,
    [themeModes.dark]: colors.red,
    [themeModes.light]: colors.red,
});

export const colorSignalDisabled = theme('mode', {
    [themeModes.basic]: colors.grey10,
    [themeModes.dark]: colors.grey10,
    [themeModes.light]: colors.grey10,
});
