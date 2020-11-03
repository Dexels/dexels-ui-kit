export const toString = (value: string | number | boolean): string => {
    if (typeof value === 'number') {
        return value.toString();
    }

    if (typeof value === 'boolean') {
        return value === true ? 'true' : 'false';
    }

    if (typeof value === 'string') {
        return value;
    }

    return '';
};

export default toString;
