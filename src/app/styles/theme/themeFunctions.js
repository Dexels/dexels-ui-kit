import * as themes from './themes';

const SESSIONITEM_NAME = 'theme';

export const DEFAULT_THEME = {
    layout: 'basic',
    mode: 'basic',
};

const getThemeIndex = (themeName = 'basic') => {
    let themeIndex = 0;

    Object.keys(themes).forEach((theme, index) => {
        if (theme === themeName) {
            themeIndex = index;
        }
    });

    return themeIndex;
};

export const getAvailableThemes = () => {
    const themeArray = [];

    Object.keys(themes).forEach((theme) => {
        themeArray.push(theme);
    });

    return themeArray;
};

const getThemeComponentObject = (themeObject, name) => {
    let prop = {};

    Object.keys(themeObject).forEach((themeKey) => {
        if (name === themeKey) {
            prop = themeObject[themeKey];
        }
    });

    return prop;
};

const getThemeObject = (theme = DEFAULT_THEME) => {
    console.log('*************************** themes', Object.keys(themes));
    console.log('*************************** theme.mode', theme.mode);
    console.log('*************************** themes.findIndex', Object.keys(themes).findIndex((mode) => mode === theme.mode));
    console.log('*************************** themes.find', Object.keys(themes).find((mode) => mode === theme.mode));
    // const object = themes[Object.keys(themes)[Object.keys(themes).findIndex((mode) => mode === theme.mode)];
    const object = themes[Object.keys(themes)[getThemeIndex(theme.mode)]];

    return object;
};

export const getSessionTheme = () => {
    const object = sessionStorage.getItem(SESSIONITEM_NAME)
        ? JSON.parse(sessionStorage.getItem(SESSIONITEM_NAME)) : DEFAULT_THEME;

    return object;
};

export const removeSessionTheme = () => {
    sessionStorage.removeItem(SESSIONITEM_NAME);
};

export const setSessionTheme = (theme = DEFAULT_THEME) => {
    sessionStorage.setItem(SESSIONITEM_NAME, JSON.stringify(theme));
};

export const getTheme = () => getThemeObject(getSessionTheme());

export const getThemeComponent = (theme) => getThemeComponentObject(getThemeObject(getSessionTheme()), theme);
