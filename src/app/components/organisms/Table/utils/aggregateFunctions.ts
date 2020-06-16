import { Row } from 'react-table';
import { toMoney } from '../../../../utils/functions/financialFunctions';

export const sum = (data: Row<Record<string, unknown>>[], accessor: string, isCurrency = false): number => {
    const values = data.map((row: Row<Record<string, unknown>>) =>
        row.values[accessor] !== undefined ? (row.values[accessor] as number | string) : 0
    );

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
