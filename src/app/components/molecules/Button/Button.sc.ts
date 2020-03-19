import { ButtonSize, ButtonVariant, Easing } from '../../../types';
import { rippleEffect, rippleEffectInit, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { transitionEffect } from '../../../styles/mixins/transitionEffects';

interface StyledButtonProps {
    isDisabled: boolean;
    isFullWidth: boolean;
    isInverted: boolean;
    isLoading: boolean;
    size: ButtonSize;
    transitionDuration: number;
    transitionEasing: Easing;
    variant: ButtonVariant;
}

export const StyledButton = styled.button<StyledButtonProps>`
    ${({ transitionDuration, transitionEasing }): FlattenSimpleInterpolation => transitionEffect({
        duration: transitionDuration,
        easing: transitionEasing,
    })}
    ${rippleEffectInit()}
    appearance: none;
    outline: none;
    border: 2px solid;
    cursor: pointer;

    ${({ isFullWidth }): SimpleInterpolation => isFullWidth && css`
        justify-content: center;
        width: 100%;
    `}

    ${({ isDisabled, isInverted, theme }): SimpleInterpolation => isDisabled && css`
        border-color: ${isInverted ? theme.shades.seven : theme.colorDisabled};
        background-color: ${isInverted ? theme.shades.seven : theme.colorDisabled};
        pointer-events: none;
    `}

    ${({ size, theme }): SimpleInterpolation => size === ButtonSize.SMALL && css`
        ${theme.textStyling(theme.availableTextStyles().buttonSmall)}
        border-radius: ${theme.spacing(2)};
        padding: ${theme.spacing(0.5, 2)};
        min-width: ${theme.spacing(10)};
        min-height: ${theme.spacing(4)};
    `}

    ${({ size, theme }): SimpleInterpolation => size === ButtonSize.MEDIUM && css`
        ${theme.textStyling(theme.availableTextStyles().buttonMedium)}
        border-radius: ${theme.spacing(2.5)};
        padding: ${theme.spacing(1, 2)};
        min-width: ${theme.spacing(12)};
        min-height: ${theme.spacing(5)};
    `}

    ${({ size, theme }): SimpleInterpolation => size === ButtonSize.LARGE && css`
        ${theme.textStyling(theme.availableTextStyles().buttonLarge)}
        border-radius: ${theme.spacing(3)};
        padding: ${theme.spacing(1, 2)};
        min-width: ${theme.spacing(14)};
        min-height: ${theme.spacing(6)};
    `}

    ${({
        isDisabled,
        isInverted,
        theme: { button },
        variant,
    }): SimpleInterpolation => variant === ButtonVariant.FILLED && css`
        border-color: ${isInverted ? button.filled.backgroundColor.inverted : button.filled.backgroundColor.primary};
        background-color: ${isInverted ? button.filled.backgroundColor.inverted : button.filled.backgroundColor.primary};
        color: ${isInverted ? button.filled.color.inverted : button.filled.color.primary};

        &:focus,
        &:hover {
            border-color: ${isInverted ? button.filled.backgroundColor.hoverInverted : button.filled.backgroundColor.hover};
            background-color: ${isInverted ? button.filled.backgroundColor.hoverInverted : button.filled.backgroundColor.hover};
            color: ${isInverted ? button.filled.color.hoverInverted : button.filled.color.hover};
        }

        ${isDisabled && css`
            border-color: ${isInverted ? button.filled.color.disabled : button.filled.backgroundColor.disabled};
            background-color: ${isInverted ? button.filled.color.disabled : button.filled.backgroundColor.disabled};
            color: ${isInverted ? button.filled.backgroundColor.disabled : button.filled.color.disabled};
        `}
    `}

    ${({
        isDisabled,
        isInverted,
        theme: { button },
        variant,
    }): SimpleInterpolation => variant === ButtonVariant.OUTLINE && css`
        border-color: ${isInverted ? button.outline.backgroundColor.inverted : button.outline.backgroundColor.primary};
        background-color: transparent !important;
        color: ${isInverted ? button.outline.color.inverted : button.outline.color.primary};

        &:focus,
        &:hover {
            border-color: ${isInverted ? button.outline.backgroundColor.hoverInverted : button.outline.backgroundColor.hover};
            color: ${isInverted ? button.outline.color.hoverInverted : button.outline.color.hover};
        }

        ${isDisabled && css`
            border-color: ${isInverted ? button.outline.color.disabled : button.outline.backgroundColor.disabled};
            color: ${isInverted ? button.outline.backgroundColor.disabled : button.outline.color.disabled};
        `}
    `}

    ${({
        isDisabled,
        isInverted,
        theme: { button },
        variant,
    }): SimpleInterpolation => variant === ButtonVariant.TEXT_ONLY && css`
        border: 0;
        border-radius: 0;
        background-color: transparent !important;
        padding: 0;
        min-width: 0;
        min-height: 0;
        color: ${isInverted ? button.textOnly.inverted : button.textOnly.primary};

        &:focus,
        &:hover {
            color: ${isInverted ? button.textOnly.hoverInverted : button.textOnly.hover};
        }

        ${isDisabled && css`
            color: ${isInverted ? button.textOnly.disabledInverted : button.textOnly.disabled};
        `}
    `}

    ${({ isLoading }): SimpleInterpolation => isLoading && css`
        pointer-events: none;
    `}

    &::after {
        ${({ variant, theme: { button } }): SimpleInterpolation => variant !== ButtonVariant.TEXT_ONLY
            && rippleEffect(variant === ButtonVariant.FILLED ? button.filled.color.primary : button.outline.backgroundColor.primary)}
    }

    &:active::after {
        ${rippleEffectReset()}
    }
`;

StyledButton.defaultProps = {
    theme: themeBasic,
};

export const LoaderWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
`;

interface TextWrapperProps {
    isLoading: boolean;
}

export const TextWrapper = styled.div<TextWrapperProps>`
    ${({ isLoading }): SimpleInterpolation => isLoading && css`
        visibility: hidden;
    `}
`;
