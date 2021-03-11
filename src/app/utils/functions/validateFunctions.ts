import { DEFAULT_LOCALE } from '../../../global/constants';
import { isDotDecimalCountry } from './localeFunctions';
import { Locale } from '../../types';

export const isEmpty = (value: string | unknown | undefined | null): boolean => {
    if (value === null || typeof value === 'undefined') {
        return true;
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

export const isValidPhoneNumber = (value: string): boolean => {
    const phoneRegExp = /^(\+(([0-9]){1,2})[-.])?((((([0-9]){2,3})[-.]){1,2}([0-9]{4,10}))|([0-9]{10}))$/;

    return phoneRegExp.test(value);
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
    isRequired: boolean
): boolean => {
    if (isRequired && (isEmpty(value) || value === '0')) {
        return false;
    }

    if (!isRequired && (isEmpty(value) || value === '0')) {
        return true;
    }

    // Can not be undefined/null, because of previous check ...
    return isValidMoney(value || '', locale);
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

    if (Number.isNaN(stringValue)) {
        return false;
    }

    const numberValue = parseInt(stringValue || '0', 10);

    return (
        (isEmpty(numberValue) && !isRequired) ||
        (!isEmpty(numberValue) &&
            (minValue === undefined || numberValue >= minValue) &&
            (maxValue === undefined || numberValue >= maxValue) &&
            isValidNumber(numberValue.toString(), true, locale))
    );
};

export const isValidInputTelephone = (value: string | null | undefined, isRequired: boolean): boolean =>
    (isEmpty(value) && !isRequired) || (!isEmpty(value) && isValidPhoneNumber(value as string));

export const isValidInputText = (
    value: string | null | undefined,
    isRequired: boolean,
    minLength?: number,
    maxLength?: number
): boolean =>
    (isEmpty(value) && !isRequired) ||
    (!isEmpty(value) && (minLength === undefined || (value as string).length >= minLength)) ||
    (!isEmpty(value) && (maxLength === undefined || (value as string).length <= maxLength));
