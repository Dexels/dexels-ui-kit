import moment, { Moment } from 'moment';
import { MatchTaskStatuses } from '../StatusCell/types';
import { Status } from '../../../../types';
import { useMemo } from 'react';

export interface TableData {
    companyName: string;
    firstName: string;
    id: number;
    infix?: string;
    info?: number;
    lastName: string;
    matchTaskStatus: MatchTaskStatuses;
    relationStart?: Moment;
    status: Status;
}

const makeTableData = (amount = 15): TableData[] => {
    const result: TableData[] = [];

    for (let i = 1; i <= amount; i += 1) {
        result.push({
            companyName: `Dexels ${i}`,
            firstName: `Firstname ${i}`,
            id: i,
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

export const tableData = (): TableData[] => {
    const result = makeTableData(100);

    result.push({
        companyName: 'Dexels',
        firstName: 'Erik',
        id: 187,
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
        id: 188,
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
        id: 189,
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
        id: 190,
        infix: undefined,
        info: 45,
        lastName: 'Papadaki',
        matchTaskStatus: MatchTaskStatuses.NO_DRESSINGROOMS,
        relationStart: undefined,
        status: Status.ALERT,
    });

    result.push({
        companyName: 'Cygni',
        firstName: 'David',
        id: 200,
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
        id: 300,
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
        id: 400,
        infix: undefined,
        info: undefined,
        lastName: 'Lastname 2',
        matchTaskStatus: MatchTaskStatuses.NO_DRESSINGROOMS,
        relationStart: moment(),
        status: Status.DEFAULT,
    });

    result.push({
        companyName: 'Dexels',
        firstName: 'Firstname',
        id: 500,
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
        id: 600,
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
        id: 700,
        infix: undefined,
        info: undefined,
        lastName: 'Lastname 5',
        matchTaskStatus: MatchTaskStatuses.NO_FIELD,
        relationStart: moment('2020-01-01'),
        status: Status.VALID,
    });

    return useMemo(() => result, []);
};

export default tableData;
