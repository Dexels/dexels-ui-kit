import {
    green,
    orange,
    purple100,
    red,
    grey10,
} from '../colors/colors';
import { PLACEMENTS, STATUSES } from '../../utils/constants';
import { css } from 'styled-components';

const getStatusColor = (status) => {
    switch (status) {
        case STATUSES.DEFAULT:
            return purple100;

        case STATUSES.DISABLED:
            return grey10;

        case STATUSES.ERROR:
            return red;

        case STATUSES.OK:
            return green;

        case STATUSES.WARNING:
            return orange;

        default:
            return 'transparent';
    }
};

const getStatusCSS = (status, statusIndicatorSize, statusPlacement) => {
    const baseCSS = `${statusIndicatorSize} solid`;

    switch (statusPlacement) {
        case PLACEMENTS.BOTTOM:
            return css`
                border-bottom: ${`${baseCSS} ${getStatusColor(status)}`};
            `;

        case PLACEMENTS.LEFT:
            return css`
                border-left: ${`${baseCSS} ${getStatusColor(status)}`};
            `;

        case PLACEMENTS.RIGHT:
            return css`
                border-right: ${`${baseCSS} ${getStatusColor(status)}`};
            `;

        case PLACEMENTS.TOP:
            return css`
                border-top: ${`${baseCSS} ${getStatusColor(status)}`};
            `;

        default:
            return css`
                border-left: ${`${baseCSS} ${getStatusColor(status)}`};
            `;
    }
};

export const getStatus = (status, statusIndicatorSize, statusPlacement) => (
    getStatusCSS(status, statusIndicatorSize, statusPlacement)
);

export default getStatus;
