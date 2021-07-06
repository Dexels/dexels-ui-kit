import { toCents, toMoneyValue } from '../../../utils/functions/financialFunctions';
import { Locale } from '../../../types';

describe('test financial functions', () => {
    test('test toCents', () => {
        expect(toCents('0.5')).toBe(50);
        expect(toCents('0.50')).toBe(50);
        expect(toCents('0.51')).toBe(51);
        expect(toCents('100')).toBe(10000);
    });

    test('test toMoneyValue', () => {
        expect(toMoneyValue('0,50', Locale.NL)).toBe(0.5);
        expect(toMoneyValue('0,51', Locale.NL)).toBe(0.51);
        expect(toMoneyValue('1,50', Locale.NL)).toBe(1.5);
        expect(toMoneyValue('1.000,52', Locale.NL)).toBe(1000.52);

        expect(toMoneyValue('0,.50', Locale.EN)).toBe(0.5);
        expect(toMoneyValue('0.51', Locale.EN)).toBe(0.51);
        expect(toMoneyValue('1.50', Locale.EN)).toBe(1.5);
        expect(toMoneyValue('1,000.52', Locale.EN)).toBe(1000.52);
    });
});
