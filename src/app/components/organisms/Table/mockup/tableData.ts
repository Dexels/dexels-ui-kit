import moment, { Moment } from 'moment';
import { MatchTaskStatuses } from '../StatusCell/types';
import React from 'react';
import { Status } from '../../../../types';

export interface TableData {
    companyName: string;
    firstName: string;
    infix?: string;
    info: number;
    lastName: string;
    matchTaskStatus: MatchTaskStatuses;
    relationStart: Moment;
    status: Status;
}

const makeTableData = (amount = 15) => {
    const result: TableData[] = [];

    for (let i = 1; i <= amount; i += 1) {
        result.push({
            companyName: `Dexels ${i}`,
            firstName: `Firstname ${i}`,
            infix: undefined,
            info: undefined,
            lastName: `Lastname ${i}`,
            matchTaskStatus: MatchTaskStatuses.NO_FIELD,
            relationStart: moment(),
            status: Status.VALID,
        });
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
        matchTaskStatus: MatchTaskStatuses.NO_FIELD,
        relationStart: moment(),
        status: Status.INVALID,
    });

    result.push({
        companyName: 'Dexels',
        firstName: 'Lange voornaam',
        infix: 'een net iets te lange infix',
        info: 66,
        lastName: 'Achternaam met best veel tekens in de naam',
        matchTaskStatus: MatchTaskStatuses.NO_FIELD,
        relationStart: moment(),
        status: Status.INVALID,
    });

    result.push({
        companyName: 'Dexels',
        firstName: 'erik',
        infix: undefined,
        info: 66,
        lastName: 'Versteeg',
        matchTaskStatus: MatchTaskStatuses.NO_FIELD,
        relationStart: moment(),
        status: Status.INVALID,
    });

    result.push({
        companyName: 'Dexels',
        firstName: 'Maria',
        infix: null,
        info: 45,
        lastName: 'Papadaki',
        matchTaskStatus: MatchTaskStatuses.NO_DRESSINGROOMS,
        relationStart: undefined,
        status: Status.ALERT,
    });

    result.push({
        companyName: 'Cygni',
        firstName: 'David',
        infix: 'de',
        info: 30,
        lastName: 'Lusenet',
        matchTaskStatus: MatchTaskStatuses.NONE,
        relationStart: moment('2019-10-01'),
        status: Status.VALID,
    });

    result.push({
        companyName: 'Dexels',
        firstName: 'Firstname',
        infix: undefined,
        info: 1,
        lastName: 'Lastname 1',
        matchTaskStatus: MatchTaskStatuses.NO_OFFICIALS,
        relationStart: moment('2018-10-01'),
        status: Status.INVALID,
    });

    result.push({
        companyName: 'Dexels',
        firstName: 'Firstname',
        infix: undefined,
        info: null,
        lastName: 'Lastname 2',
        matchTaskStatus: MatchTaskStatuses.NO_DRESSINGROOMS,
        relationStart: moment(),
        status: Status.DEFAULT,
    });

    result.push({
        companyName: 'Dexels',
        firstName: 'Firstname',
        infix: undefined,
        info: 90,
        lastName: 'Lastname 3',
        matchTaskStatus: MatchTaskStatuses.NONE,
        relationStart: moment('2019-10-02'),
        status: Status.DISABLED,
    });

    result.push({
        companyName: 'Dexels',
        firstName: 'Firstname',
        infix: undefined,
        info: 120,
        lastName: 'Lastname 4',
        matchTaskStatus: MatchTaskStatuses.NONE,
        relationStart: moment('2012-10-01'),
        status: Status.NONE,
    });

    result.push({
        companyName: 'Dexels',
        firstName: 'Firstname',
        infix: undefined,
        info: undefined,
        lastName: 'Lastname 5',
        matchTaskStatus: MatchTaskStatuses.NO_FIELD,
        relationStart: moment('2020-01-01'),
        status: Status.VALID,
    });

    return React.useMemo(() => result, []);
}

export default tableData;
