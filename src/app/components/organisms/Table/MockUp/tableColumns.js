import { customSortByDate, renderCell, renderStatusCell } from '../utils/tableFunctions';
import React from 'react';
import { renderButton } from './tableFunctions';

export const tableColumns = () => (
    React.useMemo(() => [
        {
            Cell: (row) => renderStatusCell(row.cell.row.original.matchTaskStatus, row.cell.value),
            // Header: '',
            accessor: 'status',
            disableSorting: true,
            show: true,
        },
        {
            Cell: (row) => renderCell(row),
            Header: 'First Name',
            accessor: 'firstName',
        },
        {
            Cell: (row) => renderCell(row),
            Header: 'Last Name',
            accessor: 'lastName',
        },
        {
            Cell: (row) => renderCell(row),
            Header: 'Infix',
            accessor: 'infix',
        },
        {
            Cell: (row) => renderCell(row),
            Header: 'Company',
            accessor: 'companyName',
        },
        {
            Cell: (row) => renderCell(row),
            Header: 'Startdate',
            accessor: 'relationStart',
            sortType: (a, b, propName) => customSortByDate(a, b, propName),
        },
        {
            Cell: (row) => renderCell(row),
            Header: 'Info',
            accessor: 'info',
            sortType: 'basic',
        },
        {
            Cell: (row) => renderButton(row),
            Header: 'Action',
            accessor: 'action',
            disableSorting: true,
        },
    ], [])
);

export const tableColumnsWithGroupHeader = () => (
    React.useMemo(() => [
        {
            Header: 'Name',
            columns: [
                {
                    Cell: (row) => renderStatusCell(row.cell.row.original.matchTaskStatus, row.cell.value),
                    // Header: 'Status',
                    accessor: 'status',
                    disableSorting: true,
                },
                {
                    Cell: (row) => renderCell(row),
                    Header: 'First Name',
                    accessor: 'firstName',
                },
                {
                    Cell: (row) => renderCell(row),
                    Header: 'Last Name',
                    accessor: 'lastName',
                },
                {
                    Cell: (row) => renderCell(row),
                    Header: 'Infix',
                    accessor: 'infix',
                },
                {
                    Cell: (row) => renderCell(row),
                    Header: 'Startdate',
                    accessor: 'relationStart',
                    sortType: (a, b, propName) => customSortByDate(a, b, propName),
                },
            ],
        },
        {
            Header: 'InfoGroup',
            columns: [
                {
                    Cell: (row) => renderCell(row),
                    Header: 'Company',
                    accessor: 'companyName',
                },
                {
                    Cell: (row) => renderCell(row),
                    Header: 'Info',
                    accessor: 'info',
                    sortType: 'basic',
                },
                {
                    Cell: (row) => renderButton(row),
                    Header: 'Action',
                    accessor: 'action',
                    disableSorting: true,
                },
            ],
        },
    ], [])
);
