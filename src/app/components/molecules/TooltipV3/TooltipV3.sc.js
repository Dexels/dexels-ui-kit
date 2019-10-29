import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import {
    black,
    grey100,
    grey25,
    white,
} from '../../../styles/colors/colors';
import styled, { css } from 'styled-components';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import { spacingUnit } from '../../../styles/theme/layout';
import theme from 'styled-theming';
import { themeModes } from '../../../styles/theme/theme';
import transitionEffect from '../../../styles/mixins/transitionEffect';

const tooltipBackgroundColor = theme('mode', {
    [themeModes.basic]: grey100,
    [themeModes.dark]: black,
    [themeModes.light]: grey25,
});

const tooltipColor = theme('mode', {
    [themeModes.basic]: white,
    [themeModes.dark]: white,
    [themeModes.light]: black,
});

export const StyledTooltip = styled.span`
    ${setBoxSizing()};
    ${textStyling(availableTextStyles().body2)};
    ${({ elevation }) => getElevation(elevation)};
    ${({ transitionDuration, transitionEasing }) => transitionEffect({
        duration: transitionDuration,
        easing: transitionEasing,
    })};
    ${({ tooltipPosition }) => tooltipPosition === 'top' && css`
        /* margin: calc((${spacingUnit} * -8)) 0 0 0; */
        margin: -120px 0 0 -170px;
        /* display: flex; */
    `};

    ${({ tooltipPosition }) => tooltipPosition === 'bottom' && css`
        /* margin: calc((${spacingUnit} * 2)) 0 0 0; */
        margin: -32px 0 0 -170px;
        /* display: flex; */
    `};

    ${({ tooltipPosition }) => tooltipPosition === 'right' && css`
        /* margin: 0 0 0 calc((${spacingUnit} * 2)); */
        margin: -116px 0 0 -170px;
    `};

    ${({ visibility }) => visibility === 'visible' && css`
        opacity: 1;
        visibility: ${visibility};
    `};

    ${({ visibility }) => visibility === 'hidden' && css`
        opacity: 0;
        visibility: ${visibility};
    `};

    position: absolute;
    /* visibility: visibility; */
    z-index: 99999999;
    border-radius: 15px;
    background-color: ${tooltipBackgroundColor};
    padding: calc((${spacingUnit} / 2)) ${spacingUnit} calc((${spacingUnit} / 2)) ${spacingUnit};
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${tooltipColor};
`;

StyledTooltip.propTypes = {
    tooltipPosition: PropTypes.string.isRequired,
    visibility: PropTypes.string.isRequired,
    top: PropTypes.number,
    left: PropTypes.number,
};

export const StyledTooltipWrapper = styled.div`
    display: inline-block;
    position: relative;

    /* &:active,
    &:hover {
        span {
            visibility: visibility;
            opacity: 1;
        }
    } */

    ${StyledTooltip} {
        &::after {
            content: "";
        }
    }
`;

StyledTooltipWrapper.propTypes = {
    visibility: PropTypes.string.isRequired,
};
