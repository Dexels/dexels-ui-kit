import defaultTheme from '../../../styles/theme/theme';
import getElevation from '../../../styles/mixins/getElevation';
import getPlacement from '../../../styles/mixins/getPlacement';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';
import transitionEffect from '../../../styles/mixins/transitionEffect';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const StyledTooltip = styled.div`
    ${setBoxSizing()};
    position: relative;

    &::after,
    &::before {
        /* This weird indent is a bug in ESLint */
        ${({ transitionDuration, transitionEasing }) => transitionEffect({
        duration: transitionDuration,
        easing: transitionEasing,
    })};
        position: absolute;
        visibility: hidden;
        opacity: 0;
        background-color: ${({ theme }) => theme.tooltip.backgroundColor};
    }

    &::before {
        z-index: 2;
        content: '';
    }

    &::after {
        ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
        ${({ placement }) => getPlacement(placement)};
        ${({ elevation }) => getElevation(elevation)};
        z-index: 99999999;
        border-radius: 15px;
        padding: 4px 8px 4px 8px;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: ${({ theme }) => theme.tooltip.colorDefault};
        content: attr(data-tooltip);
    }

    &:hover {
        &::after,
        &::before {
            visibility: visible;
            opacity: 1;
        }
    }
`;

StyledTooltip.propTypes = {
    theme: PropTypes.shape({
        tooltip: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }).isRequired,
};

StyledTooltip.defaultProps = {
    theme: defaultTheme,
};

export default StyledTooltip;
