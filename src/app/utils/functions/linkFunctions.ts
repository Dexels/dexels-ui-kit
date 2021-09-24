import { isValidURI } from './validateFunctions';

export const convertToValidURIValue = (value: string): string => {
    if (isValidURI(value) && !value.includes('https://')) {
        return `https://${value}`;
    }

    return value;
};
