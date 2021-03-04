/* eslint-disable padding-line-between-statements */
import { Currencies, IconType, Locale } from '../../types';
import currency, { Options as currencyOptions } from 'currency.js';
import { DEFAULT_LOCALE } from '../../../global/constants';
import { isDotDecimalCountry } from './localeFunctions';

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

export const defaultCurrencySettings = (hasRounding = false, hasSymbol = true, locale?: Locale): currencyOptions => ({
    decimal: ',',
    fromCents: false,
    increment: hasRounding ? 0.05 : 0,
    negativePattern: '-!#',
    pattern: '!#',
    precision: 2,
    separator: '.',
    symbol: hasSymbol ? `${getCurrencySymbol(locale || DEFAULT_LOCALE)} ` : '',
});

export const EUR = (value: number | string, hasRounding = false, hasSymbol = true, locale: Locale): currency =>
    currency(value, {
        ...defaultCurrencySettings(hasRounding, hasSymbol, locale),
    });

export const GBP = (value: number | string, hasRounding = false, hasSymbol = true): currency =>
    currency(value, {
        ...defaultCurrencySettings(hasRounding, hasSymbol),
        decimal: '.',
        separator: ',',
        symbol: hasSymbol ? `${getCurrencySymbol(Locale.GB)} ` : '',
    });

export const KZT = (value: number | string, hasRounding = false, hasSymbol = true): currency =>
    currency(value, {
        ...defaultCurrencySettings(hasRounding, hasSymbol),
        symbol: hasSymbol ? `${getCurrencySymbol(Locale.KZ)} ` : '',
    });

export const RUB = (value: number | string, hasRounding = false, hasSymbol = true): currency =>
    currency(value, {
        ...defaultCurrencySettings(hasRounding, hasSymbol),
        symbol: hasSymbol ? `${getCurrencySymbol(Locale.RU)} ` : '',
    });

export const USD = (value: number | string, hasRounding = false, hasSymbol = true): currency =>
    currency(value, {
        ...defaultCurrencySettings(hasRounding, hasSymbol),
        decimal: '.',
        separator: ',',
        symbol: hasSymbol ? `${getCurrencySymbol(Locale.US)} ` : '',
    });

export const toMoneyInternal = (
    value: number | string,
    locale: Locale,
    hasRounding: boolean,
    hasSymbol: boolean
): currency => {
    switch (getCurrencyType(locale)) {
        case Currencies.GBP:
            return GBP(value, hasRounding, hasSymbol);

        case Currencies.KZT:
            return KZT(value, hasRounding, hasSymbol);

        case Currencies.RUB:
            return RUB(value, hasRounding, hasSymbol);

        case Currencies.USD:
            return USD(value, hasRounding, hasSymbol);

        default:
            // Rounding is default for NL, but we can not really apply this
            // Leaving it here as documentation though
            // return EUR(value, locale && locale === Locale.NL, hasSymbol, locale);
            return EUR(value, hasRounding, hasSymbol, locale);
    }
};

export const toMoney = (value: number | string, locale: Locale): currency =>
    toMoneyInternal(value, locale, false, true);

export const toMoneyValue = (value: number | string, locale: Locale): number => toMoney(value, locale).value;

export const formatMoney = (value: number | string, locale: Locale): string => toMoney(value, locale).format();

export const formatMoneyWithoutSymbol = (value: number | string, locale: Locale): string =>
    toMoneyInternal(value, locale, false, false).format();

// Assume that the input is in the system format 123.45, so a . as decimal separator
export const convertToLocaleValue = (value: number | string, locale: Locale): string =>
    isDotDecimalCountry(locale)
        ? value.toString()
        : value.toString().replace('.', ';').replace(',', '.').replace(';', ',');
