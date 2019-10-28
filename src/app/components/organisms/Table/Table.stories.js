import { boolean, select } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../molecules/Button/Button';
import Table from './Table';
import { useTable } from 'react-table';

export default { title: 'organisms/Table' };

const rowColorInfo = (value) => {
    if (value > 66) {
        return '#85cc00';
    }

    if (value > 33) {
        return '#ffbf00';
    }

    return '#ff2e00';
};

function getInfo(row) {
    return (
        <div
            style={{
                backgroundColor: '#dadada',
                borderRadius: '2px',
                height: '100%',
                width: '100%',
            }}
        >
            <div
                style={{
                    backgroundColor: rowColorInfo(row.value),
                    borderRadius: '2px',
                    height: '100%',
                    transition: 'all .2s ease-out',
                    width: `${row.value}%`,
                }}
            />
        </div>
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
            },
            {
                companyName: 'Dexels',
                firstName: 'Maria',
                infix: null,
                info: 45,
                lastName: 'Papadaki',
            },
            {
                companyName: 'Cygni',
                firstName: 'David',
                infix: 'de',
                info: 30,
                lastName: 'Lusenet',
            },
            {
                companyName: 'Dexels',
                firstName: 'Firstname',
                infix: null,
                info: 1,
                lastName: 'Lastname 1',
            },
            {
                companyName: 'Dexels',
                firstName: 'Firstname',
                infix: null,
                info: 15,
                lastName: 'Lastname 2',
            },
            {
                companyName: 'Dexels',
                firstName: 'Firstname',
                infix: null,
                info: 90,
                lastName: 'Lastname 3',
            },
            {
                companyName: 'Dexels',
                firstName: 'Firstname',
                infix: null,
                info: 120,
                lastName: 'Lastname 4',
            },
            {
                companyName: 'Dexels',
                firstName: 'Firstname',
                infix: null,
                info: null,
                lastName: 'Lastname 5',
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
                        Header: 'First Name',
                        accessor: 'firstName',
                    },
                    {
                        Header: 'Last Name',
                        accessor: 'lastName',
                    },
                    {
                        Header: 'Infix',
                        accessor: 'infix',
                    },
                ],
            },
            {
                Header: 'InfoGroup',
                columns: [
                    {
                        Header: 'Company',
                        accessor: 'companyName',
                    },
                    {
                        Cell: (row) => getInfo(row),
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
                Header: 'First Name',
                accessor: 'firstName',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
            },
            {
                Header: 'Infix',
                accessor: 'infix',
            },
            {
                Header: 'Company',
                accessor: 'companyName',
            },
            {
                Cell: (row) => getInfo(row),
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
    const [hasGroupHeader, setHasGroupHeader] = useState(true);

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
                elevation={select('Elevation', Table.elevations, Table.defaultProps.elevation)}
                instance={myTable(hasGroupHeader ? tableColumnsWithGroupHeader() : tableColumns(), tableData())}
                isFullWidth={boolean('Is full width', Table.defaultProps.isFullWidth)}
            />
        </>
    );
};
