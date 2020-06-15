import { Currencies, Locale } from '../../types';
import currency, { Options as currencyOptions } from 'currency.js';

export const defaultCurrencySettings = (hasRounding = false): currencyOptions => {
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

export const EUR = (value: number | string, hasRounding = false) =>
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
    currencyType: Currencies = Currencies.EUR,
    locale?: Locale
): currency => {
    switch (currencyType) {
        case Currencies.GBP:
            return GBP(value);

        case Currencies.KZT:
            return KZT(value);

        case Currencies.RUB:
            return RUB(value);

        case Currencies.USD:
            return USD(value);

        default:
            // Rounding is default for NL, hence the check
            return EUR(value, locale && locale === Locale.NL);
    }
};

export const toMoneyValue = (
    value: number | string,
    currencyType: Currencies = Currencies.EUR,
    locale?: Locale
): number => toMoney(value, currencyType, locale).value;

export const formatMoney = (
    value: number | string,
    currencyType: Currencies = Currencies.EUR,
    locale?: Locale
): string => toMoney(value, currencyType, locale).format(true);
