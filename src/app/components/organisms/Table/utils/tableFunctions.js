import { formatDate, isValidDate } from '../../../../utils/validators/dateFunctions';
import Icon from '../../../atoms/Icon/Icon';
import React from 'react';
import StatusCell from '../StatusCell/StatusCell';

export const renderCell = (row) => {
    if (row.cell.value && row.cell.value === null) {
        return undefined;
    }

    if (row.cell.value && row.cell.value !== undefined) {
        // console.log(typeof row.cell.value, row.cell.value);

        // console.log('**************** valid date1', row.cell.value);

        if (typeof row.cell.value === 'object' && isValidDate(row.cell.value)) {
            // console.log('**************** valid date', row.cell.value);

            return formatDate(row.cell.value);
        }

        return row.cell.value;
    }

    return '';
};

export const renderStatusCell = (matchTaskStatus, status) => (
    <StatusCell matchTaskStatus={matchTaskStatus} status={status} />
);

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

export const customSortByDate = (a, b, propName) => {
    const valueA = a.values[propName];
    const valueB = b.values[propName];
    // console.log('***************** a', valueA);
    // console.log('***************** b', valueB);

    if (!valueA) {
        return -1;
    }

    return valueA < valueB ? -1 : 1;
};
