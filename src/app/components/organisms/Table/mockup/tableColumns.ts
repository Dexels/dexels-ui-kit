import { customSortByDate, renderCell, renderStatusCell } from '../utils/tableFunctions';
import { getTableCell, renderButton } from './tableFunctions';
import { Alignment } from '../../../../types';
import { Column } from 'react-table';
import { formatMoney } from '../../../../utils/functions/financialFunctions';
import { ReactNode } from 'react';
import { sum } from '../utils/aggregateFunctions';
import { TableData } from './tableData';

export const tableColumns = (): Column<TableData>[] => [
    {
        Aggregated: () => 'Totalen',
        Cell: ({ row, value }): ReactNode => renderStatusCell(row.original.matchTaskStatus, value),
        accessor: 'status',
        aggregate: 'text',
        disableSortBy: true,
        hasCellPadding: false,
    },
    {
        Cell: ({ value }): ReactNode => renderCell(value),
        Header: 'First Name',
        accessor: 'firstName',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onClick: (cell: any, row: any, event: any): any => getTableCell(cell, row, event),
    },
    {
        Cell: ({ value }): ReactNode => renderCell(value),
        Header: 'Last Name',
        accessor: 'lastName',
    },
    {
        Cell: ({ value }): ReactNode => renderCell(value),
        Header: 'Infix',
        accessor: 'infix',
    },
    {
        Cell: ({ value }): ReactNode => renderCell(value),
        Header: 'Company',
        accessor: 'companyName',
    },
    {
        Aggregated: ({ rows }) => formatMoney(sum(rows, 'amount')),
        Cell: ({ value }): ReactNode => renderCell(value, true),
        Header: 'Amount',
        accessor: 'amount',
        aggregate: 'sum',
        align: Alignment.RIGHT,
    },
    {
        Cell: ({ value }): ReactNode => renderCell(value),
        Header: 'Startdate',
        accessor: 'relationStart',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        sortType: (a: any, b: any, propName: any): any => customSortByDate(a, b, propName),
    },
    {
        Aggregated: ({ rows }) => sum(rows, 'info'),
        Cell: ({ value }): ReactNode => renderCell(value),
        Header: 'Info',
        accessor: 'info',
        aggregate: 'sum',
        sortType: 'basic',
    },
    {
        Cell: ({ row }): ReactNode => renderButton(row.index),
        Header: 'Action',
        accessor: 'id',
        align: Alignment.CENTER,
        disableSortBy: true,
    },
];

export const tableColumnsWithGroupHeader = (): Column<TableData>[] => [
    {
        Header: 'Name',
        columns: [
            {
                Cell: ({ row, value }): ReactNode => renderStatusCell(row.original.matchTaskStatus, value),
                accessor: 'status',
                disableSortBy: true,
            },
            {
                Cell: ({ value }): ReactNode => renderCell(value),
                Header: 'First Name',
                accessor: 'firstName',
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onClick: (cell: any, row: any, event: any): unknown => getTableCell(cell, row, event),
            },
            {
                Cell: ({ value }): ReactNode => renderCell(value),
                Header: 'Last Name',
                accessor: 'lastName',
            },
            {
                Cell: ({ value }): ReactNode => renderCell(value),
                Header: 'Infix',
                accessor: 'infix',
            },
            {
                Cell: ({ value }): ReactNode => renderCell(value),
                Header: 'Startdate',
                accessor: 'relationStart',
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                sortType: (a: any, b: any, propName: any): any => customSortByDate(a, b, propName),
            },
        ],
    },
    {
        Header: 'InfoGroup',
        columns: [
            {
                Cell: ({ value }): ReactNode => renderCell(value),
                Header: 'Company',
                accessor: 'companyName',
            },
            {
                Cell: ({ value }): ReactNode => renderCell(value),
                Header: 'Amount',
                accessor: 'amount',
            },
            {
                Cell: ({ value }): ReactNode => renderCell(value),
                Header: 'Info',
                accessor: 'info',
                sortType: 'basic',
            },
            {
                Cell: ({ row }): ReactNode => renderButton(row.index),
                Header: 'Action',
                accessor: 'id',
                disableSortBy: true,
            },
        ],
    },
];
