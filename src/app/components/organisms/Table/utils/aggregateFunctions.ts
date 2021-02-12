import { DEFAULT_LOCALE } from '../../../../../global/constants';
import { Locale } from '../../../../types';
import { toMoney } from '../../../../utils/functions/financialFunctions';

// Most unfortunate, but DEFAULT_LOCALE can not be set as deafult value in the params part
// It causes build failure
export const sum = (values: Array<string | number>, isCurrency = false, locale?: Locale): number => {
    const total = values.reduce((accumulator: number, currentValue: number | string) => {
        // When it concerns a string, then use toMoney to get a number value
        if (typeof currentValue === 'string' && isCurrency) {
            return accumulator + toMoney(currentValue, locale || DEFAULT_LOCALE).value;
        }

        if (typeof currentValue === 'number') {
            return accumulator + currentValue;
        }

        return accumulator;
    }, 0);

    return total;
};

export default sum;
