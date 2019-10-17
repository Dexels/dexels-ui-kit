import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import {
    black,
    grey10,
    grey100,
    grey2,
    grey5,
    grey75,
    white,
} from '../../../styles/colors/colors';
import { borderRadius, themeLayouts } from '../../../styles/theme/layout';
import {
    colorPrimaryHover,
    themeModes,
} from '../../../styles/theme/theme';
import styled, { css } from 'styled-components';
import rippleEffect from '../../../styles/mixins/rippleEffect';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import theme from 'styled-theming';
import transitionEffect from '../../../styles/mixins/transitionEffect';

const chipBackgroundColor = theme('mode', {
    [themeModes.basic]: grey10,
    [themeModes.dark]: black,
    [themeModes.light]: grey2,
});

const chipBackgroundColorDeselected = theme('mode', {
    [themeModes.basic]: 'transparent',
    [themeModes.dark]: grey75,
    [themeModes.light]: 'transparent',
});

const chipBackgroundColorHover = theme('mode', {
    [themeModes.basic]: grey5,
    [themeModes.dark]: grey75,
    [themeModes.light]: grey10,
});

const chipColor = theme('mode', {
    [themeModes.basic]: grey100,
    [themeModes.dark]: white,
    [themeModes.light]: black,
});

const chipHeight = theme('layout', {
    [themeLayouts.basic]: '32px',
    [themeLayouts.compact]: '30px',
});

const chipPadding = theme('layout', {
    [themeLayouts.basic]: '4px 8px',
    [themeLayouts.compact]: '2px 6px',
});

export const StyledChip = styled.button`
    ${setBoxSizing()};
    ${textStyling(availableTextStyles().body2)};
    ${({ transitionDuration, transitionEasing }) => transitionEffect({
        duration: transitionDuration,
        easing: transitionEasing,
    })};
    appearance: none;
    position: relative;
    outline: none;
    border: 1px solid ${chipColor};
    border-radius: ${borderRadius};
    background-color: ${chipBackgroundColorDeselected};
    cursor: pointer;
    padding: ${chipPadding};
    min-height: ${chipHeight};
    overflow: hidden;
    color: ${chipColor};

    ${({ isSelected }) => isSelected && css`
        background-color: ${chipBackgroundColor};
    `};

    ${({ isDisabled }) => isDisabled && css`
        pointer-events: none;
        color: ${chipColor};
    `};

    &:after {
        ${rippleEffect(colorPrimaryHover)}
    }

    &:active,
    &:hover {
        background-color: ${chipBackgroundColor};
        color: ${chipColor};

        ${({ isSelected }) => isSelected && css`
            background-color: ${chipBackgroundColorHover};
        `};
    }

    &:active:after {
        transform: scale(0, 0);
        transition: none;
        opacity: .2;
    }
`;

export default StyledChip;
