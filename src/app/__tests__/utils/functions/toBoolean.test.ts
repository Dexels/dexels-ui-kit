import toBoolean from '../../../utils/functions/toBoolean';

describe('test function toBoolean', () => {
    test('calling toBoolean with 1', () => {
        expect(toBoolean(1)).toBe(true);
    });

    test('calling toBoolean with "true"', () => {
        expect(toBoolean('true')).toBe(true);
    });

    test('calling toBoolean with a string other than "true"', () => {
        expect(toBoolean('nottrue')).toBe(false);
    });

    test('calling toBoolean with undefined object', () => {
        expect(toBoolean(undefined)).toBe(false);
    });

    test('calling toBoolean with a number different than 1', () => {
        expect(toBoolean(15)).toBe(false);
    });
});
