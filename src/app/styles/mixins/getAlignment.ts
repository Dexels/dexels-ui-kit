import { css, FlattenSimpleInterpolation } from 'styled-components';
import { Alignment } from '../../types';

const getTextAlign = (alignment: Alignment): string => {
    switch (alignment) {
        case Alignment.LEFT:
            return 'left';

        case Alignment.CENTER:
            return 'center';

        case Alignment.RIGHT:
            return 'right';

        default:
            return 'left';
    }
};

const getAlignContent = (alignment: Alignment): string => {
    switch (alignment) {
        case Alignment.LEFT:
            return 'flex-start';

        case Alignment.CENTER:
            return 'center';

        case Alignment.RIGHT:
            return 'flex-end';

        default:
            return 'flex-start';
    }
};

export const getAlignment = (alignment: Alignment, alignText = true): FlattenSimpleInterpolation => css`
    align-content: ${getAlignContent(alignment)};
    justify-content: ${getAlignContent(alignment)};
    text-align: ${alignText && getTextAlign(alignment)};
`;

export default getAlignment;
