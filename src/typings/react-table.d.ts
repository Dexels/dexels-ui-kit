import {
    IdType,
    SortingRule,
    UsePaginationInstanceProps,
    UseTableInstanceProps,
    UseTableOptions,
} from 'react-table';

declare module 'react-table' {
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
        sortBy: SortingRule<D>[];
    }
}
