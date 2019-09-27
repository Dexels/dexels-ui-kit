import { CARD_ELEVATIONS, CARD_POSITIONS } from './Card.consts';
import defaultTheme from '../../../styles/theme/theme';
import getElevation from '../../../styles/mixins/getElevation';
import getPosition from '../../../styles/mixins/getPosition';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import validateThemePropTypes from '../../../utils/validateThemePropTypes';

export const StyledCard = styled.div`
    ${({ position }) => getPosition(position)};
    ${({ elevation }) => getElevation(elevation)};
    display: flex;
    border-radius: ${({ theme }) => theme.card.borderRadius};
    background-color: ${({ theme }) => theme.card.backgroundColor};
    padding: ${({ theme }) => theme.card.padding};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
`;

StyledCard.propTypes = {
    elevation: PropTypes.oneOf(Object.values(CARD_ELEVATIONS)).isRequired,
    height: PropTypes.string.isRequired,
    position: PropTypes.oneOf(Object.values(CARD_POSITIONS)),
    theme: PropTypes.shape({
        chip: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )),
    }),
    width: PropTypes.string.isRequired,
};

StyledCard.defaultProps = {
    theme: defaultTheme,
};

export default StyledCard;
