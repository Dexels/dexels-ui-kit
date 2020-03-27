import { css, FlattenSimpleInterpolation } from 'styled-components';
import { Position } from '../../types';

const getHorizontalPosition = (position: Position): string => {
    switch (position) {
        case Position.TOP_RIGHT:
            return 'flex-end';

        case Position.MIDDLE_RIGHT:
            return 'flex-end';

        case Position.BOTTOM_RIGHT:
            return 'flex-end';

        case Position.TOP_CENTER:
            return 'center';

        case Position.MIDDLE_CENTER:
            return 'center';

        case Position.BOTTOM_CENTER:
            return 'center';

        default:
            return 'flex-start';
    }
};

const getVerticalPosition = (position: Position): string => {
    switch (position) {
        case Position.BOTTOM_LEFT:
            return 'flex-end';

        case Position.BOTTOM_CENTER:
            return 'flex-end';

        case Position.BOTTOM_RIGHT:
            return 'flex-end';

        case Position.MIDDLE_LEFT:
            return 'center';

        case Position.MIDDLE_CENTER:
            return 'center';

        case Position.MIDDLE_RIGHT:
            return 'center';

        default:
            return 'flex-start';
    }
};

export const getPosition = (position: Position): FlattenSimpleInterpolation => css`
    align-items: ${getVerticalPosition(position)};
    justify-content: ${getHorizontalPosition(position)};
`;

export default getPosition;
