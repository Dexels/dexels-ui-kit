import {
    Column,
    TableInstance,
    usePagination,
    useSortBy,
    useTable,
} from 'react-table';
// import { customSortByCaseInsensitive } from '../utils/tableFunctions';

export const createTable = <T extends object>(
    columns: Column<T>[],
    data: T[],
    initialState: object,
    disableMultiSort = false,
    disableSorting = false,
    // orderByFn = customSortByCaseInsensitive,
): TableInstance => (
    useTable(
        {
            columns,
            data,
            disableMultiSort,
            disableSorting,
            initialState,
            // orderByFn,
        },
        useSortBy,
        usePagination,
    )
);

export default createTable;
