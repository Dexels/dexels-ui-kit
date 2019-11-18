import { cloneObject } from '../../utils/functions/objectFunctions';

const checkIfPropertyExists = (object, property, completePropertyName) => {
    if (!Object.prototype.hasOwnProperty.call(object, property)) {
        throw Error(`The theme you provided doesn't have a '${completePropertyName || property}' property on it`);
    }
};

const createDuiTheme = (baseTheme, overrides) => {
    const theme = cloneObject(baseTheme);
    // const theme = {
    //     ...baseTheme,
    // };

    Object.keys(overrides).forEach((property1) => {
        checkIfPropertyExists(baseTheme, property1);

        if (typeof theme[property1] === 'function') {
            throw Error(`You're not allowed to overwrite the '${property1}' function`);
        }

        if (typeof theme[property1] === 'string') {
            theme[property1] = overrides[property1];
        }

        if (typeof overrides[property1] === 'object') {
            Object.keys(overrides[property1]).forEach((property2) => {
                checkIfPropertyExists(baseTheme[property1], property2, `${property1}.${property2}`);

                if (typeof overrides[property1][property2] === 'object') {
                    Object.keys(overrides[property1][property2]).forEach((property3) => {
                        checkIfPropertyExists(baseTheme[property1][property2], property3, `${property1}.${property2}.${property3}`);
                        theme[property1][property2][property3] = overrides[property1][property2][property3];
                    });
                } else {
                    theme[property1][property2] = overrides[property1][property2];
                }
            });
        }
    });

    return theme;
};

export default createDuiTheme;
