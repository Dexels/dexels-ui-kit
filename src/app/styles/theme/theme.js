import * as colors from '../colors/colors';
import { textStyles } from './textStyles';
import theme from 'styled-theming';

export const getAvailableThemeModes = () => (
    ['basic', 'dark', 'light']
);

export const typography = theme('mode', {
    basic: textStyles,
    dark: textStyles,
    light: textStyles,
});

export const padding = theme('layout', {
    basic: '8px',
    compact: '4px',
});

export const buttonBorderRadius = theme('layout', {
    basic: '50px',
    compact: '25px',
});

export const buttonFontSize = theme.variants('layout', 'kind', {
    LARGE: {
        basic: '1.4rem',
        compact: '1.1rem',
    },
    MEDIUM: {
        basic: '1.3rem',
        compact: '1rem',
    },
    SMALL: {
        basic: '1.2rem',
        compact: '0.9rem',
    },
});

/* BASIC / ROOT */
export const colorPrimary = theme('mode', {
    basic: colors.purple100,
    dark: colors.white,
    light: colors.black,
});

export const colorSecondary = theme('mode', {
    basic: colors.blue100,
    dark: colors.grey2,
    light: colors.grey100,
});

export const colorTertiary = theme('mode', {
    basic: colors.blue50,
    dark: colors.grey2,
    light: colors.grey100,
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

/* INPUT */
export const colorInputEnabled = theme('mode', {
    basic: colors.purple100,
    dark: colors.black,
    light: colors.grey2,
});

export const colorInputHover = theme('mode', {
    basic: colors.blue50,
    dark: colors.grey50,
    light: colors.grey10,
});

export const colorInputSelected = theme('mode', {
    basic: colors.blue25,
    dark: colors.grey75,
    light: colors.grey25,
});

export const colorInputDisabled = theme('mode', {
    basic: colors.grey10,
    dark: colors.grey10,
    light: colors.grey10,
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
    light: colors.grey10,
});

export const colorButtonLight = theme('mode', {
    basic: colors.white,
    dark: colors.grey100,
    light: colors.black,
});

/* SIGNAL / ACCENT */
export const colorSignalStandard = theme('mode', {
    basic: colors.purple100,
    dark: colors.purple100,
    light: colors.purple100,
});

export const colorSignalOk = theme('mode', {
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
export const buttonColorDisabled = theme('mode', {
    basic: colors.white,
    dark: colors.white,
    light: colors.grey100,
});

export const buttonColorHover = theme('mode', {
    basic: colors.blue100,
    dark: colors.grey100,
    light: colors.grey5,
});
