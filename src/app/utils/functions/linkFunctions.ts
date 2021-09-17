import { isValidURI } from './validateFunctions';

// Assume that the input is in the system format 123.45, so a . as decimal separator
export const convertToValidURIValue = (value: string): string => {
    if (isValidURI(value) && !value.includes('https://')) {
        return `https://${value}`;
    }

    return value;
};
