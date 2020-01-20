export function cloneArray<T = object>(data: T[]) {
    const result: T[] = [];

    data.forEach((dataInstance) => {
        result.push({
            ...dataInstance,
        });
    });

    return result;
}

export default cloneArray;
