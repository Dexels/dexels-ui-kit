import styled, { css } from 'styled-components';
import { CARD_ELEVATIONS } from '../../atoms/Card/Card.consts';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';

export const StyledCardStatusWrapper = styled.div`
    ${({ elevation }) => getElevation(elevation)};

    ${({ hasBorderRadius }) => hasBorderRadius && css`
        border-radius: 4px;
    `};
`;

StyledCardStatusWrapper.propTypes = {
    elevation: PropTypes.oneOf(Object.values(CARD_ELEVATIONS)).isRequired,
    hasBorderRadius: PropTypes.bool.isRequired,
};

export default StyledCardStatusWrapper;
