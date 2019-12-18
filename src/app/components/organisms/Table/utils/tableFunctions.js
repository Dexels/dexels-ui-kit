import { formatDate, isValidDate } from '../../../../utils/validators/dateFunctions';
import Icon from '../../../atoms/Icon/Icon';
import React from 'react';
import StatusCell from '../StatusCell/StatusCell';

export const compareValues = (key, desc = false, caseSensitive = false) => (
    ((a, b) => {
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

        return desc ? comparison * -1 : comparison;
    })
);

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

export const customSortByCaseInsensitive = (rows, key) => (
    // @TODO: figure out how to get the active sortBy values/props and possibly deal with paging?
    rows.sort(compareValues(key))
    // return React.useMemo(() => rows.sort(compareValues('firstName')), []);
);

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

export const renderSortIcon = (column, hasUnsortedStateIcon = false) => {
    let sortIcon = null;

    if (!column.canSort) {
        return sortIcon;
    }

    if (column.isSorted) {
        if (column.isSortedDesc) {
            sortIcon = <Icon type={Icon.types.DROPDOWN} />;
        } else {
            sortIcon = <Icon type={Icon.types.DROPUP} />;
        }
    }

    if (hasUnsortedStateIcon && !column.isSorted) {
        sortIcon = <Icon type={Icon.types.DROPDOWN} />;
    }

    return sortIcon;
};

export const getColumnWidth = (data, accessor, headerText = accessor) => {
    if (typeof accessor === 'string' || accessor instanceof String) {
        accessor = (d) => d[accessor]; // eslint-disable-line no-param-reassign
    }

    const maxWidth = 600;
    const magicSpacing = 10;
    let cellLength = headerText.length;

    if (data) {
        cellLength = Math.max(
            ...data.map((row) => (`${accessor(row)}` || '').length),
            headerText.length,
        );
    }

    return `${Math.min(maxWidth, cellLength * magicSpacing)}px`;
};

export const renderStatusCell = (matchTaskStatus, status) => (
    <StatusCell matchTaskStatus={matchTaskStatus} status={status} />
);
