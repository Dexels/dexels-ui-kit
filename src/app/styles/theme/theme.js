import * as colors from '../colors/colors';
import mapArrayToObject from '../../utils/mapArrayToObject';
import styledTheming from 'styled-theming';

export const themeModes = mapArrayToObject([
    'basic',
    'dark',
    'light',
]);

export const getAvailableThemeModes = () => (
    Object.values(themeModes)
);

/* PRIMARY */
export const colorPrimary = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorPrimary || colors.purple100,
    [themeModes.dark]: colors.white,
    [themeModes.light]: colors.black,
});

export const colorPrimaryHover = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorPrimaryHover || colors.blue100,
    [themeModes.dark]: colors.grey50,
    [themeModes.light]: colors.grey25,
});

export const colorPrimarySelected = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorPrimarySelected || colors.blue100,
    [themeModes.dark]: colors.grey50,
    [themeModes.light]: colors.grey25,
});

export const backgroundColorPrimary = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.backgroundColorPrimary || colors.white,
    [themeModes.dark]: colors.black,
    [themeModes.light]: colors.white,
});

/* SECONDARY */
export const colorSecondary = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorSecondary || colors.blue100,
    [themeModes.dark]: colors.grey2,
    [themeModes.light]: colors.grey100,
});

export const colorSecondaryHover = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorSecondaryHover || colors.blue50,
    [themeModes.dark]: colors.grey50,
    [themeModes.light]: colors.grey10,
});

export const colorSecondarySelected = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorSecondarySelected || colors.blue25,
    [themeModes.dark]: colors.grey75,
    [themeModes.light]: colors.grey25,
});

export const backgroundColorSecondary = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.backgroundColorSecondary || colors.grey2,
    [themeModes.dark]: colors.grey100,
    [themeModes.light]: colors.grey2,
});

/* TERTIARY */
export const colorTertiary = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorTertiary || colors.blue50,
    [themeModes.dark]: colors.grey2,
    [themeModes.light]: colors.grey100,
});

export const colorTertiaryHover = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorTertiaryHover || colors.blue50,
    [themeModes.dark]: colors.grey50,
    [themeModes.light]: colors.grey10,
});

export const colorTertiarySelected = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorTertiarySelected || colors.blue25,
    [themeModes.dark]: colors.grey75,
    [themeModes.light]: colors.grey25,
});

export const backgroundColorTertiary = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.backgroundColorTertiary || colors.purple100,
    [themeModes.dark]: colors.black,
    [themeModes.light]: colors.white,
});

/* COLORS */
export const colorDisabled = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorDisabled || colors.grey10,
    [themeModes.dark]: colors.grey10,
    [themeModes.light]: colors.grey10,
});

export const colorError = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorError || colors.red,
    [themeModes.dark]: colors.red,
    [themeModes.light]: colors.red,
});

export const colorValid = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorValid || colors.green,
    [themeModes.dark]: colors.green,
    [themeModes.light]: colors.green,
});

export const colorWarning = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorWarning || colors.orange,
    [themeModes.dark]: colors.orange,
    [themeModes.light]: colors.orange,
});

/* HEADERS / FOOTERS */
export const backgroundColorFooter = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.backgroundColorFooter || colors.grey5,
    [themeModes.dark]: colors.grey25,
    [themeModes.light]: colors.grey5,
});

export const backgroundColorHeader = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.backgroundColorHeader || colors.purple100,
    [themeModes.dark]: colors.black,
    [themeModes.light]: colors.grey10,
});

export const colorHeader = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorHeader || colors.white,
    [themeModes.dark]: colors.white,
    [themeModes.light]: colors.black,
});

/* TEXT / ICON */
export const colorHeadingDark = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorHeadingDark || colors.purple100,
    [themeModes.dark]: colors.black,
    [themeModes.light]: colors.grey2,
});

export const colorHeadingLight = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorHeadingLight || colors.white,
    [themeModes.dark]: colors.grey2,
    [themeModes.light]: colors.white,
});

export const colorBodyDark = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorBodyDark || colors.grey100,
    [themeModes.dark]: colors.black,
    [themeModes.light]: colors.grey75,
});

export const colorBodyLight = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorBodyLight || colors.grey50,
    [themeModes.dark]: colors.grey100,
    [themeModes.light]: colors.grey50,
});

export const colorButtonDark = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorButtonDark || colors.purple100,
    [themeModes.dark]: colors.black,
    [themeModes.light]: colors.grey50,
});

export const colorButtonLight = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorButtonLight || colors.white,
    [themeModes.dark]: colors.white,
    [themeModes.light]: colors.black,
});
