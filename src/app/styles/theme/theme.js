import * as colors from '../colors/colors';
import { FONT_FAMILY_PRIMARY, FONT_FAMILY_SECONDARY } from '../../utils/constants';
import theme from 'styled-theming';

export const getAvailableThemeModes = () => (
    ['basic', 'dark', 'light']
);

/* FONTS */
export const fontPrimary = theme('mode', {
    basic: FONT_FAMILY_PRIMARY,
    dark: FONT_FAMILY_SECONDARY,
    light: FONT_FAMILY_PRIMARY,
});

export const fontSecondary = theme('mode', {
    basic: FONT_FAMILY_SECONDARY,
    dark: FONT_FAMILY_PRIMARY,
    light: FONT_FAMILY_SECONDARY,
});

/* BASIC / ROOT */
export const colorPrimary = theme('mode', {
    basic: colors.purple100,
    dark: colors.white,
    light: colors.black,
});

export const colorPrimaryHover = theme('mode', {
    basic: colors.blue100,
    dark: colors.grey50,
    light: colors.grey25,
});

export const colorPrimarySelected = theme('mode', {
    basic: colors.blue100,
    dark: colors.grey50,
    light: colors.grey25,
});

export const colorSecondary = theme('mode', {
    basic: colors.blue100,
    dark: colors.grey2,
    light: colors.grey100,
});

export const colorSecondaryHover = theme('mode', {
    basic: colors.blue50,
    dark: colors.grey50,
    light: colors.grey10,
});

export const colorSecondarySelected = theme('mode', {
    basic: colors.blue25,
    dark: colors.grey75,
    light: colors.grey25,
});

export const colorTertiary = theme('mode', {
    basic: colors.blue50,
    dark: colors.grey2,
    light: colors.grey100,
});

export const colorTertiaryHover = theme('mode', {
    basic: colors.blue50,
    dark: colors.grey50,
    light: colors.grey10,
});

export const colorTertiarySelected = theme('mode', {
    basic: colors.blue25,
    dark: colors.grey75,
    light: colors.grey25,
});

export const colorDisabled = theme('mode', {
    basic: colors.grey10,
    dark: colors.grey10,
    light: colors.grey10,
});

export const backgroundColorPrimary = theme('mode', {
    basic: colors.white,
    dark: colors.black,
    light: colors.white,
});

export const backgroundColorSecondary = theme('mode', {
    basic: colors.grey2,
    dark: colors.grey100,
    light: colors.grey2,
});

export const backgroundColorTertiary = theme('mode', {
    basic: colors.purple100,
    dark: colors.black,
    light: colors.white,
});

/* TEXT / ICON */
export const colorHeadingDark = theme('mode', {
    basic: colors.purple100,
    dark: colors.black,
    light: colors.grey2,
});

export const colorHeadingLight = theme('mode', {
    basic: colors.white,
    dark: colors.grey2,
    light: colors.white,
});

export const colorBodyDark = theme('mode', {
    basic: colors.grey100,
    dark: colors.black,
    light: colors.grey2,
});

export const colorBodyLight = theme('mode', {
    basic: colors.grey50,
    dark: colors.grey100,
    light: colors.white,
});

export const colorButtonDark = theme('mode', {
    basic: colors.purple100,
    dark: colors.black,
    light: colors.grey50,
});

export const colorButtonLight = theme('mode', {
    basic: colors.white,
    dark: colors.white,
    light: colors.black,
});

/* SIGNAL / ACCENT */
export const colorSignalStandard = theme('mode', {
    basic: colors.purple100,
    dark: colors.purple100,
    light: colors.purple100,
});

export const colorSignalValid = theme('mode', {
    basic: colors.green,
    dark: colors.green,
    light: colors.green,
});

export const colorSignalWarning = theme('mode', {
    basic: colors.orange,
    dark: colors.orange,
    light: colors.orange,
});

export const colorSignalError = theme('mode', {
    basic: colors.red,
    dark: colors.red,
    light: colors.red,
});

export const colorSignalDisabled = theme('mode', {
    basic: colors.grey10,
    dark: colors.grey10,
    light: colors.grey10,
});

/* BUTTON SPECIFICS */
export const buttonTextColorDisabled = theme('mode', {
    basic: colors.white,
    dark: colors.white,
    light: colors.grey50,
});

export const buttonIconBackgroundColorHover = theme('mode', {
    basic: colors.grey2,
    dark: colors.grey2,
    light: colors.grey2,
});

/* LABEL SPECIFICS */
export const labelTextColor = theme('mode', {
    basic: colors.grey100,
    dark: colors.white,
    light: colors.black,
});
