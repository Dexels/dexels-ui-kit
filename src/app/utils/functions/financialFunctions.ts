import { CurrencyLocale, Locale } from '../../types';
import currency from 'currency.js';

export const defaultCurrencySettings = (hasRounding = false): currency.Options => {
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
): currency => {
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

export const toMoneyValue = (value: number | string, currencyLocale: CurrencyLocale = CurrencyLocale.EUR): number =>
    toMoney(value, currencyLocale).value;

export const formatMoney = (value: number | string, currencyLocale: CurrencyLocale = CurrencyLocale.EUR): string =>
    toMoney(value, currencyLocale).format(true);
