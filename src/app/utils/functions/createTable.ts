import {
    Column,
    TableInstance,
    TableState,
    useColumnOrder,
    useExpanded,
    useFilters,
    useFlexLayout,
    useGlobalFilter,
    useGroupBy,
    usePagination,
    useResizeColumns,
    useRowSelect,
    useRowState,
    useSortBy,
    useTable,
} from 'react-table';
import { useMemo } from 'react';

// Mind the order of the hooks, this is not random, but required by the package
/* eslint-disable @typescript-eslint/ban-types */
export const createTable = <T extends object>(
    columns: Column<T>[],
    data: T[],
    initialState?: Partial<TableState<T>>,
    defaultColumn?: Partial<Column<T>>
): TableInstance<T> => {
    const columnsWithDefaultProps = useMemo(
        () =>
            columns.map((column) => {
                if (column.width) {
                    return {
                        ...column,
                        disableResizing:
                            column.disableResizing === undefined && column.width ? true : column.disableResizing,
                    };
                }

                return column;
            }),
        [columns]
    );

    return useTable<T>(
        {
            columns: columnsWithDefaultProps,
            data,
            defaultColumn,
            initialState,
        },
        useResizeColumns,
        useFlexLayout,
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
};

export default createTable;
