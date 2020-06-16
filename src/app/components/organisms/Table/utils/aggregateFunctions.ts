import { toMoney } from '../../../../utils/functions/financialFunctions';

export const sum = (values: Array<string | number>, isCurrency = false): number => {
    const total = values.reduce((accumulator: number, currentValue: number | string) => {
        // When it concerns a string, then use toMoney to get a number value
        if (typeof currentValue === 'string' && isCurrency) {
            return accumulator + toMoney(currentValue).value;
        }

        if (typeof currentValue === 'number') {
            return accumulator + currentValue;
        }

        return accumulator;
    }, 0);

    return total;
};

export default sum;
