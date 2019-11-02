import { MATCH_TASK_STATUSES } from '../StatusCell/StatusCell.consts';
import moment from 'moment';
import React from 'react';
import { STATUS_INDICATOR_STATUSES } from '../../../atoms/StatusIndicator/StatusIndicator.consts';

const makeTableData = (nrOfEntries = 15) => {
    const result = [];
    let i = 1;

    while (i <= nrOfEntries) {
        result.push({
            companyName: 'Dexels '.concat(i.toString()),
            firstName: 'Firstname'.concat(i.toString()),
            infix: undefined,
            info: undefined,
            lastName: 'Lastname '.concat(i.toString()),
            matchTaskStatus: `${MATCH_TASK_STATUSES.NO_FIELD}`,
            relationStart: moment(),
            status: `${STATUS_INDICATOR_STATUSES.VALID}`,
        });

        i++;
    }

    return result;
};

export function tableData() {
    const result = makeTableData(100);

    result.push({
        companyName: 'Dexels',
        firstName: 'Erik',
        infix: undefined,
        info: 66,
        lastName: 'Versteeg',
        matchTaskStatus: `${MATCH_TASK_STATUSES.NO_FIELD}`,
        relationStart: moment(),
        status: `${STATUS_INDICATOR_STATUSES.INVALID}`,
    });

    result.push({
        companyName: 'Dexels',
        firstName: 'erik',
        infix: undefined,
        info: 66,
        lastName: 'Versteeg',
        matchTaskStatus: `${MATCH_TASK_STATUSES.NO_FIELD}`,
        relationStart: moment(),
        status: `${STATUS_INDICATOR_STATUSES.INVALID}`,
    });

    result.push({
        companyName: 'Dexels',
        firstName: 'Maria',
        infix: null,
        info: 45,
        lastName: 'Papadaki',
        matchTaskStatus: `${MATCH_TASK_STATUSES.NO_DRESSINGROOMS}`,
        relationStart: undefined,
        status: `${STATUS_INDICATOR_STATUSES.ALERT}`,
    });

    result.push({
        companyName: 'Cygni',
        firstName: 'David',
        infix: 'de',
        info: 30,
        lastName: 'Lusenet',
        matchTaskStatus: `${MATCH_TASK_STATUSES.NONE}`,
        relationStart: moment('2019-10-01'),
        status: `${STATUS_INDICATOR_STATUSES.VALID}`,
    });

    result.push({
        companyName: 'Dexels',
        firstName: 'Firstname',
        infix: undefined,
        info: 1,
        lastName: 'Lastname 1',
        matchTaskStatus: `${MATCH_TASK_STATUSES.NO_OFFICIALS}`,
        relationStart: moment('2018-10-01'),
        status: `${STATUS_INDICATOR_STATUSES.INVALID}`,
    });

    result.push({
        companyName: 'Dexels',
        firstName: 'Firstname',
        infix: undefined,
        info: null,
        lastName: 'Lastname 2',
        matchTaskStatus: `${MATCH_TASK_STATUSES.NO_DRESSINGROOMS}`,
        relationStart: moment(),
        status: `${STATUS_INDICATOR_STATUSES.DEFAULT}`,
    });

    result.push({
        companyName: 'Dexels',
        firstName: 'Firstname',
        infix: undefined,
        info: 90,
        lastName: 'Lastname 3',
        matchTaskStatus: `${MATCH_TASK_STATUSES.NONE}`,
        relationStart: moment('2019-10-02'),
        status: `${STATUS_INDICATOR_STATUSES.DISABLED}`,
    });

    result.push({
        companyName: 'Dexels',
        firstName: 'Firstname',
        infix: undefined,
        info: 120,
        lastName: 'Lastname 4',
        matchTaskStatus: `${MATCH_TASK_STATUSES.NONE}`,
        relationStart: moment('2012-10-01'),
        status: `${STATUS_INDICATOR_STATUSES.NONE}`,
    });

    result.push({
        companyName: 'Dexels',
        firstName: 'Firstname',
        infix: undefined,
        info: undefined,
        lastName: 'Lastname 5',
        matchTaskStatus: `${MATCH_TASK_STATUSES.NO_FIELD}`,
        relationStart: moment('2020-01-01'),
        status: `${STATUS_INDICATOR_STATUSES.VALID}`,
    });

    return React.useMemo(() => result, []);
}

export default tableData;
