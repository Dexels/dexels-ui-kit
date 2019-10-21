import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import {
    black,
    grey100,
    grey2,
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
    [themeModes.light]: grey2,
});

const tooltipColor = theme('mode', {
    [themeModes.basic]: grey25,
    [themeModes.dark]: white,
    [themeModes.light]: black,
});

export const StyledTooltipWrapper = styled.div`
    position: relative;
    display: inline-block;
`;

/* eslint-disable indent */
// The indent rule is disabled because ESLint has a bug when using functions inside of hover/focus etc
export const StyledTooltip = styled.div`
    ${setBoxSizing()};
    visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;

    position: relative;
    display: inline-block;

    &::after,
    &::before {
        ${({ transitionDuration, transitionEasing }) => transitionEffect({
            duration: transitionDuration,
            easing: transitionEasing,
        })};
        position: absolute;
        visibility: hidden;
        opacity: 0;
        background-color: ${tooltipBackgroundColor};
    }

    &::before {
        z-index: 2;
        content: '';
    }

    &::after {
        ${textStyling(availableTextStyles().body2)};
        ${({ placement }) => getPlacement(placement)};
        ${({ elevation }) => getElevation(elevation)};
        z-index: 99999999;
        border-radius: 15px;
        padding: calc(${spacingUnit} / 2) ${spacingUnit} calc(${spacingUnit} / 2) ${spacingUnit};
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: ${tooltipColor};
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
/* eslint-enable */

export default StyledTooltip;
