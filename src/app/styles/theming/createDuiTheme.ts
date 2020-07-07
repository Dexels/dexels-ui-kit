/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Theme } from '../../types';

const checkIfPropertyExists = (
    object: Record<string, unknown>,
    property: string,
    completePropertyName?: string
): Error | void => {
    if (!Object.prototype.hasOwnProperty.call(object, property)) {
        throw Error(`The theme you provided doesn't have a '${completePropertyName || property}' property on it`);
    }
};

export const createDuiTheme = (baseTheme: Theme, overrides: Partial<Theme>): Theme => {
    const theme = {
        ...baseTheme,
    };

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
                        checkIfPropertyExists(
                            baseTheme[property1][property2],
                            property3,
                            `${property1}.${property2}.${property3}`
                        );
                    });

                    theme[property1][property2] = {
                        ...theme[property1][property2],
                        ...overrides[property1][property2],
                    };
                } else {
                    theme[property1] = {
                        ...theme[property1],
                        ...overrides[property1],
                    };
                }
            });
        }
    });

    return theme;
};

export default createDuiTheme;
