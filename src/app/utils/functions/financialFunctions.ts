import { Currencies, IconType, Locale } from '../../types';
import currency, { Options as currencyOptions } from 'currency.js';

export const getCurrencySymbol = (locale?: Locale): string => {
    switch (locale) {
        case Locale.KZ:
            return '₸';

        case Locale.RU:
            return '₽';

        case Locale.US:
            return '$';

        case Locale.UK || Locale.GB:
            return '£';

        default:
            // Default is Euro
            return '€';
    }
};

export const getCurrencyIcon = (locale?: Locale): IconType => {
    switch (locale) {
        case Locale.KZ:
            return IconType.CURRENCY_KZ;

        case Locale.RU:
            return IconType.CURRENCY_RU;

        case Locale.US:
            return IconType.CURRENCY_US;

        case Locale.UK || Locale.GB:
            return IconType.CURRENCY_UK;

        default:
            // Default is Euro
            return IconType.CURRENCY_EU;
    }
};

export const defaultCurrencySettings = (hasRounding = false): currencyOptions => ({
    decimal: ',',
    fromCents: false,
    increment: hasRounding ? 0.05 : 0,
    negativePattern: '-!#',
    pattern: '!#',
    precision: 2,
    separator: '.',
    symbol: `${getCurrencySymbol(Locale.NL)} `,
});

export const EUR = (value: number | string, hasRounding = false): currency =>
    currency(value, {
        ...defaultCurrencySettings(hasRounding),
    });

export const GBP = (value: number | string, hasRounding = false): currency =>
    currency(value, {
        ...defaultCurrencySettings(hasRounding),
        decimal: '.',
        separator: ',',
        symbol: `${getCurrencySymbol(Locale.GB)} `,
    });

export const KZT = (value: number | string, hasRounding = false): currency =>
    currency(value, {
        ...defaultCurrencySettings(hasRounding),
        symbol: `${getCurrencySymbol(Locale.KZ)} `,
    });

export const RUB = (value: number | string, hasRounding = false): currency =>
    currency(value, {
        ...defaultCurrencySettings(hasRounding),
        symbol: `${getCurrencySymbol(Locale.RU)} `,
    });

export const USD = (value: number | string, hasRounding = false): currency =>
    currency(value, {
        ...defaultCurrencySettings(hasRounding),
        decimal: '.',
        separator: ',',
        symbol: `${getCurrencySymbol(Locale.US)} `,
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
): string => {
    const options = { ...defaultCurrencySettings(locale && locale === Locale.NL) };

    return toMoney(value, currencyType, locale).format(options);
};

export const formatMoneyWithoutSymbol = (
    value: number | string,
    currencyType: Currencies = Currencies.EUR,
    locale?: Locale
): string => {
    const options = {
        ...defaultCurrencySettings(locale && locale === Locale.NL),
        symbol: '',
    };

    return toMoney(value, currencyType, locale).format(options);
};
