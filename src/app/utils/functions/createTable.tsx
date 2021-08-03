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
import { Alignment } from '../../types';
import { DEFAULT_LOCALE } from '../../../global/constants';
import { RowSelectionCheckbox } from '../../components/organisms/Table/RowSelectionCheckbox/RowSelectionCheckbox';

const selectionHook =
    (minimumSelected: number | undefined, maximumSelected: number | undefined, propNameRowSelectAllowed: string) =>
    <D extends object>(hooks: Hooks<any>) => {
        const validateSelectionCount = (
            rows: Row<D>[],
            minimumSelectedValue: number | undefined,
            maximumSelectedValue: number | undefined
        ): boolean => {
            const currentSelectedRowCount = rows.filter((rowItem: Row<D>) => rowItem.isSelected).length;
            const maxCount = maximumSelectedValue !== undefined ? maximumSelectedValue : -1;
            const minCount = minimumSelectedValue !== undefined ? minimumSelectedValue : -1;
            let hasError = false;

            if (!hasError && minCount !== -1 && maxCount === -1) {
                hasError = currentSelectedRowCount < minCount;
            }

            if (!hasError && minCount === -1 && maxCount !== -1) {
                hasError = currentSelectedRowCount > maxCount;
            }

            if (!hasError && minCount !== -1 && maxCount !== -1) {
                hasError = currentSelectedRowCount < minCount || currentSelectedRowCount > maxCount;
            }

            return hasError;
        };

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
                Cell: ({ row, rows }: CellProps<any>) => {
                    const isRowSelectAllowedValue =
                        row.original[propNameRowSelectAllowed as keyof D] === undefined ||
                        row.original[propNameRowSelectAllowed as keyof D];

                    // Set disabled prop for usage in getToggleAllRowsSelectedProps
                    // eslint-disable-next-line no-param-reassign
                    row.isDisabled = !isRowSelectAllowedValue;

                    // Set hasError prop for row when appropriate. Might be used for some other purpose, hence the variable
                    const hasError = validateSelectionCount(rows, minimumSelected, maximumSelected);

                    return (
                        <RowSelectionCheckbox
                            isDisabled={!isRowSelectAllowedValue || (hasError && !row.isSelected)}
                            selectedProps={row.getToggleRowSelectedProps()}
                        />
                    );
                },
                Header: ({ getToggleAllPageRowsSelectedProps, rows }: HeaderProps<never>) =>
                    minimumSelected === -1 &&
                    maximumSelected === -1 && (
                        <RowSelectionCheckbox
                            isDisabled={rows.length === 0}
                            isHeader
                            selectedProps={getToggleAllPageRowsSelectedProps()}
                        />
                    ),
                align: Alignment.CENTER,
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

export interface TableMultiSelectProps {
    isMultiSelect: boolean;
    maximumSelected?: number;
    minimumSelected?: number;
    propNameRowSelectAllowed?: string;
}

// Mind the order of the hooks, this is not random, but required by the package
/* eslint-disable @typescript-eslint/ban-types */
export const createTable = <T extends object>(
    columns: Column<T>[],
    data: T[],
    initialState?: Partial<TableState<T>>,
    defaultColumn?: Partial<Column<T>>,
    locale = DEFAULT_LOCALE,
    tableMultiSelectProps?: TableMultiSelectProps
): TableInstance<T> => {
    const isMultiSelect = tableMultiSelectProps ? tableMultiSelectProps.isMultiSelect : false;

    const maximumSelected =
        isMultiSelect && tableMultiSelectProps && tableMultiSelectProps.maximumSelected !== undefined
            ? tableMultiSelectProps.maximumSelected
            : -1; // -1 means no limitation

    const minimumSelected =
        isMultiSelect && tableMultiSelectProps && tableMultiSelectProps.minimumSelected !== undefined
            ? tableMultiSelectProps.minimumSelected
            : -1; // -1 means no limitation

    const propNameRowSelectAllowed =
        isMultiSelect && tableMultiSelectProps
            ? tableMultiSelectProps.propNameRowSelectAllowed || 'isRowSelectAllowed'
            : '';

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
              selectionHook(minimumSelected, maximumSelected, propNameRowSelectAllowed) // required for multi select
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
