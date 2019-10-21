import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import {
    black,
    grey100,
    grey25,
    white,
} from '../../../styles/colors/colors';
import getElevation from '../../../styles/mixins/getElevation';
import { getPlacement } from '../../../styles/mixins/getPlacement';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import { spacingUnit } from '../../../styles/theme/layout';
import styled from 'styled-components';
import theme from 'styled-theming';
import { themeModes } from '../../../styles/theme/theme';
import transitionEffect from '../../../styles/mixins/transitionEffect';

const tooltipBackgroundColor = theme('mode', {
    [themeModes.basic]: grey100,
    [themeModes.dark]: black,
    [themeModes.light]: grey25,
});

const tooltipColor = theme('mode', {
    [themeModes.basic]: grey25,
    [themeModes.dark]: white,
    [themeModes.light]: black,
});

export const StyledTooltip = styled.span`
    ${setBoxSizing()};
    ${textStyling(availableTextStyles().body2)};
    ${({ placement }) => getPlacement(placement)};
    ${({ elevation }) => getElevation(elevation)};
    ${({ transitionDuration, transitionEasing }) => transitionEffect({
        duration: transitionDuration,
        easing: transitionEasing,
    })};
    position: absolute;
    visibility: hidden;
    opacity: 0;
    z-index: 99999999;
    border-radius: 15px;
    background-color: ${tooltipBackgroundColor};
    padding: calc(${spacingUnit} / 2) ${spacingUnit} calc(${spacingUnit} / 2) ${spacingUnit};
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${tooltipColor};

    /* top: 100%;
    left: 30%;
    transform: translateX(50px); */

`;

export const StyledTooltipWrapper = styled.div`
    display: inline-block;
    position: relative;

    &:active,
    &:hover {
        span {
            visibility: visible;
            opacity: 1;
        }
    }

    ${StyledTooltip} {
        &::after {
            content: "";
        }
    }
`;
