import { convertToValidURIValue } from '../../../utils/functions/linkFunctions';

describe('test link functions', () => {
    test('convertToValidURIValue', () => {
        expect(convertToValidURIValue('www.google.com')).toBe('https://www.google.com');
        expect(convertToValidURIValue('https://www.google.com')).toBe('https://www.google.com');
        expect(convertToValidURIValue('http://www.google.com')).toBe('http://www.google.com');
    });
});
