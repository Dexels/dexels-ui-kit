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
import React, { forwardRef, useEffect, useMemo, useRef } from 'react';
import { DEFAULT_LOCALE } from '../../../global/constants';
// import { SelectionControl } from '../../components/molecules/SelectionControl';

const RowSelectionCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return <input ref={resolvedRef} type="checkbox" {...rest} />;
});

// Mind the order of the hooks, this is not random, but required by the package
/* eslint-disable @typescript-eslint/ban-types */
export const createTable = <T extends object>(
    columns: Column<T>[],
    data: T[],
    initialState?: Partial<TableState<T>>,
    defaultColumn?: Partial<Column<T>>,
    locale = DEFAULT_LOCALE,
    isMultiSelect = false
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
            initialState: {
                ...initialState,
                locale,
            },
            isMultiSelect,
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
        useRowSelect,
        (hooks) => {
            hooks.visibleColumns.push((tableRowColumns) =>
                isMultiSelect
                    ? [
                          // Let's make a column for selection
                          {
                              Cell: ({ row }) => <RowSelectionCheckbox {...row.getToggleRowSelectedProps()} />,
                              Header: ({ getToggleAllRowsSelectedProps }) => (
                                  <RowSelectionCheckbox {...getToggleAllRowsSelectedProps()} />
                              ),
                              id: 'selection',
                          },
                          ...tableRowColumns,
                      ]
                    : []
            );
        }
    );
};

export default createTable;
