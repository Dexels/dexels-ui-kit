const getColorsFromTheme = (theme, colorKeys) => {
    const colors = {};

    colorKeys.forEach((colorKey) => {
        if (typeof theme[colorKey] === 'object') {
            Object.keys(theme[colorKey]).forEach((colorName) => {
                colors[`${colorKey}-${colorName}`] = theme[colorKey][colorName];
            });
        } else {
            colors[colorKey] = theme[colorKey];
        }
    });

    return colors;
};

export default getColorsFromTheme;
