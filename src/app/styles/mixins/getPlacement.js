import { css } from 'styled-components';
import { PLACEMENTS } from '../../utils/constants';

export const getDimensions = (elementId) => {
    console.log('********************* elementId', elementId, document.getElementById(elementId));
    const rectangle = document.getElementById(elementId).getBoundingClientRect();
    console.log('********************* dimensions', rectangle);

    return {
        left: rectangle.left + window.scrollX,
        top: rectangle.top + window.scrollY,
    };
};

const getHorizontalOffset = (placement) => {
    switch (placement) {
        case PLACEMENTS.LEFT:
            return '-100px';

        case PLACEMENTS.TOP:
            return '0px';

        case PLACEMENTS.RIGHT:
            return '100px';

        case PLACEMENTS.BOTTOM:
            return '0px';

        default:
            return '0%';
    }
};

const getVerticalOffset = (placement) => {
    switch (placement) {
        case PLACEMENTS.LEFT:
            return '-4px';

        case PLACEMENTS.TOP:
            return '-42px';

        case PLACEMENTS.RIGHT:
            return '-4px';

        case PLACEMENTS.BOTTOM:
            return '32px';

        default:
            return '-4px';
    }
};

export const getPlacement = (placement) => (css`
    top: ${getHorizontalOffset(placement)};
    left: ${getVerticalOffset(placement)};
`);

// export default getPlacement;
