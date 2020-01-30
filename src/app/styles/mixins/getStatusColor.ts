import { Statuses, Theme } from '../../types';
import { STATUSES } from '../../utils/constants';

export const getStatusColor = (status: Statuses, theme: Theme) => {
    switch (status) {
        case STATUSES.NONE:
            return theme.shades.six;

        case STATUSES.DEFAULT:
            return theme.colorPrimary;

        case STATUSES.DISABLED:
            return theme.colorDisabled;

        case STATUSES.INVALID:
            return theme.colorInvalid;

        case STATUSES.VALID:
            return theme.colorValid;

        case STATUSES.ALERT:
            return theme.colorAlert;

        default:
            return theme.colorPrimary;
    }
};

export default getStatusColor;
