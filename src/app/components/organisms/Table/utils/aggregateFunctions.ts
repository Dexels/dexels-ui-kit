import { parseMoneyValue } from '../../../../utils/functions/financialFunctions';
import { Row } from 'react-table';
import { TableData } from '../mockup/tableData';

export const sum = (data: Row<TableData>[], accessor: string): number => {
    const values = data.map((row: Row<TableData>) => (row.values[accessor] !== undefined ? row.values[accessor] : 0));

    const total = values.reduce((accumulator: number, currentValue: number) => {
        let value = currentValue;

        if (typeof currentValue === 'string') {
            value = parseMoneyValue(currentValue);
        }

        // console.log('value 2:', value);

        return accumulator + value;
    }, 0);

    return total;
};

export default sum;
