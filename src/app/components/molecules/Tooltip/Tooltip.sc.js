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
        margin: calc((${spacingUnit} * -7)) 0 0  calc((${spacingUnit} * -1));
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
};

export default StyledTooltip;
