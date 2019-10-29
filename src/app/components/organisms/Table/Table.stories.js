import { boolean, select, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../molecules/Button/Button';
import StatusIndicator from '../../atoms/StatusIndicator/StatusIndicator';
import Table from './Table';
import { useTable } from 'react-table';

export default { title: 'organisms/Table' };

const cellValue = (row) => {
    if (row.cell.value && row.cell.value !== null && row.cell.value !== undefined) {
        return row.cell.value;
    }

    return '';
};

function getStatus(row) {
    return (
        <StatusIndicator placement={StatusIndicator.placements.LEFT} status={row.cell.value ? row.cell.value : 'NONE'}>
            <div>
                {row.cell.value ? row.cell.value : 'NONE'}
            </div>
        </StatusIndicator>
    );
}

function getButton(row) {
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

function tableData() {
    return React.useMemo(
        () => [
            {
                companyName: 'Dexels',
                firstName: 'Erik',
                infix: null,
                info: 66,
                lastName: 'Versteeg',
                status: 'VALID',
            },
            {
                companyName: 'Dexels',
                firstName: 'Maria',
                infix: null,
                info: 45,
                lastName: 'Papadaki',
                status: 'WARNING',
            },
            {
                companyName: 'Cygni',
                firstName: 'David',
                infix: 'de',
                info: 30,
                lastName: 'Lusenet',
                status: 'ERROR',
            },
            {
                companyName: 'Dexels',
                firstName: 'Firstname',
                infix: null,
                info: 1,
                lastName: 'Lastname 1',
                status: null,
            },
            {
                companyName: 'Dexels',
                firstName: 'Firstname',
                infix: null,
                info: 15,
                lastName: 'Lastname 2',
                status: 'DEFAULT',
            },
            {
                companyName: 'Dexels',
                firstName: 'Firstname',
                infix: null,
                info: 90,
                lastName: 'Lastname 3',
                status: 'DISABLED',
            },
            {
                companyName: 'Dexels',
                firstName: 'Firstname',
                infix: null,
                info: 120,
                lastName: 'Lastname 4',
                status: 'NONE',
            },
            {
                companyName: 'Dexels',
                firstName: 'Firstname',
                infix: null,
                info: null,
                lastName: 'Lastname 5',
                status: 'VALID',
            },
        ],
        [],
    );
}

function tableColumnsWithGroupHeader() {
    return React.useMemo(
        () => [
            {
                Header: 'Name',
                columns: [
                    {
                        Cell: (row) => getStatus(row),
                        Header: 'Status',
                        accessor: 'status',
                    },
                    {
                        Cell: (row) => cellValue(row),
                        Header: 'First Name',
                        accessor: 'firstName',
                    },
                    {
                        Cell: (row) => cellValue(row),
                        Header: 'Last Name',
                        accessor: 'lastName',
                    },
                    {
                        Cell: (row) => cellValue(row),
                        Header: 'Infix',
                        accessor: 'infix',
                    },
                ],
            },
            {
                Header: 'InfoGroup',
                columns: [
                    {
                        Cell: (row) => cellValue(row),
                        Header: 'Company',
                        accessor: 'companyName',
                    },
                    {
                        Cell: (row) => cellValue(row),
                        Header: 'Info',
                        accessor: 'info',
                    },
                    {
                        Cell: (row) => getButton(row),
                        Header: 'Action',
                        accessor: 'action',
                    },
                ],
            },
        ],
        [],
    )
}

function tableColumns() {
    return React.useMemo(
        () => [
            {
                Cell: (row) => getStatus(row),
                Header: 'Status',
                accessor: 'status',
            },
            {
                Cell: (row) => cellValue(row),
                Header: 'First Name',
                accessor: 'firstName',
            },
            {
                Cell: (row) => cellValue(row),
                Header: 'Last Name',
                accessor: 'lastName',
            },
            {
                Cell: (row) => cellValue(row),
                Header: 'Infix',
                accessor: 'infix',
            },
            {
                Cell: (row) => cellValue(row),
                Header: 'Company',
                accessor: 'companyName',
            },
            {
                Cell: (row) => cellValue(row),
                Header: 'Info',
                accessor: 'info',
            },
            {
                Cell: (row) => getButton(row),
                Header: 'Action',
                accessor: 'action',
            },
        ],
        [],
    );
}

function myTable(columns, data) {
    return useTable({
        columns,
        data,
    });
}

export const Configurable = () => {
    const [hasGroupHeader, setHasGroupHeader] = useState(false);

    return (
        /* @TODO: figure out how to rerender with the correct columns. Most likely with React.useEffect */
        <>
            <Button
                onClick={() => setHasGroupHeader(!hasGroupHeader)}
                variant={Button.variants.FILLED}
            >
                {hasGroupHeader ? 'WITH GROUP HEADER' : 'WITHOUT GROUP HEADER'}
            </Button>
            <div style={{ height: '20px' }} />
            <Table
                caption={text('Table caption', 'Table caption')}
                elevation={select('Elevation', Table.elevations, Table.defaultProps.elevation)}
                instance={myTable(hasGroupHeader ? tableColumnsWithGroupHeader() : tableColumns(), tableData())}
                isFullWidth={boolean('Is full width', Table.defaultProps.isFullWidth)}
            />
        </>
    );
};
