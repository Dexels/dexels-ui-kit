import { TOOLTIP_ELEVATIONS, TOOLTIP_PLACEMENTS } from './Tooltip.consts';
import defaultTheme from '../../../styles/theme/theme';
import getElevation from '../../../styles/mixins/getElevation';
import getPlacement from '../../../styles/mixins/getPlacement';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const StyledTooltip = styled.div`
    position: relative;

    &::after,
    &::before {
        position: absolute;
        transition: all 0.4s ease-out;
        visibility: hidden;
        opacity: 0;
        background-color: ${({ theme }) => theme.tooltip.backgroundColor};
    }

    &::before {
        z-index: 2;
        content: '';
    }

    &::after {
        ${({ theme }) => theme.textStyling(theme.availableTextStyles().tooltip)};
        ${({ placement }) => getPlacement(placement)};
        ${({ elevation }) => getElevation(elevation)};
        z-index: 99999999;
        border-radius: ${({ theme }) => theme.tooltip.borderRadius};
        padding: ${({ theme }) => theme.tooltip.padding};
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: ${({ theme }) => theme.tooltip.colorPrimary};
        content: attr(data-tooltip); /* This is referring to the tag provided by Tooltip.js */
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
    elevation: PropTypes.oneOf(Object.values(TOOLTIP_ELEVATIONS)).isRequired,
    placement: PropTypes.oneOf(Object.values(TOOLTIP_PLACEMENTS)).isRequired,
    theme: PropTypes.shape({
        tooltip: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
};

StyledTooltip.defaultProps = {
    theme: defaultTheme,
};

export default StyledTooltip;
