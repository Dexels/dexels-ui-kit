export const cloneArray = (data) => {
    const result = [];

    data.forEach((dataInstance) => {
        result.push({
            ...dataInstance,
        });
    });

    return result;
};

export default cloneArray;
