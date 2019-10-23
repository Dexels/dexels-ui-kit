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
    purple50,
    red,
    white,
} from '../colors/colors';

/* eslint-disable sort-keys */
const themeBasic = {
    colorPrimary: {
        light: purple50,
        main: purple100,
    },
    colorSecondary: {
        dark: blue50,
        light: blue25,
        main: blue100,
    },
    colorDisabled: {
        main: grey10,
    },
    colorError: {
        main: red,
    },
    colorValid: {
        main: green,
    },
    colorWarning: {
        main: orange,
    },
    colorDark: {
        dark: black,
        light: grey100,
        main: grey75,
    },
    colorMedium: {
        dark: grey50,
        light: grey10, // @TODO discuss this with Marrick since this is the same color as the colorDisabled.main
        main: grey25,
    },
    colorLight: {
        dark: grey5,
        light: white,
        main: grey2,
    },
    spacingUnit: '8px',
};

export default themeBasic;
