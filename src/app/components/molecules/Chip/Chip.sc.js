import { rippleEffect, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import transitionEffect from '../../../styles/mixins/transitionEffect';

export const StyledChip = styled.button`
    ${setBoxSizing()};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    ${({ transitionDuration, transitionEasing }) => transitionEffect({
        duration: transitionDuration,
        easing: transitionEasing,
    })};
    appearance: none;
    position: relative;
    outline: none;
    border: 1px solid ${({ theme }) => theme.shades.two};
    border-radius: 8px;
    background-color: transparent;
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing(0.5, 1)};
    min-height: ${({ theme }) => theme.spacing(4)};
    overflow: hidden;
    color: ${({ theme }) => theme.colorBodyText.primary};

    ${({ isSelected }) => isSelected && css`
        background-color: ${({ theme }) => theme.shades.five};
    `};

    ${({ isDisabled }) => isDisabled && css`
        pointer-events: none;
    `};

    &:after {
        ${({ theme }) => rippleEffect(theme.colorTertiary)};
    }

    &:active,
    &:hover {
        background-color: ${({ theme }) => theme.shades.five};

        ${({ isSelected }) => isSelected && css`
            background-color: ${({ theme }) => theme.shades.seven};
        `};
    }

    &:active:after {
        ${rippleEffectReset()};
    }
`;

export default StyledChip;
