import { usePagination, useSortBy, useTable } from 'react-table';

export function createTable(
    columns,
    data,
    disableSorting = false,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    // state: { pageIndex, pageSize },
) {
    return useTable(
        {
            columns,
            data,
            disableSorting,
            initialState: { pageIndex: 2 },
        },
        useSortBy,
        usePagination,
    );
}

export default createTable;
