import {
    ColumnInstance,
    IdType,
    SortingRule,
    UseFiltersColumnProps,
    UseGroupByColumnProps,
    UsePaginationInstanceProps,
    UseResizeColumnsColumnProps,
    UseSortByColumnProps,
    UseTableInstanceProps,
    UseTableOptions,
} from 'react-table';

declare module 'react-table' {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    export interface TableInstance<D extends object = {}>
        extends Omit<TableOptions<D>, 'columns' | 'pageCount'>,
        UsePaginationInstanceProps<D>,
        UseTableInstanceProps<D> {}
    export interface TableOptions<D extends object> extends UseTableOptions<D> {
        disableMultiSort: boolean;
        disableSorting: boolean;
    }
    export interface TableState<D extends object = {}> {
        hiddenColumns?: Array<IdType<D>>;
        pageIndex: number;
        pageSize: number;
        sortBy: SortingRule<D>[];
    }

    export interface ColumnInstance<D extends object = {}>
        extends UseFiltersColumnProps<D>,
        UseGroupByColumnProps<D>,
        UseResizeColumnsColumnProps<D>,
        UseSortByColumnProps<D> {
        hasCellPadding?: boolean;
        show?: boolean;
    }
}
