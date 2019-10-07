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
    padding: 8px;
    width: 100%;
    height: 100%;
`;

StyledContentContainer.propTypes = {
    theme: PropTypes.shape({
        chip: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

StyledContentContainer.defaultProps = {
    theme: defaultTheme,
};

export default StyledContentContainer;
