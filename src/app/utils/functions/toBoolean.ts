export const toBoolean = (value: string | number | null | undefined): boolean => {
    switch (value) {
        case 0:
            return false;

        case 1:
            return true;

        case 'false':
            return false;

        case 'true':
            return true;

        default:
            return false;
    }
};

export default toBoolean;
