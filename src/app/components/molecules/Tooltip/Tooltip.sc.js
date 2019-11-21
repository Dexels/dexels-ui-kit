import { themeBasic, themePropTypes } from '../../../styles/theming/themes/basic';
import { TOOLTIP_EASINGS, TOOLTIP_ELEVATIONS } from './Tooltip.consts';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';
import { transitionEffect } from '../../../styles/mixins/transitionEffects';

export const StyledTooltip = styled.span`
    ${setBoxSizing()}
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)}
    ${({ elevation }) => getElevation(elevation)}
    ${({ transitionDuration, transitionEasing }) => transitionEffect({
        duration: transitionDuration,
        easing: transitionEasing,
        property: 'opacity',
    })}

    position: fixed;
    top: ${({ top }) => top};
    right: ${({ right }) => right};
    bottom: ${({ bottom }) => bottom};
    left: ${({ left }) => left};
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    z-index: 99999999;
    border-radius: ${({ theme }) => theme.spacing(1)};
    background-color: ${({ theme }) => theme.colorPrimary};
    padding: ${({ theme }) => theme.spacing(0.5, 1, 0.5, 1)};
    text-align: center;
    color: ${({ theme }) => theme.colorContrastText.primary};
`;

StyledTooltip.propTypes = {
    bottom: PropTypes.string.isRequired,
    elevation: PropTypes.oneOf(Object.values(TOOLTIP_ELEVATIONS)).isRequired,
    isVisible: PropTypes.bool.isRequired,
    left: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
    theme: themePropTypes,
    top: PropTypes.string.isRequired,
    transitionDuration: PropTypes.number.isRequired,
    transitionEasing: PropTypes.oneOf(Object.values(TOOLTIP_EASINGS)),
};

StyledTooltip.defaultProps = {
    theme: themeBasic,
};

export default StyledTooltip;
