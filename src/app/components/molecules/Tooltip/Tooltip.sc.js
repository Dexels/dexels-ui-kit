import styled, { css } from 'styled-components';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import transitionEffect from '../../../styles/mixins/transitionEffect';

export const StyledTooltip = styled.span`
    ${setBoxSizing()};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    ${({ elevation }) => getElevation(elevation)};
    ${({ transitionDuration, transitionEasing }) => transitionEffect({
        duration: transitionDuration,
        easing: transitionEasing,
    })};
    ${({ tooltipPosition }) => tooltipPosition === 'top' && css`
        margin: ${({ theme }) => theme.spacing(-7, 0, 0, -1)};
    `};

    ${({ tooltipPosition }) => tooltipPosition === 'bottom' && css`
        margin: calc((8px * 5)) 0 0 0;
    `};

    ${({ tooltipPosition }) => tooltipPosition === 'right' && css`
        margin: 0 0 0 calc((8px * 9));
    `};

    ${({ tooltipPosition }) => tooltipPosition === 'left' && css`
        margin: 0 0 0 calc((8px * -13));
    `};

    ${({ visibility }) => visibility === 'visible' && css`
        opacity: 1;
        visibility: ${visibility};
    `};

    ${({ visibility }) => visibility === 'hidden' && css`
        opacity: 0;
        visibility: ${visibility};
    `};

    position: fixed;
    z-index: 99999999;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colorPrimary};
    padding: ${({ theme }) => theme.spacing(0.5, 1, 0.5, 1)};
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({ theme }) => theme.colorContrastText.primary};
`;

StyledTooltip.propTypes = {
    tooltipPosition: PropTypes.string.isRequired,
    visibility: PropTypes.string.isRequired,
};

export default StyledTooltip;
