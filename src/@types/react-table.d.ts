import {
    Cell,
    ColumnInterface,
    Row,
    UseExpandedInstanceProps,
    UseExpandedOptions,
    UseExpandedRowProps,
    UseExpandedState,
    UseFiltersColumnOptions,
    UseFiltersColumnProps,
    UseFiltersInstanceProps,
    UseFiltersOptions,
    UseFiltersState,
    UseGroupByCellProps,
    UseGroupByColumnOptions,
    UseGroupByColumnProps,
    UseGroupByInstanceProps,
    UseGroupByOptions,
    UseGroupByRowProps,
    UseGroupByState,
    UsePaginationInstanceProps,
    UsePaginationOptions,
    UsePaginationState,
    UseRowSelectInstanceProps,
    UseRowSelectOptions,
    UseRowSelectRowProps,
    UseRowSelectState,
    UseSortByColumnOptions,
    UseSortByColumnProps,
    UseSortByInstanceProps,
    UseSortByOptions,
    UseSortByState,
} from 'react-table';

declare module 'react-table' {
    export interface TableOptions<D extends Record<string, unknown>>
        extends UseExpandedOptions<D>,
            UseFiltersOptions<D>,
            UseGroupByOptions<D>,
            UsePaginationOptions<D>,
            UseRowSelectOptions<D>,
            UseSortByOptions<D> {}

    export interface TableInstance<D extends Record<string, unknown> = {}>
        extends UseExpandedInstanceProps<D>,
            UseFiltersInstanceProps<D>,
            UseGroupByInstanceProps<D>,
            UsePaginationInstanceProps<D>,
            UseRowSelectInstanceProps<D>,
            UseSortByInstanceProps<D> {}

    export interface TableState<D extends Record<string, unknown> = {}>
        extends UseExpandedState<D>,
            UseFiltersState<D>,
            UseGroupByState<D>,
            UsePaginationState<D>,
            UseRowSelectState<D>,
            UseSortByState<D> {}

    export interface ColumnInterface<D extends Record<string, unknown> = {}>
        extends UseFiltersColumnOptions<D>,
            UseGroupByColumnOptions<D>,
            UseSortByColumnOptions<D> {
        hasCellPadding?: boolean;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onClick?: (...args: any[]) => void;
    }

    export interface ColumnInstance<D extends Record<string, unknown> = {}>
        extends UseFiltersColumnProps<D>,
            UseGroupByColumnProps<D>,
            UseSortByColumnProps<D> {}

    export interface Cell<D extends object = {}> extends UseGroupByCellProps<D> {}

    export interface Row<D extends Record<string, unknown> = {}>
        extends UseExpandedRowProps<D>,
            UseGroupByRowProps<D>,
            UseRowSelectRowProps<D> {}
}
