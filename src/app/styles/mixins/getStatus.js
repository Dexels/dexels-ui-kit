import {
    colorSignalDisabled,
    colorSignalError,
    colorSignalOk,
    colorSignalStandard,
    colorSignalWarning,
} from '../theme/theme';
import { PLACEMENTS, STATUSES } from '../../utils/constants';
import { css } from 'styled-components';

const getStatusColor = (status, theme) => {
    console.log('******************************* theme', theme);
    console.log('************************** status 1', status);
    console.log('************************** status 2', colorSignalStandard);
    console.log('************************** status 3', css`${colorSignalStandard}`);

    switch (status) {
        case STATUSES.DEFAULT:
            return colorSignalStandard;

        case STATUSES.DISABLED:
            return colorSignalDisabled;

        case STATUSES.ERROR:
            return colorSignalError;

        case STATUSES.OK:
            return colorSignalOk;

        case STATUSES.WARNING:
            return colorSignalWarning;

        default:
            return 'transparent';
    }
};

const getStatusCSS = (status, statusIndicatorSize, statusPlacement, theme) => {
    const baseCSS = `${statusIndicatorSize} solid`;

    switch (statusPlacement) {
        case PLACEMENTS.BOTTOM:
            return css`
                border-bottom: ${`${baseCSS} ${getStatusColor(status, theme)}`};
            `;

        case PLACEMENTS.LEFT:
            return css`
                border-left: ${`${baseCSS} ${getStatusColor(status, theme)}`};
            `;

        case PLACEMENTS.RIGHT:
            return css`
                border-right: ${`${baseCSS} ${getStatusColor(status, theme)}`};
            `;

        case PLACEMENTS.TOP:
            return css`
                border-top: ${`${baseCSS} ${getStatusColor(status, theme)}`};
            `;

        default:
            return css`
                border-left: ${`${baseCSS} ${getStatusColor(status, theme)}`};
            `;
    }
};

export const getStatus = (status, statusIndicatorSize, statusPlacement, theme) => (
    getStatusCSS(status, statusIndicatorSize, statusPlacement, theme)
);

export default getStatus;
