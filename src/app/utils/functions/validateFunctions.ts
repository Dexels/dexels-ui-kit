import { Locale } from '../../types';

export const areEqualObjects = (prevObject: Record<string, unknown>, nextObject: Record<string, unknown>): boolean => {
    const prevKeys = Object.keys(prevObject);
    const nextKeys = Object.keys(nextObject);

    if (
        prevKeys.filter((key) => !nextKeys.includes(key)).length > 0 ||
        nextKeys.filter((key) => !prevKeys.includes(key)).length > 0
    ) {
        return false;
    }

    const differValues = prevKeys.filter((key) => {
        if (typeof prevObject[key] === 'object') {
            return false;
        }

        return prevObject[key] !== nextObject[key];
    });

    if (differValues.length > 0) {
        return false;
    }

    return true;
};

// Returns keys of changed values when prevObject and nextObject are object of the same interface
export const compareObjects = <T extends Record<string, unknown>>(prevObject: T, nextObject: T): Array<keyof T> =>
    Object.keys(prevObject).filter((key) => {
        if (typeof prevObject[key] === 'object') {
            return JSON.stringify(prevObject[key]) !== JSON.stringify(nextObject[key]);
        }

        return prevObject[key] !== nextObject[key];
    });

export const isEmpty = (value: string | unknown | undefined): boolean => {
    if (typeof value === 'string') {
        return value === null || value === '';
    }

    if (typeof value === 'object') {
        return !Object.keys(value as Record<string, unknown>).length;
    }

    return false;
};

export const isValidEmail = (value: string): boolean => {
    // eslint-disable-next-line max-len
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailRegex.test(value);
};

export const isValidPhoneNumber = (value: string): boolean => {
    const phoneRegExp = /^(\+(([0-9]){1,2})[-.])?((((([0-9]){2,3})[-.]){1,2}([0-9]{4,10}))|([0-9]{10}))$/;

    return phoneRegExp.test(value);
};

export const isValidNumber = (value: string, allowDecimals = false, locale?: Locale): boolean => {
    let numberRegExp;

    switch (locale) {
        case Locale.US:
            numberRegExp = allowDecimals ? /^-?[0-9]+(,[0-9]{3})*(\.[0-9]{1,2})?$/ : /^-?[0-9]+(,[0-9]{3})*$/;
            break;

        default:
            numberRegExp = allowDecimals ? /^-?[0-9]+(\.[0-9]{3})*(,[0-9]{1,2})?$/ : /^-?[0-9]+(\.[0-9]{3})*$/;
            break;
    }

    return numberRegExp.test(value);
};

export const isValidMoney = (value: string, locale?: Locale): boolean => {
    return isValidNumber(value, true, locale);
};
