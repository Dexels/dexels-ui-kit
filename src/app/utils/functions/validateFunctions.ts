export const isEmpty = (value: string | unknown | undefined): boolean => {
    if (typeof value === 'string') {
        return value === null || value === '';
    }

    if (typeof value === 'object') {
        // eslint-disable-next-line @typescript-eslint/ban-types
        return !Object.keys(value as object).length;
    }

    return false;
};

export const isValidEmail = (value: string): boolean => {
    // eslint-disable-next-line max-len
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailRegex.test(value);
};

export const isValidPhoneNumber = (value: string): boolean => {
    const phoneRegExp = /^(\+(([0-9]){1,2})[-.])?((((([0-9]){2,3})[-.]){1,2}([0-9]{4,10}))|([0-9]{10}))$/;

    return phoneRegExp.test(value);
};
