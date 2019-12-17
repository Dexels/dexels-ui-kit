import {
    BUTTON_EASINGS,
    BUTTON_SIZES,
    BUTTON_VARIANTS,
} from './Button.consts';
import { rippleEffect, rippleEffectInit, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/propTypes';
import { transitionEffect } from '../../../styles/mixins/transitionEffects';

export const StyledButton = styled.button`
    ${({ transitionDuration, transitionEasing }) => transitionEffect({
        duration: transitionDuration,
        easing: transitionEasing,
    })}
    ${rippleEffectInit()}
    appearance: none;
    outline: none;
    border: 2px solid;
    cursor: pointer;

    ${({ isFullWidth }) => isFullWidth && css`
        justify-content: center;
        width: 100%;
    `}

    ${({ isDisabled, isInverted, theme }) => isDisabled && css`
        border-color: ${isInverted ? theme.shades.seven : theme.colorDisabled};
        background-color: ${isInverted ? theme.shades.seven : theme.colorDisabled};
        pointer-events: none;
    `}

    ${({ size, theme }) => size === BUTTON_SIZES.SMALL && css`
        ${theme.textStyling(theme.availableTextStyles().buttonSmall)}
        border-radius: ${theme.spacing(2)};
        padding: ${theme.spacing(0.5, 2)};
        min-width: ${theme.spacing(10)};
        min-height: ${theme.spacing(4)};
    `}

    ${({ size, theme }) => size === BUTTON_SIZES.MEDIUM && css`
        ${theme.textStyling(theme.availableTextStyles().buttonMedium)}
        border-radius: ${theme.spacing(2.5)};
        padding: ${theme.spacing(1, 2)};
        min-width: ${theme.spacing(12)};
        min-height: ${theme.spacing(5)};
    `}

    ${({ size, theme }) => size === BUTTON_SIZES.LARGE && css`
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
    }) => variant === BUTTON_VARIANTS.FILLED && css`
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
    }) => variant === BUTTON_VARIANTS.OUTLINE && css`
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
    }) => variant === BUTTON_VARIANTS.TEXT_ONLY && css`
        border: 0;
        border-radius: 0;
        background-color: transparent !important;
        padding: 0;
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

    ${({ isLoading }) => isLoading && css`
        pointer-events: none;
    `}

    &::after {
        ${({ variant, theme: { button } }) => variant !== BUTTON_VARIANTS.TEXT_ONLY
            && rippleEffect(variant === BUTTON_VARIANTS.FILLED ? button.filled.color.primary : button.outline.backgroundColor.primary)}
    }

    &:active::after {
        ${rippleEffectReset()}
    }
`;

StyledButton.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    isFullWidth: PropTypes.bool.isRequired,
    isInverted: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    size: PropTypes.oneOf(Object.values(BUTTON_SIZES)).isRequired,
    theme: themePropTypes,
    transitionDuration: PropTypes.number.isRequired,
    transitionEasing: PropTypes.oneOf(Object.values(BUTTON_EASINGS)).isRequired,
    variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)).isRequired,
};

StyledButton.defaultProps = {
    theme: themeBasic,
};

export const LoaderWrapper = styled.div`
    position: absolute;
    left: 50%;
    transform: translate3d(-50%, 0, 0);

    ${({ buttonSize, theme }) => css`
        ${buttonSize === BUTTON_SIZES.SMALL && css`
            top: ${theme.spacing(-1)};
        `}

        ${buttonSize === BUTTON_SIZES.MEDIUM && css`
            top: ${theme.spacing(-0.5)};
        `}

        ${buttonSize === BUTTON_SIZES.LARGE && css`
            top: 0;
        `}
    `}
`;

LoaderWrapper.propTypes = {
    buttonSize: PropTypes.oneOf(Object.values(BUTTON_SIZES)).isRequired,
};

export const TextWrapper = styled.div`
    ${({ isLoading }) => isLoading && css`
        visibility: hidden;
    `}
`;

TextWrapper.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};
