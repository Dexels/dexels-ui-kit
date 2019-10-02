import {
    green,
    orange,
    purple100,
    sl10,
} from '../colors/colors';

export const getStatusColor = (status) => {
    switch (status) {
        case 'DEFAULT':
            return purple100;

        case 'DISABLED':
            return sl10;

        case 'OK':
            return green;

        case 'WARNING':
            return orange;

        default:
            return 'transparant';
    }
};

export default getStatusColor;
