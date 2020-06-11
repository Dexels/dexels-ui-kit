export const toMoneyFormatter = new Intl.NumberFormat('nl-NL', {
    currency: 'EUR',
    minimumFractionDigits: 2,
    style: 'currency',
});

export const toMoney = (value: number): string => toMoneyFormatter.format(value);

export default toMoney;
