/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    CellProps,
    Column,
    HeaderProps,
    Hooks,
    MetaBase,
    Row,
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

const selectionHook =
    (propNameRowSelectAllowed: string) =>
    <D extends object>(hooks: Hooks<any>) => {
        // eslint-disable-next-line no-param-reassign
        hooks.getToggleAllPageRowsSelectedProps = (props: HeaderProps<never>, { instance }: MetaBase<D>) => {
            const isAllSelected = instance.page.every((row: Row<D>) => row.isDisabled || row.isSelected); // counting disabled rows as selected for all so that disabled not selected rows will not make allSelected false.
            const isSomeSelected = instance.page.some((row: Row<D>) => !row.isDisabled && row.isSelected); // counting disabled rows as not selected for some so that disabled selected rows don't get counted for some.

            return [
                props,
                {
                    checked: isAllSelected,
                    indeterminate: !isAllSelected && isSomeSelected,
                    onChange: () => {
                        instance.page.forEach((row: Row<D>) => {
                            // Skip rows that are set to disabled
                            if (!row.isDisabled) {
                                row.toggleRowSelected(!(isAllSelected || isSomeSelected));
                            }
                        });
                    },
                    style: { cursor: 'pointer' },
                },
            ];
        };

        hooks.allColumns.push((columns) => [
            {
                Cell: ({ row }: CellProps<any>) => {
                    const isRowSelectAllowedValue =
                        row.original[propNameRowSelectAllowed as keyof D] === undefined ||
                        row.original[propNameRowSelectAllowed as keyof D];

                    // Set disabled prop for usage in getToggleAllRowsSelectedProps
                    // eslint-disable-next-line no-param-reassign
                    row.isDisabled = !isRowSelectAllowedValue;

                    return (
                        <RowSelectionCheckbox
                            isDisabled={!isRowSelectAllowedValue}
                            selectedProps={row.getToggleRowSelectedProps()}
                        />
                    );
                },
                Header: ({ getToggleAllPageRowsSelectedProps, rows }: HeaderProps<never>) => (
                    <RowSelectionCheckbox
                        isDisabled={rows.length === 0}
                        isHeader
                        selectedProps={getToggleAllPageRowsSelectedProps()}
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
    isMultiSelect = false,
    propNameRowSelectAllowed = 'isRowSelectAllowed'
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

    // @TODO: figure out how to make the selectionHook conditional
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
              selectionHook(propNameRowSelectAllowed) // required for multi select
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
