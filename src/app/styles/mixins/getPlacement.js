import { css } from 'styled-components';
import { PLACEMENTS } from '../../utils/constants';

const getHorizontalOffset = (placement) => {
    switch (placement) {
        case PLACEMENTS.LEFT:
            return '50%';

        case PLACEMENTS.TOP:
            return 0;

        case PLACEMENTS.RIGHT:
            return '-50%';

        case PLACEMENTS.BOTTOM:
            return 0;

        default:
            return 0;
    }
};

const getHorizontalMargin = (placement) => {
    switch (placement) {
        case PLACEMENTS.LEFT:
            return '10px';

        case PLACEMENTS.TOP:
            return 0;

        case PLACEMENTS.RIGHT:
            return '10px';

        case PLACEMENTS.BOTTOM:
            return 0;

        default:
            return 0;
    }
};

const getVerticalOffset = (placement) => {
    switch (placement) {
        case PLACEMENTS.LEFT:
            return 0;

        case PLACEMENTS.TOP:
            return '-200%';

        case PLACEMENTS.RIGHT:
            return 0;

        case PLACEMENTS.BOTTOM:
            return '100%';

        default:
            return 0;
    }
};

const getVerticalMargin = (placement) => {
    switch (placement) {
        case PLACEMENTS.LEFT:
            return 0;

        case PLACEMENTS.TOP:
            return '16px';

        case PLACEMENTS.RIGHT:
            return 0;

        case PLACEMENTS.BOTTOM:
            return '16px';

        default:
            return 0;
    }
};

export const getPlacement = (placement) => (css`
    /* left: ${getVerticalOffset(placement)}; */
    margin:
        ${getVerticalMargin(placement === PLACEMENTS.BOTTOM ? placement : null)}
        ${getHorizontalMargin(placement === PLACEMENTS.LEFT ? placement : null)}
        ${getVerticalMargin(placement === PLACEMENTS.TOP ? placement : null)}
        ${getHorizontalMargin(placement === PLACEMENTS.RIGHT ? placement : null)}
    ;
    /* top: ${getHorizontalOffset(placement)}; */
`);

export default getPlacement;
