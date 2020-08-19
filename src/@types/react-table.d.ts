/* eslint-disable @typescript-eslint/ban-types */
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
    UseResizeColumnsColumnProps,
    UseResizeColumnsOptions,
    UseResizeColumnsProps,
    UseRowSelectInstanceProps,
    UseRowSelectOptions,
    UseRowSelectRowProps,
    UseRowSelectState,
    UseSortByColumnOptions,
    UseSortByColumnProps,
    UseSortByInstanceProps,
    UseSortByOptions,
    UseSortByState,
    UseTableColumnOptions,
} from 'react-table';
import { Alignment } from '../lib';

declare module 'react-table' {
    export interface TableOptions<D extends object>
        extends UseExpandedOptions<D>,
            UseFiltersOptions<D>,
            UseGroupByOptions<D>,
            UsePaginationOptions<D>,
            UseRowSelectOptions<D>,
            UseResizeColumnsOptions<D>,
            UseSortByOptions<D> {}

    export interface TableInstance<D extends object = {}>
        extends UseExpandedInstanceProps<D>,
            UseFiltersInstanceProps<D>,
            UseGroupByInstanceProps<D>,
            UseTableColumnOptions<D>,
            UsePaginationInstanceProps<D>,
            UseRowSelectInstanceProps<D>,
            UseSortByInstanceProps<D> {}

    export interface TableState<D extends object = {}>
        extends UseExpandedState<D>,
            UseFiltersState<D>,
            UseGroupByState<D>,
            UsePaginationState<D>,
            UseTableColumnOptions<D>,
            UseRowSelectState<D>,
            UseSortByState<D> {}

    export interface ColumnInterface<D extends object = {}>
        extends UseFiltersColumnOptions<D>,
            UseGroupByColumnOptions<D>,
            UseResizeColumnsColumnOptions<D>,
            UseSortByColumnOptions<D> {
        align?: Alignment;
        hasCellPadding?: boolean;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onClick?: (...args: any[]) => void;
    }

    export interface ColumnInstance<D extends object = {}>
        extends UseFiltersColumnProps<D>,
            UseGroupByColumnProps<D>,
            UseResizeColumnsColumnProps<D>,
            UseResizeColumnsProps<D>,
            UseSortByColumnProps<D> {}

    export interface Cell<D extends object = {}> extends UseGroupByCellProps<D> {}

    export interface Row<D extends object = {}>
        extends UseExpandedRowProps<D>,
            UseGroupByRowProps<D>,
            UseRowSelectRowProps<D> {}
}
