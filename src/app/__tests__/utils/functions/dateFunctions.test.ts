import {
    currentDate,
    formatTime,
    isFutureDate,
    isValidDate,
    isValidStringDate,
    isValidStringDateWithOptionalTime,
    toDate,
    toMoment,
} from '../../../utils/functions/dateFunctions';
import moment from 'moment';

describe('test date functions', () => {
    test('test formatTime', () => {
        expect(formatTime('')).toEqual('');
        expect(formatTime('2021-04-13 13:21')).toEqual('13:21');
        expect(formatTime('2021-04-13 13:21', false)).toEqual('13:21');
        expect(formatTime('2021-04-13 03:21')).toEqual('03:21');
        expect(formatTime('2021-04-13 03:21', false)).toEqual('3:21');
    });

    test('test isValidStringDate', () => {
        expect(isValidStringDate('2021-05-10T17:12:00+0200')).toBe(false);
        expect(isValidStringDate('2021-05-10')).toBe(true);
    });

    test('test isValidStringDateWithOptionalTime', () => {
        expect(isValidStringDateWithOptionalTime('2021-05-10T17:12:00+0200')).toBe(true);
        expect(isValidStringDateWithOptionalTime('2021-05-10')).toBe(true);
    });

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
        expect(isValidDate('2021-05-10T17:12:00+0200')).toBe(true);
        expect(isValidDate('30-09-2021')).toBe(false);
        expect(isValidDate('BU-0360')).toBe(false);
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
        expect(toMoment('2021-09-30')?.date()).toBe(30);
        expect(toMoment('2021-09-30')?.month()).toBe(8);
        expect(toMoment('2021-09-30')?.year()).toBe(2021);
        expect(toMoment('2021-09-30')?.hours()).toBe(12);
        expect(toMoment('2021-09-31')).toBe(null); // this date doesn't exist in the calendar
        expect(toMoment('2021-05-10T17:12:00+0200')?.date()).toBe(10);
    });

    test('test toDate', () => {
        expect(toDate('')).toBe(null);
        expect(toDate('2021-09-30')?.getDate()).toBe(30);
        expect(toDate('2021-09-30')?.getMonth()).toBe(8);
        expect(toDate('2021-09-30')?.getFullYear()).toBe(2021);
        expect(toDate('2021-09-31')).toBe(null); // this date doesn't exist in the calendar
    });
});
