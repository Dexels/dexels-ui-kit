import moment, { Moment } from 'moment';

const isObject = (object: unknown): boolean => {
    return object != null && typeof object === 'object';
};

const isMomentObject = (object: unknown): boolean => {
    return isObject(object) && moment.isMoment(object);
};

export const areEqualObjects = (prevObject: Record<string, unknown>, nextObject: Record<string, unknown>): boolean => {
    const prevKeys = Object.keys(prevObject);
    const nextKeys = Object.keys(nextObject);

    if (
        prevKeys.filter((key) => !nextKeys.includes(key)).length > 0 ||
        nextKeys.filter((key) => !prevKeys.includes(key)).length > 0
    ) {
        return false;
    }

    const isDifferenceFound = prevKeys.some((key) => {
        const prevValue = prevObject[key];
        const nextValue = nextObject[key];

        const areMomentsObjects = isMomentObject(prevValue) && isMomentObject(nextValue);

        const areObjects = isObject(prevValue) && isObject(nextValue);

        if (
            (areMomentsObjects && !(prevValue as Moment).isSame(nextValue as Moment)) ||
            (areObjects &&
                !areEqualObjects(prevValue as Record<string, unknown>, nextValue as Record<string, unknown>)) ||
            (!areObjects && prevValue !== nextValue)
        ) {
            return true;
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
