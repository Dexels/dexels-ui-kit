import styled, { css } from 'styled-components';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import transitionEffect from '../../../styles/mixins/transitionEffect';

export const StyledTooltip = styled.span`
    ${setBoxSizing()}
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)}
    ${({ elevation }) => getElevation(elevation)}
    ${({ transitionDuration, transitionEasing }) => transitionEffect({
        duration: transitionDuration,
        easing: transitionEasing,
        property: 'opacity',
    })}

    ${({ tooltipPosition }) => tooltipPosition === 'top' && css`
        margin: ${({ theme }) => theme.spacing(-7, 0, 0, -1)};
    `}

    ${({ tooltipPosition }) => tooltipPosition === 'bottom' && css`
        margin: ${({ theme }) => theme.spacing(7, 0, 0, 0)};
    `}

    ${({ tooltipPosition }) => tooltipPosition === 'right' && css`
        margin: ${({ theme }) => theme.spacing(0, 0, 0, 14)};
    `}

    ${({ tooltipPosition }) => tooltipPosition === 'left' && css`
        margin: 0 0 0 calc((8px * -11));
        margin: ${({ theme }) => theme.spacing(0, 0, 0, -11)};
    `}

    ${({ visibility }) => visibility === 'visible' && css`
        visibility: ${visibility};
        opacity: 1;
    `}

    ${({ visibility }) => visibility === 'hidden' && css`
        visibility: ${visibility};
        opacity: 0;
    `}

    position: fixed;
    top: ${({ top }) => `${top}px`};
    left: ${({ left }) => `${left}px`};
    z-index: 99999999;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colorPrimary};
    padding: ${({ theme }) => theme.spacing(0.5, 1, 0.5, 1)};
    text-align: center;
    color: ${({ theme }) => theme.colorContrastText.primary};
`;

StyledTooltip.propTypes = {
    left: PropTypes.number.isRequired,
    tooltipPosition: PropTypes.string.isRequired,
    top: PropTypes.number.isRequired,
    visibility: PropTypes.string.isRequired,
};

export default StyledTooltip;
