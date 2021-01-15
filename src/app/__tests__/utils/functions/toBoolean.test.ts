import toBoolean from '../../../utils/functions/toBoolean';

describe('test function toBoolean', () => {
    test('calling toBoolean with undefined object', () => {
        expect(toBoolean(undefined)).toBe(false);
    });

    test('calling toBoolean with a number different than 1', () => {
        expect(toBoolean(15)).toBe(false);
    });
});
