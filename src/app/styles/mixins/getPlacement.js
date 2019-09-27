import { css } from 'styled-components';
import { PLACEMENTS } from '../../utils/constants';

function getHorizontalOffset(placement) {
    switch (placement) {
        case PLACEMENTS.TOP_LEFT:
            return '-50%';

        case PLACEMENTS.MIDDLE_LEFT:
            return '-80%';

        case PLACEMENTS.TOP_RIGHT:
            return '150%';

        case PLACEMENTS.MIDDLE_RIGHT:
            return '100%';

        case PLACEMENTS.BOTTOM_RIGHT:
            return '100%';

        case PLACEMENTS.TOP_CENTER:
            return '50%';

        case PLACEMENTS.MIDDLE_CENTER:
            return '-10%';

        case PLACEMENTS.BOTTOM_CENTER:
            return '-10%';

        default:
            return '0%';
    }
}

function getVerticalOffset(placement) {
    switch (placement) {
        case PLACEMENTS.BOTTOM_LEFT:
            return '250%';

        case PLACEMENTS.BOTTOM_CENTER:
            return '250%';

        case PLACEMENTS.BOTTOM_RIGHT:
            return '250%';

        case PLACEMENTS.MIDDLE_LEFT:
            return '-25%';

        case PLACEMENTS.MIDDLE_CENTER:
            return '-25%';

        case PLACEMENTS.MIDDLE_RIGHT:
            return '-25%';

        default:
            return '-150%';
    }
}

function getPlacement(placement) {
    const left = getHorizontalOffset(placement);
    const top = getVerticalOffset(placement);

    return css`
        left: ${left};
        top: ${top};
    `;
}

export default getPlacement;
