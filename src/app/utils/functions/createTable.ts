import {
    Column,
    TableInstance,
    TableState,
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
/* eslint-disable @typescript-eslint/ban-types */
export const createTable = <T extends object>(
    columns: Column<T>[],
    data: T[],
    initialState?: Partial<TableState<T>>
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
        usePagination,
        useRowSelect
    );

export default createTable;
