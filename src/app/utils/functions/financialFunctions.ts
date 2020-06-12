import currency from 'currency.js';
import { CurrencyLocale } from '../../types';

export const USD = (value: number | string) =>
    currency(value, {
        decimal: '.',
        formatWithSymbol: true,
        negativePattern: '-!#',
        precision: 2,
        separator: ',',
        symbol: '$ ',
    });

export const EUR = (value: number | string) =>
    currency(value, {
        decimal: ',',
        formatWithSymbol: true,
        negativePattern: '-!#',
        precision: 2,
        separator: '.',
        symbol: '€ ',
    });

export const parseMoney = (value: number | string, locale: CurrencyLocale = CurrencyLocale.EUR): currency => {
    if (locale === CurrencyLocale.USD) {
        return USD(value);
    }

    return EUR(value);
};

export const parseMoneyValue = (value: number | string, locale: CurrencyLocale = CurrencyLocale.EUR): number =>
    parseMoney(value, locale).value;

export const toMoney = (value: number | string, locale: CurrencyLocale = CurrencyLocale.EUR): currency => {
    if (locale === CurrencyLocale.USD) {
        return USD(value);
    }

    return EUR(value);
};

export const toMoneyString = (value: number | string, locale: CurrencyLocale = CurrencyLocale.EUR): string =>
    toMoney(value, locale).format(true);
