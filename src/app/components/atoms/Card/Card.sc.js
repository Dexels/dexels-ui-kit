import { CARD_ELEVATIONS, CARD_POSITIONS } from './Card.consts';
import styled, { css } from 'styled-components';
import getElevation from '../../../styles/mixins/getElevation';
import getPosition from '../../../styles/mixins/getPosition';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';

export const StyledCard = styled.div`
    ${setBoxSizing()};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)};
    ${({ position }) => getPosition(position)};
    ${({ elevation }) => getElevation(elevation)};
    display: flex;
    background-color: ${({ theme }) => theme.colorLight.light};
    padding: ${({ theme }) => theme.spacing(1)};
    word-break: break-word;
    color: ${({ theme }) => theme.colorPrimary.dark};

    ${({ hasBorderRadius }) => hasBorderRadius && css`
        border-radius: 4px;
    `}
`;

StyledCard.propTypes = {
    elevation: PropTypes.oneOf(Object.values(CARD_ELEVATIONS)).isRequired,
    hasBorderRadius: PropTypes.bool.isRequired,
    position: PropTypes.oneOf(Object.values(CARD_POSITIONS)).isRequired,
};

export default StyledCard;
