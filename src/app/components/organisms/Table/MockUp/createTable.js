import { usePagination, useSortBy, useTable } from 'react-table';
import { customSortByCaseInsensitive } from '../utils/tableFunctions';

export function createTable(
    columns,
    data,
    disableMultiSort = false,
    disableSorting = false,
    orderByFn = customSortByCaseInsensitive,
) {
    return useTable(
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
            orderByFn,
        },
        useSortBy,
        usePagination,
    );
}

export default createTable;
