import { CARD_ELEVATIONS, CARD_POSITIONS } from './Card.consts';
import styled, { css } from 'styled-components';
import getElevation from '../../../styles/mixins/getElevation';
import getPosition from '../../../styles/mixins/getPosition';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/propTypes';

export const StyledCard = styled.div`
    ${setBoxSizing()}
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)}
    ${({ position }) => getPosition(position)}
    ${({ elevation }) => getElevation(elevation)}
    background-color: ${({ theme }) => theme.card.backgroundColor};
    padding: ${({ theme }) => theme.spacing(1)};
    color: ${({ theme }) => theme.colorText.primary};

    ${({ hasBorderRadius, theme }) => hasBorderRadius && css`
        border-radius: ${theme.spacing(0.5)};
    `}
`;

StyledCard.propTypes = {
    elevation: PropTypes.oneOf(Object.values(CARD_ELEVATIONS)).isRequired,
    hasBorderRadius: PropTypes.bool.isRequired,
    position: PropTypes.oneOf(Object.values(CARD_POSITIONS)).isRequired,
    theme: themePropTypes,
};

StyledCard.defaultProps = {
    theme: themeBasic,
};

export default StyledCard;
