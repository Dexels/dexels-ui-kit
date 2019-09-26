import { CARD_ELEVATIONS, CARD_POSITIONS } from '../../molecules/Card/Card.consts';
import defaultTheme from '../../../styles/theme/theme';
import getElevation from '../../../styles/mixins/getElevation';
import getPosition from '../../../styles/mixins/getPosition';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import validateThemePropTypes from '../../../utils/validateThemePropTypes';

export const StyledContentContainer = styled.div`
    display: flex;
    ${({ position }) => getPosition(position)};
    ${({ elevation }) => getElevation(elevation)};
    border: 0;
    background-color: 'transparent';
    padding: ${({ padding }) => padding};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
`;

export default StyledContentContainer;

StyledContentContainer.propTypes = {
    elevation: PropTypes.oneOf(Object.values(CARD_ELEVATIONS)),
    height: PropTypes.string,
    padding: PropTypes.string,
    position: PropTypes.oneOf(Object.values(CARD_POSITIONS)),
    theme: PropTypes.shape({
        chip: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }).isRequired,
    width: PropTypes.string,
};

StyledContentContainer.defaultProps = {
    height: '100%',
    padding: '8px',
    theme: defaultTheme,
    width: '100%',
};
