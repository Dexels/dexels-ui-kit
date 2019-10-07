import defaultTheme from '../../../styles/theme/theme';
import getElevation from '../../../styles/mixins/getElevation';
import getPosition from '../../../styles/mixins/getPosition';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const StyledCard = styled.div`
    ${({ position }) => getPosition(position)};
    ${({ elevation }) => getElevation(elevation)};
    display: flex;
    border-radius: ${({ theme }) => theme.card.borderRadius};
    background-color: ${({ theme }) => theme.card.backgroundColor};
    padding: ${({ theme }) => theme.card.padding};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    white-space: wrap;
`;

StyledCard.propTypes = {
    theme: PropTypes.shape({
        card: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )),
    }),
};

StyledCard.defaultProps = {
    theme: defaultTheme,
};

export default StyledCard;
