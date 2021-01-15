export const toBoolean = (value: string | number | null | undefined): boolean => {
    switch (value) {
        case 1:
            return true;

        case 'true':
            return true;

        default:
            return false;
    }
};

export default toBoolean;
