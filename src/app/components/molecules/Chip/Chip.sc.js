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
import { borderRadius, spacingUnit } from '../../../styles/theme/layout';
import { colorPrimaryHover, getThemeValue, themeModes } from '../../../styles/theme/theme';
import styled, { css } from 'styled-components';
import rippleEffect from '../../../styles/mixins/rippleEffect';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styledTheming from 'styled-theming';
import transitionEffect from '../../../styles/mixins/transitionEffect';

const chipBackgroundColor = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => getThemeValue(theme, 'chipBackgroundColor', grey10),
    [themeModes.dark]: black,
    [themeModes.light]: grey2,
});

const chipBackgroundColorDeselected = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => getThemeValue(theme, 'chipBackgroundColorDeselected', 'transparent'),
    [themeModes.dark]: grey75,
    [themeModes.light]: 'transparent',
});

const chipBackgroundColorHover = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => getThemeValue(theme, 'chipBackgroundColorHover', grey5),
    [themeModes.dark]: grey75,
    [themeModes.light]: grey10,
});

const chipColor = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => getThemeValue(theme, 'chipColor', grey100),
    [themeModes.dark]: white,
    [themeModes.light]: black,
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
    padding: calc(${spacingUnit} / 2) ${spacingUnit};
    min-height: calc(${spacingUnit} * 4);
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
