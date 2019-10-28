import { rippleEffect, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import { BUTTON_ICON_SIZES } from './ButtonIcon.consts';
import PropTypes from 'prop-types';

export const StyledButtonIcon = styled.button`
    appearance: none;
    display: flex;
    position: relative;
    align-items: center;
    outline: none;
    border: 0;
    border-radius: 100%;
    background-color: transparent;
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing(1.5)};
    overflow: hidden;
    color: ${({ isInverted, theme }) => (isInverted ? theme.colorContrastText.primary : theme.colorHeaderText.primary)};

    ${({ size }) => size === BUTTON_ICON_SIZES.SMALL && css`
        font-size: 14px;
    `};

    ${({ size }) => size === BUTTON_ICON_SIZES.MEDIUM && css`
        font-size: 18px;
    `};

    ${({ size }) => size === BUTTON_ICON_SIZES.LARGE && css`
        font-size: 20px;
    `};

    ${({ isDisabled, isInverted, theme }) => isDisabled && css`
        pointer-events: none;
        color: ${isInverted ? theme.shades.seven : theme.colorDisabled};
    `};

    &:focus,
    &:hover {
        background-color: ${({ isInverted, theme }) => (isInverted ? theme.colorSecondary : theme.shades.seven)};
        color: ${({ isInverted, theme }) => (isInverted ? theme.colorContrastText.primary : theme.colorHeaderText.secondary)};
    }

    &:after {
        border: 0;
        pointer-events: none;

        ${({ isInverted, theme }) => (isInverted ? rippleEffect() : rippleEffect(theme.colorSecondary))};
    }

    &:active:after {
        ${rippleEffectReset()};
        border: 0;
    }
`;

StyledButtonIcon.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    isInverted: PropTypes.bool.isRequired,
    size: PropTypes.oneOf(Object.values(BUTTON_ICON_SIZES)).isRequired,
};

export default StyledButtonIcon;
