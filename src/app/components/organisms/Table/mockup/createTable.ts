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
    columns: Array<Column<T>>,
    data: Array<T>,
    initialState?: object,
): TableInstance<T> => (
    useTable<T>(
        {
            columns,
            data,
            initialState,
        },
        useColumnOrder,
        useGlobalFilter,
        useGroupBy,
        useExpanded,
        useFilters,
        useRowState,
        useSortBy,
        useRowSelect,
        usePagination,
    )
);

export default createTable;
