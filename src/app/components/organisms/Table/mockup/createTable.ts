import {
    Column,
    TableInstance,
    useExpanded,
    useFilters,
    useGroupBy,
    usePagination,
    useSortBy,
    useTable,
} from 'react-table';

export const createTable = <T extends object>(
    columns: Array<Column<T>>,
    data: Array<T>,
    initialState?: object,
    disableSortBy?: boolean,
): TableInstance<T> => (
    useTable<T>(
        {
            columns,
            data,
            initialState,
        },
        // disableSortBy,
        useGroupBy,
        useExpanded,
        useFilters,
        useSortBy,
        usePagination,
    )
);

export default createTable;
