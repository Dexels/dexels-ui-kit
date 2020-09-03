import { rippleEffect, rippleEffectInit, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import { Easing } from '../../../types';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { transitionEffect } from '../../../styles/mixins/transitionEffects';

interface StyledChipProps {
    isDisabled: boolean;
    isHoverable: boolean;
    isSelected: boolean;
    transitionDuration: number;
    transitionEasing: Easing;
}

export const StyledChip = styled.button<StyledChipProps>`
    ${setBoxSizing()}
    ${rippleEffectInit()}
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body2)}
    ${({
        transitionDuration,
        transitionEasing,
    }): FlattenSimpleInterpolation =>
        transitionEffect({
            duration: transitionDuration,
            easing: transitionEasing,
        })}
    appearance: none;
    outline: none;
    border: 1px solid ${({ theme }): string => theme.shades.two};
    border-radius: ${({ theme }): string => theme.spacing(1)};
    background-color: transparent;
    cursor: ${({ isHoverable }): string => (isHoverable ? 'pointer' : 'default')};
    padding: ${({ theme }): string => theme.spacing(0.5, 1)};
    min-height: ${({ theme }): string => theme.spacing(3.75)};
    color: ${({ theme }): string => theme.colorText.primary};

    ${({ isDisabled, isSelected, theme }): SimpleInterpolation =>
        (isDisabled || !isSelected) &&
        css`
            border-color: ${theme.colorDisabled};
        `}

    ${({ isDisabled, theme }): SimpleInterpolation =>
        isDisabled &&
        css`
            color: ${theme.colorDisabled};
            pointer-events: none;
        `}

    &::after {
        ${({ isHoverable, theme }): SimpleInterpolation => isHoverable && rippleEffect(theme.colorTertiary)}
    }

    &:active,
    &:hover {
        ${({ isHoverable, theme }): SimpleInterpolation =>
            isHoverable &&
            css`
                border-color: ${theme.colorSecondary};
                color: ${theme.colorSecondary};
            `}
    }

    &:active::after {
        ${rippleEffectReset()}
    }
`;

StyledChip.defaultProps = {
    theme: themeBasic,
};

export default StyledChip;
