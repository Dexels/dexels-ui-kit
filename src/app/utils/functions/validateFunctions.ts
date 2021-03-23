import { DEFAULT_LOCALE } from '../../../global/constants';
import { isDotDecimalCountry } from './localeFunctions';
import { Locale } from '../../types';
import { toMoneyValue } from './financialFunctions';
import toNumber from './toNumber';

export const isEmpty = (value: string | unknown | undefined | null | Array<unknown>): boolean => {
    if (value === null || typeof value === 'undefined') {
        return true;
    }

    if (Array.isArray(value)) {
        return value.length <= 0;
    }

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

export const isValidPhoneNumber = (value: string, locale?: Locale): boolean => {
    if (locale && locale === Locale.NL) {
        const phoneRegExp = /^(\+(([0-9]){1,2})[-. ])?((((([0-9]){2,4})[-. ]){1,2}([0-9]{4,8}))|([0-9]{10}))$/;

        return phoneRegExp.test(value);
    }

    return true; // No idea what to implement here, because this differs per Locale
};

export const isValidNumber = (value: string, allowDecimals = false, locale?: Locale): boolean => {
    const isDotDecimal = isDotDecimalCountry(locale || DEFAULT_LOCALE);
    let numberRegExp = allowDecimals ? /^-?[0-9]+(\.[0-9]{3})*(,[0-9]{1,2})?$/ : /^-?[0-9]+(\.[0-9]{3})*$/; // Default with , as decimal separator

    if (isDotDecimal) {
        numberRegExp = allowDecimals ? /^-?[0-9]+(,[0-9]{3})*(\.[0-9]{1,2})?$/ : /^-?[0-9]+(,[0-9]{3})*$/;
    }

    return numberRegExp.test(value);
};

export const isValidMoney = (value: string, locale?: Locale): boolean => {
    const localeValue = locale || DEFAULT_LOCALE;
    const decimalSeparator = isDotDecimalCountry(localeValue) ? '.' : ',';
    const startsWithZero = value.startsWith('0');

    if (startsWithZero) {
        return value === '0' || value.startsWith(`0${decimalSeparator}`);
    }

    return isValidNumber(value, true, localeValue);
};

// **** BELOW SOME GENERIC VALIDATIONS USED BY SEVERAL COMPONENTS ****

export const isValidInputCurrency = (
    value: string | null | undefined,
    locale: Locale,
    isRequired: boolean,
    minValue?: number,
    maxValue?: number
): boolean => {
    const numberValue = toMoneyValue(value || '', locale);

    return (
        (!isRequired && (isEmpty(value) || value === '0')) ||
        (!isEmpty(value) &&
            (minValue === undefined || numberValue >= minValue) &&
            (maxValue === undefined || numberValue <= maxValue) &&
            isValidMoney(value || '', locale))
    );
};

export const isValidInputEmail = (value: string | null | undefined, isRequired: boolean): boolean =>
    (isEmpty(value) && !isRequired) || (!isEmpty(value) && isValidEmail(value as string));

export const isValidInputNumber = (
    value: number | string | null | undefined,
    locale: Locale,
    isRequired: boolean,
    minValue?: number,
    maxValue?: number
): boolean => {
    const stringValue = typeof value === 'number' ? value.toString() : value;
    const numberValue = toNumber(stringValue || '0');

    return (
        (isEmpty(value) && !isRequired) ||
        (!isEmpty(value) &&
            !Number.isNaN(stringValue) &&
            (minValue === undefined || numberValue >= minValue) &&
            (maxValue === undefined || numberValue <= maxValue) &&
            isValidNumber(numberValue.toString(), true, locale))
    );
};

export const isValidInputTelephone = (
    value: string | null | undefined,
    isRequired: boolean,
    locale = DEFAULT_LOCALE
): boolean => (isEmpty(value) && !isRequired) || (!isEmpty(value) && isValidPhoneNumber(value as string, locale));

export const isValidInputText = (
    value: string | null | undefined,
    isRequired: boolean,
    minLength?: number,
    maxLength?: number
): boolean =>
    (isEmpty(value) && !isRequired) ||
    (!isEmpty(value) && (minLength === undefined || (value as string).length >= minLength)) ||
    (!isEmpty(value) && (maxLength === undefined || (value as string).length <= maxLength));
