import { CellProps, UseSortByColumnProps, UseTableRowProps } from 'react-table';
import { formatDate, isValidDate } from '../../../../utils/validators/dateFunctions';
import { IconType, Status } from '../../../../types';
import React, { ReactNode } from 'react';
import Icon from '../../../atoms/Icon/Icon';
import { MatchTaskStatuses } from '../StatusCell/types';
import StatusCell from '../StatusCell/StatusCell';

export const compareValues = <T extends object>(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    key: any,
    desc = false,
    caseSensitive = false
) => (a: UseTableRowProps<T>, b: UseTableRowProps<T>): number => {
    if (!Object.prototype.hasOwnProperty.call(a.values, key)) {
        return 0;
    }

    const varA = typeof a.values[key] === 'string' && caseSensitive ? a.values[key].toUpperCase() : a.values[key];

    const varB = typeof b.values[key] === 'string' && caseSensitive ? b.values[key].toUpperCase() : b.values[key];

    let comparison = 0;

    if (varA >= varB) {
        comparison = 1;
    } else if (varA < varB) {
        comparison = -1;
    }

    return desc ? comparison * -1 : comparison;
};

export const customSortByDate = <T extends object>(
    a: UseTableRowProps<T>,
    b: UseTableRowProps<T>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    key: any,
    emptyValuesAtEnd = true
): -1 | 1 => {
    const valueA = a.values[key];
    const valueB = b.values[key];

    if (!emptyValuesAtEnd && !valueA) {
        return -1;
    }

    if (emptyValuesAtEnd && !valueB) {
        return -1;
    }

    return valueA < valueB ? -1 : 1;
};

export const customSortByCaseInsensitive = <T extends object>(
    rows: UseTableRowProps<T>[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    key: any
): UseTableRowProps<T>[] =>
    // @TODO: figure out how to get the active sortBy values/props and possibly deal with paging?
    rows.sort(compareValues<T>(key));

export const renderCell = <T extends object>(row: CellProps<T>): ReactNode => {
    if (row.cell.value && row.cell.value === null) {
        return undefined;
    }

    if (row.cell.value && row.cell.value !== undefined) {
        if (typeof row.cell.value === 'object' && isValidDate(row.cell.value)) {
            return formatDate(row.cell.value);
        }

        return row.cell.value;
    }

    return '';
};

export const renderSortIcon = <T extends object>(
    column: UseSortByColumnProps<T>,
    hasUnsortedStateIcon = false
): ReactNode => {
    let sortIcon = null;

    if (!column.canSort) {
        return sortIcon;
    }

    if (column.isSorted) {
        if (column.isSortedDesc) {
            sortIcon = <Icon type={IconType.DROPDOWN} />;
        } else {
            sortIcon = <Icon type={IconType.DROPUP} />;
        }
    }

    if (hasUnsortedStateIcon && !column.isSorted) {
        sortIcon = <Icon type={IconType.DROPDOWN} />;
    }

    return sortIcon;
};

export const getColumnWidth = <T extends object>(
    data: T[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    accessor: any,
    headerText = accessor
): string => {
    if (typeof accessor === 'string' || accessor instanceof String) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        accessor = (d: any): void => d[accessor]; // eslint-disable-line no-param-reassign
    }

    const maxWidth = 600;
    const magicSpacing = 10;
    let cellLength = headerText.length;

    if (data) {
        cellLength = Math.max(...data.map((row: T) => (`${accessor(row)}` || '').length), headerText.length);
    }

    return `${Math.min(maxWidth, cellLength * magicSpacing)}px`;
};

export const renderStatusCell = (matchTaskStatus: MatchTaskStatuses, status: Status): JSX.Element => (
    <StatusCell matchTaskStatus={matchTaskStatus} status={status} />
);
