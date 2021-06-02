/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    CellProps,
    Column,
    HeaderProps,
    Hooks,
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
import React, { useMemo } from 'react';
import { DEFAULT_LOCALE } from '../../../global/constants';
import { RowSelectionCheckbox } from '../../components/organisms/Table/RowSelectionCheckbox/RowSelectionCheckbox';

// @TODO: figure out how to deal with non selectable rows
// const setSelectOptions = (hooks: Hooks<any>) => {
//     hooks.getToggleAllRowsSelectedProps = [
//         (props, { instance }) => [
//             props,
//             {
//                 onChange: () => {
//                     instance.page.forEach((row) =>
//                         row.toggleRowSelected(!instance.page.every((row) => row.isSelected))
//                     );
//                 },
//                 style: { cursor: 'pointer' },
//                 checked: instance.page.every((row) => row.isSelected),
//                 title: 'Toggle All Rows Selected',
//                 indeterminate: Boolean(
//                     !instance.isAllRowsSelected && Object.keys(instance.state.selectedRowIds).length
//                 ),
//             },
//         ],
//     ];
// };

const selectionHook = (hooks: Hooks<any>) => {
    hooks.allColumns.push((columns) => [
        // Let's make a column for selection
        {
            Cell: ({ row }: CellProps<any>) => {
                let isMultiSelectAllowedValue = true;

                // Check if the key isMultiSelectAllowed has been provided for disabling the select option
                // Mind the fact that this does not prevent the select all option from altering this value
                Object.keys(row.original).forEach((item) => {
                    if (item === 'isMultiSelectAllowed') {
                        /* eslint-disable */
                        isMultiSelectAllowedValue = row.original.isMultiSelectAllowed;
                        /* eslint-enable */
                    }
                });

                return (
                    <RowSelectionCheckbox
                        isDisabled={!isMultiSelectAllowedValue}
                        selectedProps={row.getToggleRowSelectedProps()}
                    />
                );
            },
            Header: ({ getToggleAllRowsSelectedProps, rows }: HeaderProps<never>) => (
                <RowSelectionCheckbox
                    isDisabled={rows.length === 0}
                    isHeader
                    selectedProps={getToggleAllRowsSelectedProps()}
                />
            ),
            disableGroupBy: true,
            disableResizing: true,
            hasCellPadding: false,
            id: '_selector',
            maxWidth: 32,
            minWidth: 32,
            width: 32,
        },
        ...columns,
    ]);

    hooks.useInstanceBeforeDimensions.push(({ headerGroups }) => {
        // fix the parent group of the selection button to not be resizable
        const selectionGroupHeader = headerGroups[0].headers[0];
        selectionGroupHeader.canResize = false;
    });
};

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

    const tableOptions = {
        columns: columnsWithDefaultProps,
        data,
        defaultColumn,
        initialState: {
            ...initialState,
            locale,
        },
    };

    return isMultiSelect
        ? useTable<T>(
              tableOptions,
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
              selectionHook // required for multi select
          )
        : useTable<T>(
              tableOptions,
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
