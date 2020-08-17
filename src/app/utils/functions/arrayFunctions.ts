export function cloneArray<T = Record<string, unknown>>(data: T[]): T[] {
    const result: T[] = [];

    data.forEach((dataInstance) => {
        result.push({
            ...dataInstance,
        });
    });

    return result;
}

export function arraysDifference<T extends Record<string, unknown>>(prevObject: T, nextObject: T): string[] {
    const prevKeys = Object.keys(prevObject);
    const keys = Object.keys(nextObject);
    const differKeys = prevKeys.filter((key) => !keys.includes(key));

    if (differKeys.length > 0) {
        return differKeys;
    }

    const differValues = prevKeys.filter((key) => {
        if (typeof prevObject[key] === 'object') {
            return JSON.stringify(prevObject[key]) !== JSON.stringify(nextObject[key]) && [];
        }

        return prevObject[key] !== nextObject[key];
    });

    return differValues;
}

export function areArraysEqual<T extends Record<string, unknown>>(prevObject: T, nextObject: T): boolean {
    const prevKeys = Object.keys(prevObject);
    const keys = Object.keys(nextObject);
    const differKeys = prevKeys.filter((key) => !keys.includes(key));

    if (differKeys.length > 0) {
        return false;
    }

    const differValues = prevKeys.filter((key) => {
        if (typeof prevObject[key] === 'object') {
            return JSON.stringify(prevObject[key]) !== JSON.stringify(nextObject[key]) && [];
        }

        return prevObject[key] !== nextObject[key];
    });

    if (differValues.length > 0) {
        return false;
    }

    return true;
}
