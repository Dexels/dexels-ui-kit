import {
    BUTTON_EASINGS,
    BUTTON_SIZES,
    BUTTON_VARIANTS,
} from './Button.consts';
import { rippleEffect, rippleEffectInit, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import { themeBasic, themePropTypes } from '../../../styles/theming/themes/basic';
import PropTypes from 'prop-types';
import transitionEffect from '../../../styles/mixins/transitionEffect';

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
        theme,
        variant,
    }) => variant === BUTTON_VARIANTS.FILLED && css`
        border-color: ${isInverted ? theme.button.backgroundColor.secondary : theme.button.backgroundColor.primary};
        background-color: ${isInverted ? theme.button.backgroundColor.secondary : theme.button.backgroundColor.primary};
        color: ${isInverted ? theme.button.color.secondary : theme.colorTextContrast.primary};

        &:focus,
        &:hover {
            border-color: ${isInverted ? theme.button.backgroundColor.secondary : theme.button.backgroundColor.tertiary};
            background-color: ${isInverted ? theme.button.backgroundColor.secondary : theme.button.backgroundColor.tertiary};
            color: ${isInverted ? theme.button.color.tertiary : theme.colorTextContrast.primary};
        }

        ${isDisabled && css`
            border-color: ${isInverted ? theme.shades.seven : theme.colorDisabled};
            background-color: ${isInverted ? theme.shades.seven : theme.colorDisabled};
            color: ${isInverted ? theme.shades.five : theme.colorTextContrast.primary};
        `}
    `}

    ${({
        isDisabled,
        isInverted,
        theme,
        variant,
    }) => variant === BUTTON_VARIANTS.OUTLINE && css`
        border-color: ${isInverted ? theme.shades.nine : theme.button.backgroundColor.primary};
        background-color: transparent !important;
        color: ${isInverted ? theme.colorTextContrast.primary : theme.colorText.primary};

        &:focus,
        &:hover {
            border-color: ${isInverted ? theme.button.backgroundColor.tertiary : theme.button.backgroundColor.tertiary};
            color: ${isInverted ? theme.button.color.tertiary : theme.button.color.tertiary};
        }

        ${isDisabled && css`
            border-color: ${isInverted ? theme.shades.seven : theme.colorDisabled};
            color: ${isInverted ? theme.shades.seven : theme.colorDisabled};
        `}
    `}

    ${({
        isDisabled,
        isInverted,
        theme,
        variant,
    }) => variant === BUTTON_VARIANTS.TEXT_ONLY && css`
        border: 0;
        background-color: transparent !important;
        padding: 0;
        min-height: 0;
        color: ${isInverted ? theme.colorTextContrast.primary : theme.button.color.secondary};

        &:focus,
        &:hover {
            color: ${isInverted ? theme.button.color.tertiary : theme.button.color.tertiary};
        }

        ${isDisabled && css`
            color: ${isInverted ? theme.shades.seven : theme.colorDisabled};
        `}
    `}

    &:after {
        ${({ variant, theme }) => (variant !== BUTTON_VARIANTS.FILLED
        ? rippleEffect(theme.button.backgroundColor.tertiary)
        : rippleEffect(theme.button.backgroundColor.secondary)
    )}}

    &:active:after {
        ${rippleEffectReset()}
    }
`;

StyledButton.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    isFullWidth: PropTypes.bool.isRequired,
    isInverted: PropTypes.bool.isRequired,
    size: PropTypes.oneOf(Object.values(BUTTON_SIZES)).isRequired,
    theme: themePropTypes,
    transitionDuration: PropTypes.number.isRequired,
    transitionEasing: PropTypes.oneOf(Object.values(BUTTON_EASINGS)).isRequired,
    variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)).isRequired,
};

StyledButton.defaultProps = {
    theme: themeBasic,
};

export default StyledButton;
