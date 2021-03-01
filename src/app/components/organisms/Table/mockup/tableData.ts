import moment, { Moment } from 'moment';
import { Status } from '../../../../types';

export interface TableData {
    amount: number | string;
    companyName: string;
    firstName: string;
    id: string;
    infix?: string;
    info?: number;
    lastName: string;
    relationStart?: Moment;
    status: Status;
}

const makeTableData = (amount = 15): TableData[] => {
    const result: TableData[] = [];

    for (let i = 1; i <= amount; i += 1) {
        result.push({
            amount: 123,
            companyName: `Dexels ${i}`,
            firstName: `Firstname ${i}`,
            id: `${i}`,
            infix: undefined,
            info: undefined,
            lastName: `Lastname ${i}`,
            relationStart: moment(),
            status: Status.VALID,
        });
    }

    return result;
};

export const tableData = (): TableData[] => {
    const result = makeTableData(100);

    result.push({
        amount: 0,
        companyName: 'Dexels',
        firstName: 'Anna',
        id: '186',
        infix:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        info: 66,
        lastName: 'Achternaam',
        relationStart: moment(),
        status: Status.INVALID,
    });

    result.push({
        amount: 10985,
        companyName: 'Dexels',
        firstName: 'Erik',
        id: '187',
        infix: undefined,
        info: 66,
        lastName: 'Versteeg',
        relationStart: moment(),
        status: Status.INVALID,
    });

    result.push({
        amount: 0,
        companyName: 'Dexels',
        firstName: 'Lange voornaam',
        id: '188',
        infix: 'een net iets te lange infix',
        info: 66,
        lastName: 'Achternaam met best veel tekens in de naam',
        relationStart: moment(),
        status: Status.INVALID,
    });

    result.push({
        amount: -1,
        companyName: 'Dexels',
        firstName: 'erik',
        id: '189',
        infix: undefined,
        info: 66,
        lastName: 'Versteeg',
        relationStart: moment(),
        status: Status.INVALID,
    });

    result.push({
        amount: -10985,
        companyName: 'Dexels',
        firstName: 'Maria',
        id: '190',
        infix: undefined,
        info: 45,
        lastName: 'Papadaki',
        relationStart: undefined,
        status: Status.ALERT,
    });

    result.push({
        amount: 25.87,
        companyName: 'Cygni',
        firstName: 'David',
        id: '200',
        infix: 'de',
        info: 30,
        lastName: 'Lusenet',
        relationStart: moment('2019-10-01'),
        status: Status.VALID,
    });

    result.push({
        amount: 123.5432,
        companyName: 'Dexels',
        firstName: 'Firstname',
        id: '300',
        infix: undefined,
        info: 1,
        lastName: 'Lastname 1',
        relationStart: moment('2018-10-01'),
        status: Status.INVALID,
    });

    result.push({
        amount: 123.48,
        companyName: 'Dexels',
        firstName: 'Firstname',
        id: '301',
        infix: undefined,
        info: 1,
        lastName: 'Lastname 1 rounded +',
        relationStart: moment('2018-10-01'),
        status: Status.INVALID,
    });

    result.push({
        amount: 123.42,
        companyName: 'Dexels',
        firstName: 'Firstname',
        id: '302',
        infix: undefined,
        info: 1,
        lastName: 'Lastname 1 rounded -',
        relationStart: moment('2018-10-01'),
        status: Status.INVALID,
    });

    result.push({
        amount: 123.42,
        companyName: 'Dexels',
        firstName: 'Firstname',
        id: '303',
        infix: undefined,
        info: 1,
        lastName: 'Lastname 1 not rounded BE',
        relationStart: moment('2018-10-01'),
        status: Status.INVALID,
    });

    result.push({
        amount: 652464,
        companyName: 'Dexels',
        firstName: 'Firstname',
        id: '400',
        infix: undefined,
        info: undefined,
        lastName: 'Lastname 2',
        relationStart: moment(),
        status: Status.DEFAULT,
    });

    result.push({
        amount: 652464,
        companyName: 'Dexels',
        firstName: 'Firstname',
        id: '401',
        infix: undefined,
        info: undefined,
        lastName: 'Lastname 2 UK',
        relationStart: moment(),
        status: Status.DEFAULT,
    });

    result.push({
        amount: 1212,
        companyName: 'Dexels',
        firstName: 'Firstname',
        id: '500',
        infix: undefined,
        info: 90,
        lastName: 'Lastname 3',
        relationStart: moment('2019-10-02'),
        status: Status.DISABLED,
    });

    result.push({
        amount: '',
        companyName: 'Dexels',
        firstName: 'Firstname',
        id: '600',
        infix: undefined,
        info: 120,
        lastName: 'Lastname 4',
        relationStart: moment('2012-10-01'),
        status: Status.NONE,
    });

    result.push({
        amount: '',
        companyName: 'Dexels',
        firstName: 'Firstname',
        id: '700',
        infix: undefined,
        info: undefined,
        lastName: 'Lastname 5',
        relationStart: moment('2020-01-01'),
        status: Status.VALID,
    });

    return result;
};

export default tableData;
