export const areEqualObjects = (prevObject: Record<string, unknown>, nextObject: Record<string, unknown>): boolean => {
    const prevKeys = Object.keys(prevObject);
    const nextKeys = Object.keys(nextObject);

    if (
        prevKeys.filter((key) => !nextKeys.includes(key)).length > 0 ||
        nextKeys.filter((key) => !prevKeys.includes(key)).length > 0
    ) {
        return false;
    }

    const differValues = prevKeys.filter((key) => {
        if (typeof prevObject[key] === 'object') {
            return false;
        }

        return prevObject[key] !== nextObject[key];
    });

    if (differValues.length > 0) {
        return false;
    }

    return true;
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
export const getObjectDifference = <T extends Record<string, unknown>>(
    prevObject: T,
    nextObject: T
): Array<keyof T> => {
    const prevKeys = Object.keys(prevObject);
    const nextKeys = Object.keys(nextObject);

    let differKeys = prevKeys.filter((key) => !nextKeys.includes(key));

    if (differKeys.length > 0) {
        return differKeys;
    }

    differKeys = nextKeys.filter((key) => !prevKeys.includes(key));

    if (differKeys.length > 0) {
        return differKeys;
    }

    return Object.keys(prevObject).filter((key) => {
        if (typeof prevObject[key] === 'object') {
            return JSON.stringify(prevObject[key]) !== JSON.stringify(nextObject[key]);
        }

        return prevObject[key] !== nextObject[key];
    });
};
