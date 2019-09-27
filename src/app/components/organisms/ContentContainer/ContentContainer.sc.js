import { CARD_ELEVATIONS, CARD_POSITIONS } from '../../molecules/Card/Card.consts';
import defaultTheme from '../../../styles/theme/theme';
import getElevation from '../../../styles/mixins/getElevation';
import getPosition from '../../../styles/mixins/getPosition';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const StyledContentContainer = styled.div`
    ${({ position }) => getPosition(position)};
    ${({ elevation }) => getElevation(elevation)};
    display: flex;
    border: 0;
    background-color: transparent;
    padding: ${({ padding }) => padding};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
`;

StyledContentContainer.propTypes = {
    elevation: PropTypes.oneOf(Object.values(CARD_ELEVATIONS)).isRequired,
    height: PropTypes.string.isRequired,
    padding: PropTypes.string.isRequired,
    position: PropTypes.oneOf(Object.values(CARD_POSITIONS)),
    theme: PropTypes.shape({
        chip: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
    width: PropTypes.string.isRequired,
};

StyledContentContainer.defaultProps = {
    theme: defaultTheme,
};

export default StyledContentContainer;
