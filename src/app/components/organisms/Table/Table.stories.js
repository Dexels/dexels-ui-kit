import { boolean, select } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import Button from '../../molecules/Button/Button';
import Table from './Table';
import { useTable } from 'react-table';

export default { title: 'organisms/Table' };

function tableData() {
    return React.useMemo(
        () => [
            {
                companyName: 'Dexels',
                firstName: 'Erik',
                infix: null,
                info: 'Builds stuff',
                lastName: 'Versteeg',
            },
            {
                companyName: 'Dexels',
                firstName: 'Maria',
                infix: null,
                info: 'Builds other stuff',
                lastName: 'Papadaki',
            },
            {
                companyName: 'Cygni',
                firstName: 'David',
                infix: 'de',
                info: 'Builds stuff but temporarily',
                lastName: 'Lusenet',
            },
            {
                companyName: 'Dexels',
                firstName: 'Firstname',
                infix: null,
                info: null,
                lastName: 'Lastname 1',
            },
            {
                companyName: 'Dexels',
                firstName: 'Firstname',
                infix: null,
                info: null,
                lastName: 'Lastname 2',
            },
            {
                companyName: 'Dexels',
                firstName: 'Firstname',
                infix: null,
                info: null,
                lastName: 'Lastname 3',
            },
            {
                companyName: 'Dexels',
                firstName: 'Firstname',
                infix: null,
                info: null,
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
                Header: 'Info',
                columns: [
                    {
                        Header: 'Company',
                        accessor: 'companyName',
                    },
                    {
                        Header: 'Info',
                        accessor: 'info',
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
                Header: 'Info',
                accessor: 'info',
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
