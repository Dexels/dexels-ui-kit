import { customSortByDate, renderCell, renderStatusCell } from '../utils/tableFunctions';
import { getTableCell, renderButton } from './tableFunctions';
import React from 'react';

const getColumnWidth = (data, accessor, headerText = accessor) => {
    // console.log('*********************** columnWidth', data, accessor, headerText);

    if (typeof accessor === 'string' || accessor instanceof String) {
        accessor = (d) => d[accessor]; // eslint-disable-line no-param-reassign
    }

    const maxWidth = 600;
    const magicSpacing = 10;

    const cellLength = Math.max(
        ...data.map((row) => (`${accessor(row)}` || '').length),
        headerText.length,
    );

    return `${Math.min(maxWidth, cellLength * magicSpacing)}px`;
};

export const tableColumns = (data) => (
    React.useMemo(() => [
        {
            Cell: (row) => renderStatusCell(row.cell.row.original.matchTaskStatus, row.cell.value),
            // Header: '',
            accessor: 'status',
            disableSorting: true,
            show: true,
            width: '50px',
        },
        {
            Cell: (row) => renderCell(row),
            Header: 'First Name',
            accessor: 'firstName',
            // TIP: event can be left out. Default = null
            onClick: (cell, row, event) => getTableCell(cell, row, event),
            width: getColumnWidth(data, 'firstName', 'First Name'),
        },
        {
            Cell: (row) => renderCell(row),
            Header: 'Last Name',
            accessor: 'lastName',
            width: '40%',
        },
        {
            Cell: (row) => renderCell(row),
            Header: 'Infix',
            accessor: 'infix',
            width: getColumnWidth(data, 'infix'),
        },
        {
            Cell: (row) => renderCell(row),
            Header: 'Company',
            accessor: 'companyName',
            width: getColumnWidth(data, 'companyName', 'Company'),
        },
        {
            Cell: (row) => renderCell(row),
            Header: 'Startdate',
            accessor: 'relationStart',
            sortType: (a, b, propName) => customSortByDate(a, b, propName),
            width: getColumnWidth(data, 'relationStart', 'Startdate'),
        },
        {
            Cell: (row) => renderCell(row),
            Header: 'Info',
            accessor: 'info',
            sortType: 'basic',
            width: getColumnWidth(data, 'info'),
        },
        {
            Cell: (row) => renderButton(row),
            Header: 'Action',
            accessor: 'action',
            disableSorting: true,
            width: getColumnWidth(data, 'action'),
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
                    // TIP: event can be left out. Default = null
                    onClick: (cell, row, event) => getTableCell(cell, row, event),
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
