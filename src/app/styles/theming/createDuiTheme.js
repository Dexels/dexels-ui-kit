const createDuiTheme = (baseTheme, overrides) => {
    const theme = {
        ...baseTheme,
    };

    Object.keys(overrides).forEach((override) => {
        if (!Object.prototype.hasOwnProperty.call(baseTheme, override)) {
            throw Error(`The theme you provided doesn't have a '${override}' key on it`);
        }

        if (typeof theme[override] === 'function') {
            throw Error(`You're not allowed to overwrite the '${override}' function`);
        }

        if (typeof theme[override] === 'string') {
            theme[override] = overrides[override];
        }

        if (typeof overrides[override] === 'object') {
            Object.keys(overrides[override]).forEach((nestedOverride) => {
                if (typeof overrides[override][nestedOverride] === 'object') {
                    theme[override][nestedOverride] = {
                        ...theme[override][nestedOverride],
                        ...overrides[override][nestedOverride],
                    };
                } else {
                    theme[override] = overrides[override];
                }
            });
        }
    });

    return theme;
};

export default createDuiTheme;
