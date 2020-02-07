import { Row } from 'react-table';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TableInstance {
    canNextPage: boolean;
    canPreviousPage: boolean;
    getTableBodyProps: (...args: any[]) => any;
    getTableProps: (...args: any[]) => any;
    gotoPage: (...args: any[]) => any;
    headerGroups: any[];
    nextPage: (...args: any[]) => any;
    page: Row[];
    pageCount: number;
    prepareRow: (...args: any[]) => any;
    previousPage: (...args: any[]) => any;
    rows: object[];
    setPageSize: (...args: any[]) => any;
    state: {
        pageIndex: number;
        pageSize: number;
    };
}
