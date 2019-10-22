import {
    black,
    blue100,
    blue25,
    blue50,
    green,
    grey10,
    grey100,
    grey2,
    grey25,
    grey5,
    grey50,
    grey75,
    orange,
    purple100,
    red,
    white,
} from '../colors/colors';
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
    [themeModes.basic]: ({ theme }) => theme.colorPrimary || purple100,
    [themeModes.dark]: white,
    [themeModes.light]: black,
});

export const colorPrimaryHover = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorPrimaryHover || blue100,
    [themeModes.dark]: grey50,
    [themeModes.light]: grey25,
});

export const colorPrimarySelected = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorPrimarySelected || blue100,
    [themeModes.dark]: grey50,
    [themeModes.light]: grey25,
});

export const backgroundColorPrimary = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.backgroundColorPrimary || white,
    [themeModes.dark]: black,
    [themeModes.light]: white,
});

/* SECONDARY */
export const colorSecondary = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorSecondary || blue100,
    [themeModes.dark]: grey2,
    [themeModes.light]: grey100,
});

export const colorSecondaryHover = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorSecondaryHover || blue50,
    [themeModes.dark]: grey50,
    [themeModes.light]: grey10,
});

export const colorSecondarySelected = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorSecondarySelected || blue25,
    [themeModes.dark]: grey75,
    [themeModes.light]: grey25,
});

export const backgroundColorSecondary = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.backgroundColorSecondary || grey2,
    [themeModes.dark]: grey100,
    [themeModes.light]: grey2,
});

/* TERTIARY */
export const colorTertiary = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorTertiary || blue50,
    [themeModes.dark]: grey2,
    [themeModes.light]: grey100,
});

export const colorTertiaryHover = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorTertiaryHover || blue50,
    [themeModes.dark]: grey50,
    [themeModes.light]: grey10,
});

export const colorTertiarySelected = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorTertiarySelected || blue25,
    [themeModes.dark]: grey75,
    [themeModes.light]: grey25,
});

export const backgroundColorTertiary = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.backgroundColorTertiary || purple100,
    [themeModes.dark]: black,
    [themeModes.light]: white,
});

/* COLORS */
export const colorDisabled = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorDisabled || grey10,
    [themeModes.dark]: grey10,
    [themeModes.light]: grey10,
});

export const colorError = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorError || red,
    [themeModes.dark]: red,
    [themeModes.light]: red,
});

export const colorValid = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorValid || green,
    [themeModes.dark]: green,
    [themeModes.light]: green,
});

export const colorWarning = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorWarning || orange,
    [themeModes.dark]: orange,
    [themeModes.light]: orange,
});

/* HEADERS / FOOTERS */
export const backgroundColorFooter = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.backgroundColorFooter || grey5,
    [themeModes.dark]: grey25,
    [themeModes.light]: grey5,
});

export const backgroundColorHeader = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.backgroundColorHeader || purple100,
    [themeModes.dark]: black,
    [themeModes.light]: grey10,
});

export const colorHeader = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorHeader || white,
    [themeModes.dark]: white,
    [themeModes.light]: black,
});

/* TEXT / ICON */
export const colorHeadingDark = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorHeadingDark || purple100,
    [themeModes.dark]: black,
    [themeModes.light]: grey2,
});

export const colorHeadingLight = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorHeadingLight || white,
    [themeModes.dark]: grey2,
    [themeModes.light]: white,
});

export const colorBodyDark = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorBodyDark || grey100,
    [themeModes.dark]: black,
    [themeModes.light]: grey75,
});

export const colorBodyLight = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorBodyLight || grey50,
    [themeModes.dark]: grey100,
    [themeModes.light]: grey50,
});

export const colorButtonDark = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorButtonDark || purple100,
    [themeModes.dark]: black,
    [themeModes.light]: grey50,
});

export const colorButtonLight = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.colorButtonLight || white,
    [themeModes.dark]: white,
    [themeModes.light]: black,
});
