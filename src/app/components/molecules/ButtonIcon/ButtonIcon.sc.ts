import { rippleEffect, rippleEffectInit, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import { BUTTON_ICON_SIZES } from './ButtonIcon.consts';
import { hexToRgb } from '../../../utils/functions/colorFunctions';
import { Sizes } from '../../../types';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledButtonIconProps {
    isDisabled: boolean;
    isInverted: boolean;
    size: Sizes;
}

export const StyledButtonIcon = styled.button<StyledButtonIconProps>`
    ${rippleEffectInit()}
    appearance: none;
    display: flex;
    align-items: center;
    outline: none;
    border: 0;
    border-radius: 100%;
    background-color: transparent;
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing(1)};
    overflow: hidden;
    color: ${({ isInverted, theme }) => (isInverted ? theme.colorTextContrast.primary : theme.colorText.primary)};

    ${({ size }) => size === BUTTON_ICON_SIZES.SMALL && css`
        font-size: 14px;
    `}

    ${({ size }) => size === BUTTON_ICON_SIZES.MEDIUM && css`
        font-size: 18px;
    `}

    ${({ size }) => size === BUTTON_ICON_SIZES.LARGE && css`
        font-size: 20px;
    `}

    ${({ size }) => size === BUTTON_ICON_SIZES.XLARGE && css`
        font-size: 24px;
    `}

    ${({ isDisabled, isInverted, theme }) => isDisabled && css`
        color: ${isInverted ? theme.shades.seven : theme.colorDisabled};
        pointer-events: none;
    `}

    &::after {
        border: 0;
        pointer-events: none;

        ${({ isInverted, theme }) => (isInverted ? rippleEffect() : rippleEffect(theme.colorSecondary))}
    }

    &:focus,
    &:hover {
        background-color: ${({ isInverted, theme }) => (isInverted ? hexToRgb(theme.colorSecondary, 0.25) : hexToRgb(theme.colorTertiary, 0.25))};
        color: ${({ isInverted, theme }) => (isInverted ? theme.colorTextContrast.primary : theme.colorText.secondary)};
    }

    &:active::after {
        ${rippleEffectReset()}
        border: 0;
    }

    span {
        display: block;
    }
`;

StyledButtonIcon.defaultProps = {
    theme: themeBasic,
};

export default StyledButtonIcon;
