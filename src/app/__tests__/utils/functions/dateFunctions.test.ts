import { currentDate, isFutureDate, isValidDate, toDate, toMoment } from '../../../utils/functions/dateFunctions';
import { Locale } from '../../../types';
import moment from 'moment';

describe('test date functions', () => {
    test('test isValidDate', () => {
        expect(isValidDate(currentDate())).toBe(true);
        expect(isValidDate('2021-02-29')).toBe(false); // this date doesn't exist in the calendar
        expect(isValidDate('2021-09-31')).toBe(false); // this date doesn't exist in the calendar
        expect(isValidDate('2021-09-30')).toBe(true);
        expect(isValidDate('21')).toBe(false);
        expect(isValidDate('2021-03-26T13:21:50.000Z')).toBe(true);
        expect(isValidDate('Fri Mar 26 2021 14:21:50 GMT+0100 (Central European Standard Time)')).toBe(true);
        expect(isValidDate('commissie 1')).toBe(false);
        expect(isValidDate('30-09-2021')).toBe(true);
        expect(isValidDate('30-09-2021', Locale.NL)).toBe(true);
        expect(isValidDate('09-30-2021', Locale.NL, 'MM-DD-YYYY')).toBe(true);
    });

    test('test isFutureDate', () => {
        expect(isFutureDate(null)).toBe(false);
        expect(isFutureDate(moment())).toBe(false);
        expect(isFutureDate(moment(), true)).toBe(true);
        expect(isFutureDate(toMoment('2021-04-08'), true)).toBe(false);
        expect(isFutureDate(moment().add(1, 'day'), true)).toBe(true);
        expect(isFutureDate(moment().add(1, 'day'))).toBe(true);
    });

    test('test toMoment', () => {
        expect(toMoment('')).toBe(null);
        expect(toMoment('2021-09-30')).toStrictEqual(moment('2021-09-30').locale(Locale.NL));
        expect(toMoment('2021-09-31')).toBe(null); // this date doesn't exist in the calendar
    });

    test('test toDate', () => {
        expect(toDate('')).toBe(null);
        expect(toDate('2021-09-30')).toStrictEqual(moment('2021-09-30').locale('nl').toDate());
        expect(toDate('2021-09-31')).toBe(null); // this date doesn't exist in the calendar
        expect(toDate('2021-09-31')).toBe(null); // this date doesn't exist in the calendar

        // with different format than the default format
        expect(toDate('21-02-2021', Locale.NL, 'DD-MM-YYYY')).toStrictEqual(
            moment('21-02-2021', 'DD-MM-YYYY').locale(Locale.NL).toDate()
        );

        expect(toDate('02-21-2021', Locale.NL, 'MM-DD-YYYY')).toStrictEqual(
            moment('02-21-2021', 'MM-DD-YYYY').locale(Locale.NL).toDate()
        );
    });
});
