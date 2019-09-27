import { css } from 'styled-components';
import { POSITIONS } from '../../utils/constants';

const getHorizontalPosition = (position) => {
    switch (position) {
        case POSITIONS.TOP_RIGHT:
            return 'flex-end';

        case POSITIONS.MIDDLE_RIGHT:
            return 'flex-end';

        case POSITIONS.BOTTOM_RIGHT:
            return 'flex-end';

        case POSITIONS.TOP_CENTER:
            return 'center';

        case POSITIONS.MIDDLE_CENTER:
            return 'center';

        case POSITIONS.BOTTOM_CENTER:
            return 'center';

        default:
            return 'flex-start';
    }
};

const getVerticalPosition = (position) => {
    switch (position) {
        case POSITIONS.BOTTOM_LEFT:
            return 'flex-end';

        case POSITIONS.BOTTOM_CENTER:
            return 'flex-end';

        case POSITIONS.BOTTOM_RIGHT:
            return 'flex-end';

        case POSITIONS.MIDDLE_LEFT:
            return 'center';

        case POSITIONS.MIDDLE_CENTER:
            return 'center';

        case POSITIONS.MIDDLE_RIGHT:
            return 'center';

        default:
            return 'flex-start';
    }
};

const getPosition = (position) => (css`
    align-items: ${getVerticalPosition(position)};
    justify-content: ${getHorizontalPosition(position)};
`);

export default getPosition;
