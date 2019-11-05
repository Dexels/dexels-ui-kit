import {
    BUTTON_EASINGS,
    BUTTON_SIZES,
    BUTTON_VARIANTS,
} from './Button.consts';
import { rippleEffect, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import transitionEffect from '../../../styles/mixins/transitionEffect';

export const StyledButton = styled.button`
    ${({ transitionDuration, transitionEasing }) => transitionEffect({
        duration: transitionDuration,
        easing: transitionEasing,
    })};
    appearance: none;
    position: relative;
    outline: none;
    border: 2px solid;
    cursor: pointer;
    overflow: hidden;
    text-transform: uppercase;

    ${({ isFullWidth }) => isFullWidth && css`
        width: 100%;
        justify-content: center;
    `};

    ${({ isDisabled, isInverted, theme }) => isDisabled && css`
        pointer-events: none;
        background-color: ${isInverted ? theme.shades.seven : theme.colorDisabled};
        border-color: ${isInverted ? theme.shades.seven : theme.colorDisabled};
    `};

    ${({ size, theme }) => size === BUTTON_SIZES.SMALL && css`
        ${theme.textStyling(theme.availableTextStyles().buttonSmall)};
        border-radius: ${theme.spacing(2)};
        min-width: ${theme.spacing(10)};
        padding: ${theme.spacing(0.5, 2)};
        min-height: ${theme.spacing(4)};
    `};

    ${({ size, theme }) => size === BUTTON_SIZES.MEDIUM && css`
        ${theme.textStyling(theme.availableTextStyles().buttonMedium)};
        border-radius: ${theme.spacing(2.5)};
        min-width: ${theme.spacing(12)};
        padding: ${theme.spacing(1, 2)};
        min-height: ${theme.spacing(5)};
    `};

    ${({ size, theme }) => size === BUTTON_SIZES.LARGE && css`
        ${theme.textStyling(theme.availableTextStyles().buttonLarge)};
        border-radius: ${theme.spacing(3)};
        min-width: ${theme.spacing(14)};
        padding: ${theme.spacing(1, 2)};
        min-height: ${theme.spacing(6)};
    `};

    ${({ size, theme }) => size === BUTTON_SIZES.XLARGE && css`
        ${theme.textStyling(theme.availableTextStyles().buttonXLarge)};
        border-radius: ${theme.spacing(3.5)};
        min-width: ${theme.spacing(20)};
        padding: ${theme.spacing(1.5, 2.5)};
        min-height: ${theme.spacing(6.5)};
    `};

    ${({
        isDisabled,
        isInverted,
        theme,
        variant,
    }) => variant === BUTTON_VARIANTS.FILLED && css`
        background-color: ${isInverted ? theme.shades.nine : theme.colorPrimary};
        border-color: ${isInverted ? theme.shades.nine : theme.colorPrimary};
        color: ${isInverted ? theme.colorHeaderText.primary : theme.colorContrastText.primary};

        &:focus,
        &:hover {
            background-color: ${isInverted ? theme.colorSecondary : theme.colorSecondary};
            border-color: ${isInverted ? theme.colorSecondary : theme.colorSecondary};
            color: ${isInverted ? theme.colorContrastText.primary : theme.colorContrastText.primary};
        }

        ${isDisabled && css`
            background-color: ${isInverted ? theme.shades.seven : theme.colorDisabled};
            border-color: ${isInverted ? theme.shades.seven : theme.colorDisabled};
            color: ${isInverted ? theme.shades.five : theme.colorContrastText.primary};
        `};
    `};

    ${({
        isDisabled,
        isInverted,
        theme,
        variant,
    }) => variant === BUTTON_VARIANTS.OUTLINE && css`
        background-color: transparent !important;
        border-color: ${isInverted ? theme.shades.nine : theme.colorPrimary};
        color: ${isInverted ? theme.colorContrastText.primary : theme.colorHeaderText.primary};

        &:focus,
        &:hover {
            border-color: ${isInverted ? theme.colorSecondary : theme.colorSecondary};
            color: ${isInverted ? theme.colorHeaderText.secondary : theme.colorHeaderText.secondary};
        }

        ${isDisabled && css`
            border-color: ${isInverted ? theme.shades.seven : theme.colorDisabled};
            color: ${isInverted ? theme.shades.seven : theme.colorContrastText.primary};
        `};
    `};

    ${({
        isDisabled,
        isInverted,
        theme,
        variant,
    }) => variant === BUTTON_VARIANTS.TEXT_ONLY && css`
        background-color: transparent !important;
        color: ${isInverted ? theme.colorContrastText.primary : theme.colorHeaderText.primary};
        padding: 0;
        min-height: 0;
        border: 0;

        &:focus,
        &:hover {
            color: ${isInverted ? theme.colorHeaderText.secondary : theme.colorSecondary};
        }

        ${isDisabled && css`
            color: ${isInverted ? theme.shades.seven : theme.colorContrastText.primary};
        `};
    `};

    &:after {
        ${({ variant, theme }) => (variant !== BUTTON_VARIANTS.FILLED ? rippleEffect(theme.colorSecondary) : rippleEffect())};
    }

    &:active:after {
        ${rippleEffectReset()};
    }
`;

StyledButton.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    isFullWidth: PropTypes.bool.isRequired,
    isInverted: PropTypes.bool.isRequired,
    size: PropTypes.oneOf(Object.values(BUTTON_SIZES)).isRequired,
    transitionDuration: PropTypes.number.isRequired,
    transitionEasing: PropTypes.oneOf(Object.values(BUTTON_EASINGS)).isRequired,
    variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)).isRequired,
};

export default StyledButton;
