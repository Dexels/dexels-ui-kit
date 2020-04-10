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
        Cell: ({ cell }): ReactNode => renderStatusCell(cell.row.original.matchTaskStatus, cell.value),
        accessor: 'status',
        disableSortBy: true,
        hasCellPadding: false,
        width: 50,
    },
    {
        Cell: ({ cell }): ReactNode => renderCell(cell.value),
        Header: 'First Name',
        accessor: 'firstName',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onClick: (cell: any, row: any, event: any): any => getTableCell(cell, row, event),
        width: getColumnWidth(data, 'firstName', 'First Name'),
    },
    {
        Cell: ({ cell }): ReactNode => renderCell(cell.value),
        Header: 'Last Name',
        accessor: 'lastName',
        width: '40%',
    },
    {
        Cell: ({ cell }): ReactNode => renderCell(cell.value),
        Header: 'Infix',
        accessor: 'infix',
        width: getColumnWidth(data, 'infix'),
    },
    {
        Cell: ({ cell }): ReactNode => renderCell(cell.value),
        Header: 'Company',
        accessor: 'companyName',
        width: getColumnWidth(data, 'companyName', 'Company'),
    },
    {
        Cell: ({ cell }): ReactNode => renderCell(cell.value),
        Header: 'Startdate',
        accessor: 'relationStart',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        sortType: (a: any, b: any, propName: any): any => customSortByDate(a, b, propName),
        width: getColumnWidth(data, 'relationStart', 'Startdate'),
    },
    {
        Cell: ({ cell }): ReactNode => renderCell(cell.value),
        Header: 'Info',
        accessor: 'info',
        sortType: 'basic',
        width: getColumnWidth(data, 'info'),
    },
    {
        Cell: ({ cell }): ReactNode => renderButton(cell.row.index),
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
                Cell: ({ cell }): ReactNode => renderStatusCell(cell.row.original.matchTaskStatus, cell.value),
                accessor: 'status',
                disableSortBy: true,
            },
            {
                Cell: ({ cell }): ReactNode => renderCell(cell.value),
                Header: 'First Name',
                accessor: 'firstName',
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onClick: (cell: any, row: any, event: any): void => getTableCell(cell, row, event),
            },
            {
                Cell: ({ cell }): ReactNode => renderCell(cell.value),
                Header: 'Last Name',
                accessor: 'lastName',
            },
            {
                Cell: ({ cell }): ReactNode => renderCell(cell.value),
                Header: 'Infix',
                accessor: 'infix',
            },
            {
                Cell: ({ cell }): ReactNode => renderCell(cell.value),
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
                Cell: ({ cell }): ReactNode => renderCell(cell.value),
                Header: 'Company',
                accessor: 'companyName',
            },
            {
                Cell: ({ cell }): ReactNode => renderCell(cell.value),
                Header: 'Info',
                accessor: 'info',
                sortType: 'basic',
            },
            {
                Cell: ({ cell }): ReactNode => renderButton(cell.row.index),
                Header: 'Action',
                accessor: 'action',
                disableSortBy: true,
            },
        ],
    },
];
