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
            initialState: {
                pageIndex: 0,
                sortBy: [
                    {
                        desc: false,
                        id: 'lastName',
                    },
                    {
                        desc: false,
                        id: 'firstName',
                    },
                ],
            },
            // orderByFn,
        },
        useSortBy,
        usePagination,
    )
);

export default createTable;
