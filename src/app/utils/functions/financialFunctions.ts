/* eslint-disable padding-line-between-statements */
import { Currencies, IconType, Locale } from '../../types';
import currency, { Options as currencyOptions } from 'currency.js';
import { DEFAULT_LOCALE } from '../../../global/constants';
import { isDotDecimalCountry } from './localeFunctions';
import toNumber from './toNumber';

export const getCurrencyIcon = (locale?: Locale): IconType => {
    switch (locale) {
        case Locale.KZ:
            return IconType.CURRENCY_KZ;

        case Locale.RU:
            return IconType.CURRENCY_RU;

        case Locale.US:
            return IconType.CURRENCY_US;

        case Locale.EN:
        case Locale.GB:
        case Locale.UK:
            return IconType.CURRENCY_UK;

        default:
            // Default is Euro
            return IconType.CURRENCY_EU;
    }
};

export const getCurrencySymbol = (locale?: Locale): string => {
    switch (locale) {
        case Locale.KZ:
            return '₸';

        case Locale.RU:
            return '₽';

        case Locale.US:
            return '$';

        case Locale.EN:
        case Locale.GB:
        case Locale.UK:
            return '£';

        default:
            // Default is Euro
            return '€';
    }
};

export const getCurrencyType = (locale?: Locale): Currencies => {
    switch (locale) {
        case Locale.KZ:
            return Currencies.KZT;

        case Locale.RU:
            return Currencies.RUB;

        case Locale.US:
            return Currencies.USD;

        case Locale.EN:
        case Locale.GB:
        case Locale.UK:
            return Currencies.GBP;

        default:
            // Default is Euro
            return Currencies.EUR;
    }
};

export const defaultCurrencySettings = (
    hasRounding = false,
    hasSymbol = true,
    isCentsValue: boolean,
    locale?: Locale
): currencyOptions => ({
    decimal: ',',
    fromCents: isCentsValue,
    increment: hasRounding ? 0.05 : 0,
    negativePattern: '!-#',
    pattern: '!#',
    precision: 2,
    separator: '.',
    symbol: hasSymbol ? `${getCurrencySymbol(locale || DEFAULT_LOCALE)} ` : '',
});

export const EUR = (
    value: number | string,
    hasRounding = false,
    hasSymbol = true,
    locale: Locale,
    isCentsValue = false
): currency =>
    currency(value, {
        ...defaultCurrencySettings(hasRounding, hasSymbol, isCentsValue, locale),
    });

export const GBP = (value: number | string, hasRounding = false, hasSymbol = true, isCentsValue = false): currency =>
    currency(value, {
        ...defaultCurrencySettings(hasRounding, hasSymbol, isCentsValue),
        decimal: '.',
        separator: ',',
        symbol: hasSymbol ? `${getCurrencySymbol(Locale.GB)} ` : '',
    });

export const KZT = (value: number | string, hasRounding = false, hasSymbol = true, isCentsValue = false): currency =>
    currency(value, {
        ...defaultCurrencySettings(hasRounding, hasSymbol, isCentsValue),
        symbol: hasSymbol ? `${getCurrencySymbol(Locale.KZ)} ` : '',
    });

export const RUB = (value: number | string, hasRounding = false, hasSymbol = true, isCentsValue = false): currency =>
    currency(value, {
        ...defaultCurrencySettings(hasRounding, hasSymbol, isCentsValue),
        symbol: hasSymbol ? `${getCurrencySymbol(Locale.RU)} ` : '',
    });

export const USD = (value: number | string, hasRounding = false, hasSymbol = true, isCentsValue = false): currency =>
    currency(value, {
        ...defaultCurrencySettings(hasRounding, hasSymbol, isCentsValue),
        decimal: '.',
        separator: ',',
        symbol: hasSymbol ? `${getCurrencySymbol(Locale.US)} ` : '',
    });

export const toMoneyInternal = (
    value: number | string,
    locale: Locale,
    hasRounding: boolean,
    hasSymbol: boolean,
    isCentsValue = false
): currency => {
    switch (getCurrencyType(locale)) {
        case Currencies.GBP:
            return GBP(value, hasRounding, hasSymbol, isCentsValue);

        case Currencies.KZT:
            return KZT(value, hasRounding, hasSymbol, isCentsValue);

        case Currencies.RUB:
            return RUB(value, hasRounding, hasSymbol, isCentsValue);

        case Currencies.USD:
            return USD(value, hasRounding, hasSymbol, isCentsValue);

        default:
            // Rounding is default for NL, but we can not really apply this
            // Leaving it here as documentation though
            // return EUR(value, locale && locale === Locale.NL, hasSymbol, locale, isCentsValue);
            return EUR(value, hasRounding, hasSymbol, locale, isCentsValue);
    }
};

export const toMoney = (value: number | string, locale: Locale, isCentsValue?: boolean): currency =>
    toMoneyInternal(value, locale, false, true, isCentsValue);

export const toMoneyValue = (value: number | string, locale: Locale, isCentsValue?: boolean): number =>
    toMoney(value, locale, isCentsValue).value;

export const formatMoney = (value: number | string, locale: Locale, isCentsValue?: boolean): string =>
    toMoney(value, locale, isCentsValue).format();

export const formatMoneyWithoutSymbol = (value: number | string, locale: Locale, isCentsValue?: boolean): string =>
    toMoneyInternal(value, locale, false, false, isCentsValue).format();

// Assume that the input is in the system format 123.45, so a . as decimal separator
export const convertToLocaleValue = (value: number | string, locale: Locale): string =>
    isDotDecimalCountry(locale)
        ? value.toString()
        : value.toString().replace('.', ';').replace(',', '.').replace(';', ',');

// For easier calculating or formatting, convert the value to a cents format
// Add 00 if no decimals are present
export const toCents = (value: number | string): number => {
    let stringValue = value.toString();
    const decimalRegExp2Digits = /[.][0-9]{2}$/;
    const decimalRegExp1Digit = /[.][0-9]{1}$/;

    if (decimalRegExp2Digits.test(stringValue)) {
        // Replace all . and , with nothing ;-)
        stringValue = stringValue.replace('.', '').replace(',', '');
    } else if (decimalRegExp1Digit.test(stringValue)) {
        stringValue = `${stringValue.replace('.', '').replace(',', '')}0`;
    } else {
        stringValue += '00';
    }
    return toNumber(stringValue);
};
