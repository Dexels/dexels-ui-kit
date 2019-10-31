import { renderCell, renderStatusCell } from '../utils/tableFunctions';
import { action } from '@storybook/addon-actions';
import Button from '../../../molecules/Button/Button';
import React from 'react';
import { tableData } from './tableData';

const data = tableData();

function customComparator(a, b) {
    // We find by key in orderValues the object which contains the value for ordering
    const orderValueA = data.find((item) => item.name === a.relationStart);
    const orderValueB = data.find((item) => item.name === b.relationStart);

    // Order them
    return orderValueA.value > orderValueB.value ? -1 : 1;
}

function renderButton(row) {
    return (
        <Button
            onClick={action('On click => '.concat(row.cell.row.index))}
            size={Button.sizes.S}
            variant={Button.variants.OUTLINE}
        >
            {'BUTTON '.concat(row.cell.row.index)}
        </Button>
    );
}

export function tableColumnsWithGroupHeader() {
    return React.useMemo(
        () => [
            {
                Header: 'Name',
                columns: [
                    {
                        Cell: (row) => renderStatusCell(row.cell.row.original.matchTaskStatus, row.cell.value),
                        Header: 'Status',
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
                        sortType: 'datetime',
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
        ],
        [],
    )
}

export function tableColumns() {
    return React.useMemo(
        () => [
            {
                Cell: (row) => renderStatusCell(row.cell.row.original.matchTaskStatus, row.cell.value),
                Header: '',
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
                Header: 'Company',
                accessor: 'companyName',
            },
            {
                Cell: (row) => renderCell(row),
                Header: 'Startdate',
                accessor: 'relationStart',
                sortFunction: customComparator,
                sortType: 'datetime',
                // accessor: (row) => {
                //     return sortDates(row.relationStart);
                // },
                // render: (row) => {
                //     return <span>{row}</span>;
                // },
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
        [],
    );
}
