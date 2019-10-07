import {
    green,
    orange,
    purple100,
    red,
    sl10,
} from '../colors/colors';
import { PLACEMENTS, STATUSES } from '../../utils/constants';
import { css } from 'styled-components';

const getStatusColor = (status) => {
    switch (status) {
        case STATUSES.DEFAULT:
            return purple100;

        case STATUSES.DISABLED:
            return sl10;

        case STATUSES.ERROR:
            return red;

        case STATUSES.OK:
            return green;

        case STATUSES.WARNING:
            return orange;

        default:
            return 'rgb(0,0,0,0)'; // This is to make sure the space is being used
    }
};

const getStatusCss = (status, statusIndicatorSize, statusPlacement) => {
    const baseCss = statusIndicatorSize.concat(' solid ');

    switch (statusPlacement) {
        case PLACEMENTS.BOTTOM:
            return css`
                border-bottom: ${`${baseCss}${getStatusColor(status)}`};
            `;

        case PLACEMENTS.LEFT:
            return css`
                border-left: ${`${baseCss}${getStatusColor(status)}`};
            `;

        case PLACEMENTS.RIGHT:
            return css`
                border-right: ${`${baseCss}${getStatusColor(status)}`};
            `;

        case PLACEMENTS.TOP:
            return css`
                border-top: ${`${baseCss}${getStatusColor(status)}`};
            `;

        default:
            return css`
                border-left: ${`${baseCss}${getStatusColor(status)}`};
            `;
    }
};

export const getStatus = (status,
    statusIndicatorSize,
    statusPlacement) => getStatusCss(status, statusIndicatorSize, statusPlacement);

export default getStatus;
