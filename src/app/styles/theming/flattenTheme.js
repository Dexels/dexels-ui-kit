const flattenTheme = (theme) => {
    const flattenedTheme = {};
    const colorGroups = Object.keys(theme).filter((themeKey) => typeof theme[themeKey] === 'object');

    colorGroups.forEach((colorGroup) => {
        Object.keys(theme[colorGroup]).forEach((colorKey) => {
            flattenedTheme[`${colorGroup}-${colorKey}`] = theme[colorGroup][colorKey];
        });
    });

    return flattenedTheme;
};

export default flattenTheme;
