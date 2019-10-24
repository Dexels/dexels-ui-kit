const createDuiTheme = (baseTheme, overrides) => {
    const theme = {
        ...baseTheme,
    };

    Object.keys(overrides).forEach((overrideKey) => {
        if (!Object.prototype.hasOwnProperty.call(baseTheme, overrideKey)) {
            throw Error(`The theme you provided doesn't have a '${overrideKey}' key on it`);
        }

        if (typeof theme[overrideKey] === 'function') {
            throw Error(`You're not allowed to overwrite the '${overrideKey}' function`);
        }

        theme[overrideKey] = {
            ...theme[overrideKey],
            ...overrides[overrideKey],
        };
    });

    return theme;
};

export default createDuiTheme;
