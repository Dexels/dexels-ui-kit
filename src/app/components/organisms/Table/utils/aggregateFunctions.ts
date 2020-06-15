import { Row } from 'react-table';
import { TableData } from '../mockup/tableData';
import { toMoney } from '../../../../utils/functions/financialFunctions';

export const sum = (data: Row<TableData>[], accessor: string): number => {
    const values = data.map((row: Row<TableData>) => (row.values[accessor] !== undefined ? row.values[accessor] : 0));

    const total = values.reduce((accumulator: number, currentValue: number) => {
        return accumulator + toMoney(currentValue).value;
    }, 0);

    return total;
};

export default sum;
