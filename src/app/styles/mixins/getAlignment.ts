import { Alignment } from '../../types';
import { css } from 'styled-components';

const getTextAlign = (alignment: Alignment) => {
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

const getAlignContent = (alignment: Alignment) => {
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

export const getAlignment = (alignment: Alignment, alignText = true) => (css`
    align-content: ${getAlignContent(alignment)};
    justify-content: ${getAlignContent(alignment)};
    text-align: ${alignText && getTextAlign(alignment)};
`);

export default getAlignment;
