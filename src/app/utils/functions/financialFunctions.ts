import currency, { Options } from 'currency.js';
import { CurrencyLocale, Locale } from '../../types';

export interface Currency extends currency {}

export const defaultCurrencySettings = (hasRounding = false): Options => {
    return {
        decimal: ',',
        formatWithSymbol: true,
        increment: hasRounding ? 0.05 : 0,
        negativePattern: '-!#',
        pattern: '!#',
        precision: 2,
        separator: '.',
        symbol: '€ ',
    };
};

export const EUR = (value: number | string, hasRounding = true) =>
    currency(value, {
        ...defaultCurrencySettings(hasRounding),
    });

export const GBP = (value: number | string, hasRounding = false) =>
    currency(value, {
        ...defaultCurrencySettings(hasRounding),
        decimal: '.',
        separator: ',',
        symbol: '£ ',
    });

export const KZT = (value: number | string, hasRounding = false) =>
    currency(value, {
        ...defaultCurrencySettings(hasRounding),
        symbol: '₸ ',
    });

export const RUB = (value: number | string, hasRounding = false) =>
    currency(value, {
        ...defaultCurrencySettings(hasRounding),
        symbol: '₽ ',
    });

export const USD = (value: number | string, hasRounding = false) =>
    currency(value, {
        ...defaultCurrencySettings(hasRounding),
        decimal: '.',
        separator: ',',
        symbol: '$ ',
    });

export const toMoney = (
    value: number | string,
    currencyLocale: CurrencyLocale = CurrencyLocale.EUR,
    locale?: Locale
): Currency => {
    switch (currencyLocale) {
        case CurrencyLocale.GBP:
            return GBP(value);

        case CurrencyLocale.KZT:
            return KZT(value);

        case CurrencyLocale.RUB:
            return RUB(value);

        case CurrencyLocale.USD:
            return USD(value);

        default:
            // Rounding is default for NL, hence the check
            return EUR(value, locale && locale === Locale.NL);
    }
};

export const toMoneyValue = (
    value: number | string,
    currencyLocale: CurrencyLocale = CurrencyLocale.EUR,
    locale?: Locale
): number => toMoney(value, currencyLocale, locale).value;

export const formatMoney = (
    value: number | string,
    currencyLocale: CurrencyLocale = CurrencyLocale.EUR,
    locale?: Locale
): string => toMoney(value, currencyLocale, locale).format(true);
