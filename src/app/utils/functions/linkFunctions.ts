import { isValidURI } from './validateFunctions';

export const convertToValidURIValue = (value: string): string => {
    if (isValidURI(value) && value.indexOf('www') === 0) {
        return `https://${value}`;
    }

    return value;
};
