import { currentDate, isFutureDate, isValidDate, toMoment } from '../../../utils/functions/dateFunctions';
import moment from 'moment';

describe('test date functions', () => {
    // test('test formatTime', () => {
    //     expect(formatTime('')).toEqual('');
    //     expect(formatTime('2021-04-13T13:21:50.000Z')).toEqual('15:21');
    //     expect(formatTime('2021-04-13T13:21:50.000Z', false)).toEqual('15:21');
    //     expect(formatTime('2021-04-13T03:21:50.000Z')).toEqual('05:21');
    //     expect(formatTime('2021-04-13T03:21:50.000Z', false)).toEqual('5:21');
    //     expect(formatTime('2021-04-13 13:21')).toEqual('13:21');
    //     expect(formatTime('2021-04-13 13:21', false)).toEqual('13:21');
    //     expect(formatTime('2021-04-13 03:21')).toEqual('03:21');
    //     expect(formatTime('2021-04-13 03:21', false)).toEqual('3:21');
    //     expect(formatTime(moment('2021-04-13T13:21:50.000Z').toDate())).toEqual('15:21');
    //     expect(formatTime(moment('2021-04-13T13:21:50.000Z').toDate(), false)).toEqual('15:21');
    //     expect(formatTime(moment('2021-04-13T03:21:50.000Z').toDate())).toEqual('05:21');
    //     expect(formatTime(moment('2021-04-13T03:21:50.000Z').toDate(), false)).toEqual('5:21');
    //     expect(formatTime(moment('2021-04-13T13:21:50.000Z'))).toEqual('15:21');
    //     expect(formatTime(moment('2021-04-13T13:21:50.000Z'), false)).toEqual('15:21');
    //     expect(formatTime(moment('2021-04-13T03:21:50.000Z'))).toEqual('05:21');
    //     expect(formatTime(moment('2021-04-13T03:21:50.000Z'), false)).toEqual('5:21');
    // });

    test('test isValidDate', () => {
        expect(isValidDate(currentDate())).toBe(true);
        expect(isValidDate('2000-02-29')).toBe(true); // is leap year, so should be true
        expect(isValidDate('2021-02-29')).toBe(false); // this date doesn't exist in the calendar
        expect(isValidDate('2021-09-31')).toBe(false); // this date doesn't exist in the calendar
        expect(isValidDate('2021-09-30')).toBe(true);
        expect(isValidDate('21')).toBe(false);
        expect(isValidDate('2021-03-26T13:21:50.000Z')).toBe(true);
        expect(isValidDate('Tue Apr 13 2021 00:00:00 GMT+0200 (Central European Summer Time)')).toBe(true);
        expect(isValidDate('commissie 1')).toBe(false);
        expect(isValidDate('30-09-2021')).toBe(false);
    });

    test('test isFutureDate', () => {
        expect(isFutureDate(null)).toBe(false);
        expect(isFutureDate(moment())).toBe(false);
        expect(isFutureDate(moment(), true)).toBe(true);
        expect(isFutureDate(toMoment('2021-04-08'), true)).toBe(false);
        expect(isFutureDate(moment().add(1, 'day'), true)).toBe(true);
        expect(isFutureDate(moment().add(1, 'day'))).toBe(true);
    });

    // test('test toMoment', () => {
    //     expect(toMoment('')).toBe(null);
    //     expect(toMoment('2021-09-30')).toStrictEqual(moment('2021-09-30').locale(Locale.NL));
    //     expect(toMoment('2021-09-31')).toBe(null); // this date doesn't exist in the calendar
    // });

    // test('test toDate', () => {
    //     expect(toDate('')).toBe(null);
    //     expect(toDate('2021-09-30')).toMatchObject(moment('2021-09-30').locale(Locale.NL).toDate());

    //     expect(toDate('2000-02-29')).toStrictEqual(moment('2000-02-29').locale(Locale.NL).toDate());
    //     expect(toDate('2021-09-31')).toBe(null); // this date doesn't exist in the calendar
    //     expect(toDate('2021-09-31')).toBe(null); // this date doesn't exist in the calendar
    // });
});
