import styled, { css } from 'styled-components';
import { borderRadius } from '../../../styles/theme/layout';
import { CARD_STATUS_PLACEMENTS } from './CardStatus.consts';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';

export const StyledCardStatusWrapper = styled.div`
    ${({ elevation }) => getElevation(elevation)};

    ${({ hasBorderRadius, placement }) => hasBorderRadius && css`
        ${placement === CARD_STATUS_PLACEMENTS.BOTTOM && css`
            border-radius: 0 0 calc(${borderRadius} / 2) calc(${borderRadius} / 2);
        `};

        ${placement === CARD_STATUS_PLACEMENTS.LEFT && css`
            border-radius: calc(${borderRadius} / 2) 0 0 calc(${borderRadius} / 2);
        `};

        ${placement === CARD_STATUS_PLACEMENTS.RIGHT && css`
            border-radius: 0 calc(${borderRadius} / 2) calc(${borderRadius} / 2) 0;
        `};

        ${placement === CARD_STATUS_PLACEMENTS.TOP && css`
            border-radius: calc(${borderRadius} / 2) calc(${borderRadius} / 2) 0 0;
        `};
    `};
`;

StyledCardStatusWrapper.propTypes = {
    hasBorderRadius: PropTypes.bool.isRequired,
    placement: PropTypes.oneOf(Object.values(CARD_STATUS_PLACEMENTS)).isRequired,
};

export default StyledCardStatusWrapper;
