import { currentDate, isValidDate } from '../../../utils/functions/dateFunctions';

describe('test date functions', () => {
    test('test isValidDate', () => {
        expect(isValidDate(currentDate())).toBe(true);
        expect(isValidDate('21-12-2003')).toBe(true);
        expect(isValidDate('12-21-2003')).toBe(true);
        expect(isValidDate('21')).toBe(false);
        expect(isValidDate('2021-03-26T13:21:50.000Z')).toBe(true);
        expect(isValidDate('Fri Mar 26 2021 14:21:50 GMT+0100 (Central European Standard Time)')).toBe(true);
    });
});
