const createDuiTheme = (baseTheme, overrides) => {
    const theme = {
        ...baseTheme,
    };

    Object.keys(overrides).forEach((overrideKey) => {
        if (!Object.prototype.hasOwnProperty.call(baseTheme, overrideKey)) {
            throw Error(`The theme you provided doesn't have a ${overrideKey} on it`);
        }

        theme[overrideKey] = {
            ...theme[overrideKey],
            ...overrides[overrideKey],
        };
    });

    return theme;
};

export default createDuiTheme;
