import { CellProps, Column } from 'react-table';
import {
    customSortByDate,
    getColumnWidth,
    renderCell,
    renderStatusCell,
} from '../utils/tableFunctions';
import { getTableCell, renderButton } from './tableFunctions';
import React from 'react';
import { TableData } from './tableData';

export const tableColumns: (data: TableData[]) => Column<TableData>[] = (data) => (
    React.useMemo(() => [
        {
            Cell: (row: CellProps<TableData>) => renderCell(row),
            accessor: 'id',
        },
        {
            Cell: (row: CellProps<TableData>) => renderStatusCell(
                row.cell.row.original.matchTaskStatus, row.cell.value,
            ),
            accessor: 'status',
            disableSortBy: true,
            hasCellPadding: false,
            width: 50,
        },
        {
            Cell: (row: CellProps<TableData>) => renderCell(row),
            Header: 'First Name',
            accessor: 'firstName',
            // TIP: event can be left out. Default = null
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onClick: (cell: any, row: any, event: any) => getTableCell(cell, row, event),
            width: getColumnWidth(data, 'firstName', 'First Name'),
        },
        {
            Cell: (row: CellProps<TableData>) => renderCell(row),
            Header: 'Last Name',
            accessor: 'lastName',
            width: '40%',
        },
        {
            Cell: (row: CellProps<TableData>) => renderCell(row),
            Header: 'Infix',
            accessor: 'infix',
            width: getColumnWidth(data, 'infix'),
        },
        {
            Cell: (row: CellProps<TableData>) => renderCell(row),
            Header: 'Company',
            accessor: 'companyName',
            width: getColumnWidth(data, 'companyName', 'Company'),
        },
        {
            Cell: (row: CellProps<TableData>) => renderCell(row),
            Header: 'Startdate',
            accessor: 'relationStart',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            sortType: (a: any, b: any, propName: any) => customSortByDate(a, b, propName),
            width: getColumnWidth(data, 'relationStart', 'Startdate'),
        },
        {
            Cell: (row: CellProps<TableData>) => renderCell(row),
            Header: 'Info',
            accessor: 'info',
            sortType: 'basic',
            width: getColumnWidth(data, 'info'),
        },
        {
            Cell: (row: CellProps<TableData>) => renderButton(row),
            Header: 'Action',
            accessor: 'action',
            disableSortBy: true,
            width: getColumnWidth(data, 'action'),
        },
    ], [])
);

export const tableColumnsWithGroupHeader: () => Column<TableData>[] = () => (
    React.useMemo(() => [
        {
            Header: 'Name',
            columns: [
                {
                    Cell: (row: CellProps<TableData>) => renderStatusCell(
                        row.cell.row.original.matchTaskStatus, row.cell.value,
                    ),
                    // Header: 'Status',
                    accessor: 'status',
                    disableSortBy: true,
                },
                {
                    Cell: (row: CellProps<TableData>) => renderCell(row),
                    Header: 'First Name',
                    accessor: 'firstName',
                    // TIP: event can be left out. Default = null
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onClick: (cell: any, row: any, event: any) => getTableCell(cell, row, event),
                },
                {
                    Cell: (row: CellProps<TableData>) => renderCell(row),
                    Header: 'Last Name',
                    accessor: 'lastName',
                },
                {
                    Cell: (row: CellProps<TableData>) => renderCell(row),
                    Header: 'Infix',
                    accessor: 'infix',
                },
                {
                    Cell: (row: CellProps<TableData>) => renderCell(row),
                    Header: 'Startdate',
                    accessor: 'relationStart',
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    sortType: (a: any, b: any, propName: any) => customSortByDate(a, b, propName),
                },
            ],
        },
        {
            Header: 'InfoGroup',
            columns: [
                {
                    Cell: (row: CellProps<TableData>) => renderCell(row),
                    Header: 'Company',
                    accessor: 'companyName',
                },
                {
                    Cell: (row: CellProps<TableData>) => renderCell(row),
                    Header: 'Info',
                    accessor: 'info',
                    sortType: 'basic',
                },
                {
                    Cell: (row: CellProps<TableData>) => renderButton(row),
                    Header: 'Action',
                    accessor: 'action',
                    disableSortBy: true,
                },
            ],
        },
    ], [])
);
