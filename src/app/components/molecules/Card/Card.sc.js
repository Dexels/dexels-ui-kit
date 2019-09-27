import { CARD_ELEVATIONS, CARD_POSITIONS } from './Card.consts';
import defaultTheme from '../../../styles/theme/theme';
import getElevation from '../../../styles/mixins/getElevation';
import getPosition from '../../../styles/mixins/getPosition';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import validateThemePropTypes from '../../../utils/validateThemePropTypes';

export const StyledCard = styled.div`
    display: flex;
    ${({ position }) => getPosition(position)};
    ${({ elevation }) => getElevation(elevation)};
    border-radius: ${({ theme }) => theme.card.borderRadius};
    background-color: ${({ theme }) => theme.card.backgroundColor};
    padding: ${({ theme }) => theme.card.padding};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
`;

export default StyledCard;

StyledCard.propTypes = {
    elevation: PropTypes.oneOf(Object.values(CARD_ELEVATIONS)),
    height: PropTypes.string,
    position: PropTypes.oneOf(Object.values(CARD_POSITIONS)),
    theme: PropTypes.shape({
        chip: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }).isRequired,
    width: PropTypes.string,
};

StyledCard.defaultProps = {
    theme: defaultTheme,
};
