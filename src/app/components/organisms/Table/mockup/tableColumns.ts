import { customSortByDate, getColumnWidth, renderCell, renderStatusCell } from '../utils/tableFunctions';
import { getTableCell, renderButton } from './tableFunctions';
import { Column } from 'react-table';
import { ReactNode } from 'react';
import { TableData } from './tableData';

export const tableColumns = (data: TableData[]): Column<TableData>[] => [
    {
        accessor: 'id',
    },
    {
        Cell: (row): ReactNode => renderStatusCell(row.cell.row.original.matchTaskStatus, row.cell.value),
        accessor: 'status',
        disableSortBy: true,
        hasCellPadding: false,
        width: 50,
    },
    {
        Cell: (row): ReactNode => renderCell(row),
        Header: 'First Name',
        accessor: 'firstName',
        // TIP: event can be left out. Default = null
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onClick: (cell: any, row: any, event: any): any => getTableCell(cell, row, event),
        width: getColumnWidth(data, 'firstName', 'First Name'),
    },
    {
        Cell: (row): ReactNode => renderCell(row),
        Header: 'Last Name',
        accessor: 'lastName',
        width: '40%',
    },
    {
        Cell: (row): ReactNode => renderCell(row),
        Header: 'Infix',
        accessor: 'infix',
        width: getColumnWidth(data, 'infix'),
    },
    {
        Cell: (row): ReactNode => renderCell(row),
        Header: 'Company',
        accessor: 'companyName',
        width: getColumnWidth(data, 'companyName', 'Company'),
    },
    {
        Cell: (row): ReactNode => renderCell(row),
        Header: 'Startdate',
        accessor: 'relationStart',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        sortType: (a: any, b: any, propName: any): any => customSortByDate(a, b, propName),
        width: getColumnWidth(data, 'relationStart', 'Startdate'),
    },
    {
        Cell: (row): ReactNode => renderCell(row),
        Header: 'Info',
        accessor: 'info',
        sortType: 'basic',
        width: getColumnWidth(data, 'info'),
    },
    {
        Cell: (row): ReactNode => renderButton(row),
        Header: 'Action',
        accessor: 'action',
        disableSortBy: true,
        width: getColumnWidth(data, 'action'),
    },
];

export const tableColumnsWithGroupHeader = (): Column<TableData>[] => [
    {
        Header: 'Name',
        columns: [
            {
                Cell: (row): ReactNode => renderStatusCell(row.cell.row.original.matchTaskStatus, row.cell.value),
                accessor: 'status',
                disableSortBy: true,
            },
            {
                Cell: (row): ReactNode => renderCell(row),
                Header: 'First Name',
                accessor: 'firstName',
                // TIP: event can be left out. Default = null
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onClick: (cell: any, row: any, event: any): void => getTableCell(cell, row, event),
            },
            {
                Cell: (row): ReactNode => renderCell(row),
                Header: 'Last Name',
                accessor: 'lastName',
            },
            {
                Cell: (row): ReactNode => renderCell(row),
                Header: 'Infix',
                accessor: 'infix',
            },
            {
                Cell: (row): ReactNode => renderCell(row),
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
                Cell: (row): ReactNode => renderCell(row),
                Header: 'Company',
                accessor: 'companyName',
            },
            {
                Cell: (row): ReactNode => renderCell(row),
                Header: 'Info',
                accessor: 'info',
                sortType: 'basic',
            },
            {
                Cell: (row): ReactNode => renderButton(row),
                Header: 'Action',
                accessor: 'action',
                disableSortBy: true,
            },
        ],
    },
];
