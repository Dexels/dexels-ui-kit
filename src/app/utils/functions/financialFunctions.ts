import currency from 'currency.js';
import { CurrencyLocale } from '../../types';

export const defaultCurrencySettings = (): currency.Options => {
    return {
        decimal: ',',
        formatWithSymbol: true,
        negativePattern: '-!#',
        precision: 2,
        separator: '.',
        symbol: '€ ',
    };
};

export const EUR = (value: number | string) =>
    currency(value, {
        ...defaultCurrencySettings(),
    });

export const GBP = (value: number | string) =>
    currency(value, {
        ...defaultCurrencySettings(),
        decimal: '.',
        separator: ',',
        symbol: '£ ',
    });

export const KZT = (value: number | string) =>
    currency(value, {
        ...defaultCurrencySettings(),
        symbol: '₸ ',
    });

export const RUB = (value: number | string) =>
    currency(value, {
        ...defaultCurrencySettings(),
        symbol: '₽ ',
    });

export const USD = (value: number | string) =>
    currency(value, {
        ...defaultCurrencySettings(),
        decimal: '.',
        separator: ',',
        symbol: '$ ',
    });

export const toMoney = (value: number | string, locale: CurrencyLocale = CurrencyLocale.EUR): currency => {
    switch (locale) {
        case CurrencyLocale.GBP:
            return GBP(value);

        case CurrencyLocale.KZT:
            return KZT(value);

        case CurrencyLocale.RUB:
            return RUB(value);

        case CurrencyLocale.USD:
            return USD(value);

        default:
            return EUR(value);
    }
};

export const toMoneyValue = (value: number | string, locale: CurrencyLocale = CurrencyLocale.EUR): number =>
    toMoney(value, locale).value;

export const formatMoney = (value: number | string, locale: CurrencyLocale = CurrencyLocale.EUR): string =>
    toMoney(value, locale).format(true);
