import { rippleEffect, rippleEffectInit, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import { hexToRgb } from '../../../utils/functions/colorFunctions';
import { Size } from '../../../types';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledButtonIconProps {
    isDisabled: boolean;
    isInverted: boolean;
    size: Size;
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
    padding: ${({ theme }): string => theme.spacing(1)};
    overflow: hidden;
    color: ${({ isInverted, theme }): string => (isInverted ? theme.colorTextContrast.primary : theme.colorText.primary)};

    ${({ size }): FlattenSimpleInterpolation => css`
        ${size === Size.SMALL && css`
            font-size: 14px;
        `}

        ${size === Size.MEDIUM && css`
        font-size: 18px;
        `}

        ${size === Size.LARGE && css`
            font-size: 20px;
        `}

        ${size === Size.XLARGE && css`
            font-size: 24px;
        `}
    `}

    ${({ isDisabled, isInverted, theme }): SimpleInterpolation => isDisabled && css`
        color: ${isInverted ? theme.shades.seven : theme.colorDisabled};
        pointer-events: none;
    `}

    &::after {
        border: 0;
        pointer-events: none;

        ${({ isInverted, theme }): FlattenSimpleInterpolation => (isInverted ? rippleEffect() : rippleEffect(theme.colorSecondary))}
    }

    &:focus,
    &:hover {
        background-color: ${({ isInverted, theme }): string => (isInverted ? hexToRgb(theme.colorSecondary, 0.25) : hexToRgb(theme.colorTertiary, 0.25))};
        color: ${({ isInverted, theme }): string => (isInverted ? theme.colorTextContrast.primary : theme.colorText.secondary)};
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
