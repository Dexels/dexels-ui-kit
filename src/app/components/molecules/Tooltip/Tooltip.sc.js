import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import {
    black,
    grey100,
    grey2,
    grey25,
    white,
} from '../../../styles/colors/colors';
import getElevation from '../../../styles/mixins/getElevation';
import getPlacement from '../../../styles/mixins/getPlacement';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';
import styledTheming from 'styled-theming';
import { themeModes } from '../../../styles/theme/theme';
import transitionEffect from '../../../styles/mixins/transitionEffect';

const tooltipBackgroundColor = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.tooltipBackgroundColor || grey100,
    [themeModes.dark]: black,
    [themeModes.light]: grey2,
});

const tooltipColor = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.tooltipColor || grey25,
    [themeModes.dark]: white,
    [themeModes.light]: black,
});

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
        padding: 4px 8px 4px 8px;
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

export default StyledTooltip;
