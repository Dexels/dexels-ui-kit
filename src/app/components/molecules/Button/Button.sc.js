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
    border: 1px solid;
    cursor: pointer;
    overflow: hidden;
    text-transform: uppercase;

    ${({ isFullWidth }) => isFullWidth && css`
        width: 100%;
        justify-content: center;
    `};

    ${({ isDisabled, isInverted, theme }) => isDisabled && css`
        pointer-events: none;
        background-color: ${isInverted ? theme.colorLight.dark : theme.colorDisabled.main};
        border-color: ${isInverted ? theme.colorLight.dark : theme.colorDisabled.main};
    `};

    ${({ size }) => size === BUTTON_SIZES.SMALL && css`
        ${({ theme }) => theme.textStyling(theme.availableTextStyles.buttonSmall)};
        border-radius: 20px;
        min-width: 80px;
        padding: 4px 16px;
        min-height: 28px;
    `};

    ${({ size }) => size === BUTTON_SIZES.MEDIUM && css`
        ${({ theme }) => theme.textStyling(theme.availableTextStyles.buttonMedium)};
        border-radius: 20px;
        min-width: 90px;
        padding: 6px 16px;
        min-height: 32px;
    `};

    ${({ size }) => size === BUTTON_SIZES.LARGE && css`
        ${({ theme }) => theme.textStyling(theme.availableTextStyles.buttonLarge)};
        border-radius: 25px;
        min-width: 100px;
        padding: 8px 16px;
        min-height: 48px;
    `};

    ${({
        isDisabled,
        isInverted,
        theme,
        variant,
    }) => variant === BUTTON_VARIANTS.FILLED && css`
        background-color: ${isInverted ? theme.colorLight.light : theme.colorPrimary.dark};
        border-color: ${isInverted ? theme.colorLight.light : theme.colorPrimary.dark};
        color: ${isInverted ? theme.colorPrimary.dark : theme.colorLight.light};

        &:focus,
        &:hover {
            background-color: ${isInverted ? theme.colorSecondary.dark : theme.colorSecondary.dark};
            border-color: ${isInverted ? theme.colorSecondary.dark : theme.colorSecondary.dark};
            color: ${isInverted ? theme.colorLight.light : theme.colorLight.light};
        }

        ${isDisabled && css`
            background-color: ${isInverted ? theme.colorLight.dark : theme.colorDisabled.main};
            border-color: ${isInverted ? theme.colorLight.dark : theme.colorDisabled.main};
            color: ${isInverted ? theme.colorMedium.main : theme.colorLight.light};
        `};
    `};

    ${({
        isDisabled,
        isInverted,
        theme,
        variant,
    }) => variant === BUTTON_VARIANTS.OUTLINE && css`
        background-color: transparent !important;
        border-color: ${isInverted ? theme.colorLight.light : theme.colorPrimary.dark};
        color: ${isInverted ? theme.colorLight.light : theme.colorPrimary.dark};

        &:focus,
        &:hover {
            border-color: ${isInverted ? theme.colorSecondary.dark : theme.colorSecondary.dark};
            color: ${isInverted ? theme.colorSecondary.dark : theme.colorSecondary.dark};
        }

        ${isDisabled && css`
            border-color: ${isInverted ? theme.colorLight.dark : theme.colorDisabled.main};
            color: ${isInverted ? theme.colorLight.dark : theme.colorLight.light};
        `};
    `};

    ${({
        isDisabled,
        isInverted,
        theme,
        variant,
    }) => variant === BUTTON_VARIANTS.TEXT_ONLY && css`
        background-color: transparent !important;
        color: ${isInverted ? theme.colorLight.light : theme.colorPrimary.dark};
        padding: 0;
        min-height: 0;
        border: 0;

        &:focus,
        &:hover {
            color: ${isInverted ? theme.colorSecondary.dark : theme.colorSecondary.dark};
        }

        ${isDisabled && css`
            color: ${isInverted ? theme.colorLight.dark : theme.colorLight.light};
        `};
    `};

    &:after {
        ${({ variant, theme }) => (variant !== BUTTON_VARIANTS.FILLED ? rippleEffect(theme.colorSecondary.dark) : rippleEffect())};
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
