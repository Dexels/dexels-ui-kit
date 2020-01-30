import { Alignments } from '../../types';
import { ALIGNMENTS } from '../../utils/constants';
import { css } from 'styled-components';

const getTextAlign = (alignment: Alignments) => {
    switch (alignment) {
        case ALIGNMENTS.LEFT:
            return 'left';

        case ALIGNMENTS.CENTER:
            return 'center';

        case ALIGNMENTS.RIGHT:
            return 'right';

        default:
            return 'left';
    }
};

const getAlignContent = (alignment: Alignments) => {
    switch (alignment) {
        case ALIGNMENTS.LEFT:
            return 'flex-start';

        case ALIGNMENTS.CENTER:
            return 'center';

        case ALIGNMENTS.RIGHT:
            return 'flex-end';

        default:
            return 'flex-start';
    }
};

export const getAlignment = (alignment: Alignments, alignText = true) => (css`
    align-content: ${getAlignContent(alignment)};
    justify-content: ${getAlignContent(alignment)};
    text-align: ${alignText && getTextAlign(alignment)};
`);

export default getAlignment;
