export const parseInputValue = (currentTarget: EventTarget & HTMLInputElement): string => {
    const { value } = currentTarget;

    if (currentTarget.type === 'number') {
        const { max, min } = currentTarget;

        if (max && min) {
            return Math.max(Number(min), Math.min(Number(max), Number(value))).toString();
        }

        if (max) {
            return Math.min(Number(max), Number(value)).toString();
        }

        if (min) {
            return Math.max(Number(min), Number(value)).toString();
        }
    }

    return value;
};

export default parseInputValue;
