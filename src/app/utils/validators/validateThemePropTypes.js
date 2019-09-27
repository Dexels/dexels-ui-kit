const validateThemePropTypes = (propValue, key, componentName) => {
    const themeProperty = propValue[key];

    if (themeProperty === undefined) {
        return new Error(`The theme doesn't contain the ${key} key.`);
    }

    if (typeof themeProperty !== 'string') {
        return new Error(`Invalid prop '${themeProperty}' supplied to '${componentName}': expected a string.`);
    }

    return true;
};

export default validateThemePropTypes;
