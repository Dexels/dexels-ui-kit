import { formatDate, isValidDate } from '../../../../utils/validators/dateFunctions';
import Icon from '../../../atoms/Icon/Icon';
import React from 'react';
import StatusCell from '../StatusCell/StatusCell';

export function compareValues(key, caseSensitive = false) {
    return ((a, b) => {
        // console.log('******************** a/b', a, b, key);
        // console.log('******************** a', a.values[key]);
        // console.log('******************** b', b.values[key]);

        if (!Object.prototype.hasOwnProperty.call(a.values, key)) {
            return 0;
        }

        const varA = (typeof a.values[key] === 'string' && caseSensitive)
            ? a.values[key].toUpperCase()
            : a.values[key];

        const varB = (typeof b.values[key] === 'string' && caseSensitive)
            ? b.values[key].toUpperCase()
            : b.values[key];

        let comparison = 0;

        if (varA >= varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }

        console.log('******************** comparison', comparison, varA, varB);

        return comparison;
    });
}

export const customSortByDate = (a, b, key, emptyValuesAtEnd = true) => {
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

export function customSortByCaseInsensitive(rows, key) {
    // @TODO: figure out how to get the active sortBy values/props and possibkly deal with paging?
    return rows.sort(compareValues('firstName'));
    // return React.useMemo(() => rows.sort(compareValues('firstName')), []);
}

export const renderCell = (row) => {
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

export const renderSortIcon = (column) => {
    let sortIcon = '';

    if (column.isSorted) {
        if (column.isSortedDesc) {
            sortIcon = <Icon type={Icon.types.DROPDOWN} />;
        } else {
            sortIcon = <Icon type={Icon.types.DROPUP} />;
        }
    }

    return sortIcon;
};

export const renderStatusCell = (matchTaskStatus, status) => (
    <StatusCell matchTaskStatus={matchTaskStatus} status={status} />
);
