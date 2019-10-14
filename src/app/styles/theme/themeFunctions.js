import * as themes from './themes';

const ITEM_NAME = 'theme';

const getThemeIndex = (themeName = 'basic') => {
    let themeIndex = 0;

    Object.keys(themes).forEach((theme, index) => {
        if (theme === themeName) {
            themeIndex = index;
        }
    });

    return themeIndex;
};

export const getThemeNamesList = () => {
    const themeArray = [];

    Object.keys(themes).forEach((theme) => {
        themeArray.push(theme);
    });

    return themeArray;
};

export const getThemeComponentObject = (themeObject, name) => {
    let prop = {};

    Object.keys(themeObject).forEach((themeKey) => {
        if (name === themeKey) {
            prop = themeObject[themeKey];
        }
    });

    return prop;
};

export const getThemeObject = (themeName = 'basic') => {
    const themeObject = themes[Object.keys(themes)[getThemeIndex(themeName)]];

    return themeObject;
};

export const getThemeName = () => {
    return sessionStorage.getItem(ITEM_NAME) ? sessionStorage.getItem(ITEM_NAME) : 'basic';
};

export const removeThemeName = () => {
    sessionStorage.removeItem(ITEM_NAME);
};

export const setThemeName = (name = 'basic') => {
    sessionStorage.setItem(ITEM_NAME, name);
};

export const getTheme = () => {
    return getThemeObject(getThemeName());
};

export const getThemeComponent = (name) => {
    return getThemeComponentObject(getThemeObject(getThemeName()), name);
};
