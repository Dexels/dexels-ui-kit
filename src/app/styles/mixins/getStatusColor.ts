import { Status, Theme } from '../../types';

export const getStatusColor = (status: Status, theme: Theme): string => {
    switch (status) {
        case Status.NONE:
            return theme.shades.six;

        case Status.DEFAULT:
            return theme.colorPrimary;

        case Status.DISABLED:
            return theme.colorDisabled;

        case Status.INVALID:
            return theme.colorInvalid;

        case Status.VALID:
            return theme.colorValid;

        case Status.ALERT:
            return theme.colorAlert;

        default:
            return theme.colorPrimary;
    }
};

export default getStatusColor;
