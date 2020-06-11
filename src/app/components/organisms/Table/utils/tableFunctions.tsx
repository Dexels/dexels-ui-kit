import { CellValue, UseSortByColumnProps, UseTableRowProps } from 'react-table';
import { formatDate, isValidDate } from '../../../../utils/functions/dateFunctions';
import { IconType, Status } from '../../../../types';
import React, { ReactNode } from 'react';
import ContentCell from '../mockup/ContentCell/ContentCell';
import Icon from '../../../atoms/Icon/Icon';
import { MatchTaskStatuses } from '../mockup/StatusCell/types';
import StatusCell from '../mockup/StatusCell/StatusCell';

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

export const renderCell = (value: CellValue, isAmount?: boolean): ReactNode => (
    <ContentCell isAmount={isAmount}>
        {typeof value === 'object' && isValidDate(value) ? formatDate(value) : value}
    </ContentCell>
);

export const renderSortIcon = <T extends object>(
    column: UseSortByColumnProps<T>,
    hasUnsortedStateIcon = false
): ReactNode => {
    let iconType = null;

    if (column.isSorted) {
        iconType = column.isSortedDesc ? IconType.DROPDOWN : IconType.DROPUP;
    } else if (hasUnsortedStateIcon) {
        iconType = IconType.DROPDOWN;
    }

    return iconType ? <Icon className="icon" type={iconType} /> : null;
};

export const renderStatusCell = (matchTaskStatus: MatchTaskStatuses, status: Status): JSX.Element => (
    <StatusCell matchTaskStatus={matchTaskStatus} status={status} />
);
