import {
    Column,
    TableInstance,
    useColumnOrder,
    useExpanded,
    useFilters,
    useGlobalFilter,
    useGroupBy,
    usePagination,
    useRowSelect,
    useRowState,
    useSortBy,
    useTable,
} from 'react-table';

// Mind the order of the hooks, this is not random, but required by the package
export const createTable = <T extends object>(
    columns: Column<T>[],
    data: T[],
    initialState?: object
): TableInstance<T> =>
    useTable<T>(
        {
            columns,
            data,
            initialState,
        },
        useColumnOrder,
        useGlobalFilter,
        useFilters,
        useGroupBy,
        useRowState,
        useSortBy,
        useExpanded,
        useRowSelect,
        usePagination
    );

export default createTable;
