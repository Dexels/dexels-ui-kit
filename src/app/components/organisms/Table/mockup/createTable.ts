import {
    Column,
    TableInstance,
    usePagination,
    useSortBy,
    useTable,
} from 'react-table';

export const createTable = <T extends object>(
    columns: Column<T>[],
    data: T[],
    initialState: object,
): TableInstance => (
    useTable(
        {
            columns,
            data,
            initialState,
        },
        useSortBy,
        usePagination,
    )
);

export default createTable;
