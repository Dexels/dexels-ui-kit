import { currentDate, isFutureDate, isValidDate, toMoment } from '../../../utils/functions/dateFunctions';
import moment, { Moment } from 'moment';
import { Locale } from '../../../types';

describe('test date functions', () => {
    test('test toMoment', () => {
        expect(toMoment('2003-12-21')).toMatchObject({} as Moment);
        expect(toMoment('21-12-2003')).toMatchObject({} as Moment);
        expect(toMoment('21-12-2003', Locale.NL, 'DD-MM-YYYY')).toMatchObject({} as Moment);
        expect(toMoment('12-21-2003', Locale.NL, 'MM-DD-YYYY')).toMatchObject({} as Moment);
        expect(toMoment('12-21-2003', Locale.EN)).toMatchObject({} as Moment);
    });

    test('test isValidDate', () => {
        expect(isValidDate(currentDate())).toBe(true);
        expect(isValidDate('21-12-2003')).toBe(true);
        expect(isValidDate('12-21-2003')).toBe(true);
        expect(isValidDate('21')).toBe(false);
        expect(isValidDate('2021-03-26T13:21:50.000Z')).toBe(true);
        expect(isValidDate('Fri Mar 26 2021 14:21:50 GMT+0100 (Central European Standard Time)')).toBe(true);
    });

    test('test isFutureDate', () => {
        expect(isFutureDate(null)).toBe(false);
        expect(isFutureDate(moment())).toBe(false);
        expect(isFutureDate(moment(), true)).toBe(true);
        expect(isFutureDate(toMoment('2021-04-08'), true)).toBe(false);
        expect(isFutureDate(moment(), true)).toBe(true);
        expect(isFutureDate(moment(), false)).toBe(false);
        expect(isFutureDate(moment().add(1, 'day'), true)).toBe(true);
        expect(isFutureDate(moment().add(1, 'day'))).toBe(true);
    });
});
