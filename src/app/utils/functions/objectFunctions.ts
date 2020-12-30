import { compareDates, isValidDate } from './dateFunctions';
import moment, { Moment } from 'moment';
import { isEmpty } from './validateFunctions';

const isObject = (object: unknown): boolean => {
    return object != null && typeof object === 'object';
};

const isMomentObject = (object: unknown): boolean => {
    return isObject(object) && moment.isMoment(object);
};

export const areEqualObjects = (
    prevObject: Record<string, unknown>,
    nextObject: Record<string, unknown>,
    ignoreKeys?: string[]
): boolean => {
    let prevKeys = Object.keys(prevObject);
    let nextKeys = Object.keys(nextObject);

    if (ignoreKeys && ignoreKeys.length !== 0) {
        prevKeys = prevKeys.filter((key) => !ignoreKeys.includes(key));
        nextKeys = nextKeys.filter((key) => !ignoreKeys.includes(key));
    }

    if (
        prevKeys.filter((key) => !nextKeys.includes(key)).length > 0 ||
        nextKeys.filter((key) => !prevKeys.includes(key)).length > 0
    ) {
        return false;
    }

    const isDifferenceFound = prevKeys.some((key) => {
        const prevValue = prevObject[key];
        const nextValue = nextObject[key];

        const areValidDates =
            isValidDate(prevValue as string | Date | Moment) && isMomentObject(nextValue as string | Date | Moment);

        const areObjects = isObject(prevValue) && isObject(nextValue);

        if (areValidDates) {
            return !compareDates(prevValue as Moment | Date | string, nextValue as Moment | Date | string);
        }

        if (areObjects) {
            return !areEqualObjects(
                prevValue as Record<string, unknown>,
                nextValue as Record<string, unknown>,
                ignoreKeys
            );
        }

        if (!areObjects && !(isEmpty(prevValue) && isEmpty(nextValue))) {
            // eslint-disable-next-line no-console
            console.log('[compare values]', prevValue, nextValue);

            return prevValue !== nextValue;
        }

        return false;
    });

    return !isDifferenceFound;
};

// Check the value in 2 objects of the same interface
export const isObjectPropertyChanged = <T extends Record<string, unknown>>(
    prevObject: T,
    nextObject: T,
    key: keyof T
): boolean => {
    if (typeof prevObject[key] === 'object') {
        return JSON.stringify(prevObject[key]) !== JSON.stringify(nextObject[key]);
    }

    return prevObject[key] !== nextObject[key];
};

// Returns added keys or removed keys or keys of changed values when prevObject and nextObject are object of the same interface
export const getObjectDifference = <T extends Record<string, unknown>>(prevObject: T, nextObject: T): Array<string> => {
    const prevKeys = Object.keys(prevObject);
    const nextKeys = Object.keys(nextObject);

    const differKeys = prevKeys
        .filter((key) => !nextKeys.includes(key))
        .concat(nextKeys.filter((key) => !prevKeys.includes(key)));

    const differValues = Object.keys(prevObject).filter((key) => {
        if (typeof prevObject[key] === 'object') {
            return JSON.stringify(prevObject[key]) !== JSON.stringify(nextObject[key]);
        }

        return prevObject[key] !== nextObject[key];
    });

    return Array.from(
        new Set<string>([...differKeys, ...differValues])
    );
};
