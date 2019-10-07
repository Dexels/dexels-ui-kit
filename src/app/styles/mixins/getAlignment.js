import { ALIGNMENTS } from '../../utils/constants';
import { css } from 'styled-components';

const getTextAlign = (alignment) => {
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

const getAlignContent = (alignment) => {
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

const getAlignment = (alignment) => (css`
    align-content: ${getAlignContent(alignment)};
    justify-content: ${getAlignContent(alignment)};
    text-align: ${getTextAlign(alignment)};
`);

export default getAlignment;
