import * as themes from './themes';
import { textStyles } from './textStyles';
import theme from 'styled-theming';

const getThemeProp = (themeObject, themeProp) => {
    const prop = {};

    Object.keys(themeObject).forEach((themeKey) => {
        prop[themeKey] = themeObject[themeKey][themeProp];
    });

    // console.log('************************ getThemeProp (themeObject)', themeObject);
    // console.log('************************ getThemeProp (themeProp)', themeProp);
    // console.log('************************ getThemeProp', prop);

    return prop;
};

const getProp = (propSource, propObject) => {
    const prop = {};

    Object.keys(propSource).forEach((propKey) => {
        prop[propKey] = propSource[propKey][propObject];
    });

    console.log('************************ getProp', propSource, propObject, prop);

    return prop;
};

const generateTheme = (themeObject) => {
    const generatedTheme = {};
    const firstTheme = themeObject[Object.keys(themeObject)[0]];

    Object.keys(firstTheme).forEach((themeProp) => {
        let prop = getThemeProp(themeObject, themeProp);

        if (typeof prop === 'object') {
            console.log('************************ typeof 1', prop);
            // prop = getProp(firstTheme, prop);
            // console.log('************************ typeof 2', prop);
        }

        generatedTheme[themeProp] = prop;
    });

    // console.log('************************ generatedTheme (themeObject)', themeObject);
    console.log('************************ generatedTheme', generatedTheme);

    return generatedTheme;
};

// export const activeTheme = generateTheme(themes);

// export const buttonTheme = theme('mode', generateTheme(themes).button);
export const buttonTheme = theme('mode', {
    basic: generateTheme(themes).button.basic,
    dark: generateTheme(themes).button.dark,
    light: generateTheme(themes).button.light,
});
// export const buttonTheme = generateTheme(themes).button;
console.log('************************ buttonTheme 1', generateTheme(themes).button);
// console.log('************************ buttonTheme 1', JSON.stringify(generateTheme(themes).button));
// console.log('************************ buttonTheme 2', generateTheme(themes).button.basic);
console.log('************************ buttonTheme 3', buttonTheme);

export const typography = theme('mode', {
    basic: textStyles,
    dark: textStyles,
    light: textStyles,
});

export const padding = theme('layout', {
    basic: '8px',
    compact: '4px',
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
