import {
    Cell,
    Column,
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
    interface TableOptions<D extends object>
        extends UseExpandedOptions<D>,
        UseFiltersOptions<D>,
        UseGroupByOptions<D>,
        UsePaginationOptions<D>,
        UseRowSelectOptions<D>,
        UseSortByOptions<D> {}

    interface TableInstance<D extends object = {}>
        extends UseExpandedInstanceProps<D>,
        UseFiltersInstanceProps<D>,
        UseGroupByInstanceProps<D>,
        UsePaginationInstanceProps<D>,
        UseRowSelectInstanceProps<D>,
        UseSortByInstanceProps<D> {}

    interface TableState<D extends object = {}>
        extends UseExpandedState<D>,
        UseFiltersState<D>,
        UseGroupByState<D>,
        UsePaginationState<D>,
        UseRowSelectState<D>,
        UseSortByState<D> {}

    interface Column<D extends object = {}>
        extends UseFiltersColumnOptions<D>,
        UseGroupByColumnOptions<D>,
        UseSortByColumnOptions<D> {}

    interface ColumnInstance<D extends object = {}>
        extends UseFiltersColumnProps<D>,
        UseGroupByColumnProps<D>,
        UseSortByColumnProps<D> {
        hasCellPadding?: boolean;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onClick?: (...args: any[]) => any;
        show?: boolean;
    }

    interface Cell<D extends object = {}> extends UseGroupByCellProps<D> {}

    interface Row<D extends object = {}>
        extends UseExpandedRowProps<D>,
        UseGroupByRowProps<D>,
        UseRowSelectRowProps<D> {}
}
