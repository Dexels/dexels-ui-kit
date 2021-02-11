import { Alignment, ButtonSize, ButtonVariant, IconType, Status } from '../../../../types';
import React, { ReactNode } from 'react';
import { Button } from '../../../molecules/Button/Button';
import { Column } from 'react-table';
import { ContentCell } from '../ContentCell/ContentCell';
import { customSortByDate } from '../utils/tableFunctions';
import { DEFAULT_LOCALE } from '../../../../../global/constants';
import { formatMoney } from '../../../../utils/functions/financialFunctions';
import { getTableCell } from './tableFunctions';
import { Icon } from '../../../atoms/Icon/Icon';
import { StatusCell } from '../StatusCell/StatusCell';
import { sum } from '../utils/aggregateFunctions';
import { TableData } from './tableData';

const getStatusIcon = (status: Status): IconType => {
    switch (status) {
        case Status.ALERT:
            return IconType.ROUND_INFO;

        case Status.DEFAULT:
            return IconType.CHECK;

        case Status.DISABLED:
            return IconType.ROUND_HELP;

        case Status.INVALID:
            return IconType.ROUND_CROSS;

        case Status.NONE:
            return IconType.ROUND_MINUS;

        case Status.VALID:
            return IconType.CHECK;

        default:
            return IconType.CHECK;
    }
};

export const tableColumns = (): Column<TableData>[] => [
    {
        Aggregated: () => 'Totalen',
        Cell: ({ value }): ReactNode => <StatusCell icon={getStatusIcon(value)} status={value} />,
        accessor: 'status',
        aggregate: 'text',
        disableSortBy: true,
        hasCellPadding: false,
        width: 56,
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell value={value} />,
        Header: 'First Name',
        accessor: 'firstName',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onClick: (cell: any, row: any, event: any): any => getTableCell(cell, row, event),
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell isBold value={value} />,
        Header: 'Last Name',
        accessor: 'lastName',
        width: '35%',
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell value={value} />,
        Header: 'Infix',
        accessor: 'infix',
        width: 75.5,
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell hasLineThrough value={value} />,
        Header: 'Company',
        accessor: 'companyName',
        width: '30%',
    },
    {
        Aggregated: ({ rows }) =>
            formatMoney(
                sum(
                    rows.map((row) => (row.values.amount !== undefined ? (row.values.amount as number | string) : 0)),
                    true,
                    DEFAULT_LOCALE
                ),
                DEFAULT_LOCALE
            ),
        Cell: ({ value }): ReactNode => <ContentCell colorNegativeAmount="red" isCurrency value={value} />,
        Header: 'Amount',
        accessor: 'amount',
        aggregate: 'sum',
        align: Alignment.RIGHT,
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell value={value} />,
        Header: 'Startdate',
        accessor: 'relationStart',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        sortType: (a: any, b: any, propName: any): any => customSortByDate(a, b, propName),
    },
    {
        Aggregated: ({ rows }) =>
            sum(rows.map((row) => (row.values.info !== undefined ? (row.values.info as number | string) : 0))),
        Cell: ({ value }): ReactNode => <ContentCell colorNegativeAmount="red" value={value} />,
        Header: <Icon type={IconType.CARDS} />,
        accessor: 'info',
        aggregate: 'sum',
        sortType: 'basic',
        width: 60,
    },
    {
        Cell: ({ value }): ReactNode => (
            <ContentCell
                value={
                    <Button
                        iconType={IconType.SELECT}
                        onClick={(event): void => {
                            event.stopPropagation();
                            // eslint-disable-next-line no-alert
                            alert(`On click => ${value}`);
                        }}
                        size={ButtonSize.SMALL}
                        variant={ButtonVariant.TEXT_ONLY}
                    >
                        {`Button ${value}`}
                    </Button>
                }
            />
        ),
        Header: 'Action',
        accessor: 'id',
        align: Alignment.RIGHT,
        disableSortBy: true,
        width: 150,
    },
];

export const tableColumnsWithGroupHeader = (): Column<TableData>[] => [
    {
        Header: 'Name',
        columns: [
            {
                Cell: ({ value }): ReactNode => <StatusCell icon={getStatusIcon(value)} status={value} />,
                accessor: 'status',
                disableSortBy: true,
            },
            {
                Cell: ({ value }): ReactNode => <ContentCell value={value} />,
                Header: 'First Name',
                accessor: 'firstName',
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onClick: (cell: any, row: any, event: any): unknown => getTableCell(cell, row, event),
            },
            {
                Cell: ({ value }): ReactNode => <ContentCell isBold value={value} />,
                Header: 'Last Name',
                accessor: 'lastName',
            },
            {
                Cell: ({ value }): ReactNode => <ContentCell value={value} />,
                Header: 'Infix',
                accessor: 'infix',
            },
            {
                Cell: ({ value }): ReactNode => <ContentCell value={value} />,
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
                Cell: ({ value }): ReactNode => <ContentCell hasLineThrough value={value} />,
                Header: 'Company',
                accessor: 'companyName',
            },
            {
                Cell: ({ value }): ReactNode => <ContentCell colorNegativeAmount="red" isCurrency value={value} />,
                Header: 'Amount',
                accessor: 'amount',
            },
            {
                Cell: ({ value }): ReactNode => <ContentCell value={value} />,
                Header: 'Info',
                accessor: 'info',
                sortType: 'basic',
            },
            {
                Cell: ({ value }): ReactNode => (
                    <ContentCell
                        value={
                            <Button
                                iconType={IconType.SELECT}
                                onClick={(event): void => {
                                    event.stopPropagation();
                                    // eslint-disable-next-line no-alert
                                    alert(`On click => ${value}`);
                                }}
                                size={ButtonSize.SMALL}
                                variant={ButtonVariant.TEXT_ONLY}
                            >
                                {`Button ${value}`}
                            </Button>
                        }
                    />
                ),
                Header: 'Action',
                accessor: 'id',
                align: Alignment.RIGHT,
                disableSortBy: true,
            },
        ],
    },
];
