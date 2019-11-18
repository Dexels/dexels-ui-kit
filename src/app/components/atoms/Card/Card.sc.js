import { CARD_ELEVATIONS, CARD_POSITIONS } from './Card.consts';
import styled, { css } from 'styled-components';
import { themeBasic, themePropTypes } from '../../../styles/theming/themes/basic';
import getElevation from '../../../styles/mixins/getElevation';
import getPosition from '../../../styles/mixins/getPosition';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';

export const StyledCard = styled.div`
    ${setBoxSizing()}
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)}
    ${({ position }) => getPosition(position)}
    ${({ elevation }) => getElevation(elevation)}
    display: flex;
    background-color: ${({ theme }) => theme.shades.nine};
    padding: ${({ theme }) => theme.spacing(1)};
    word-break: break-word;
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
