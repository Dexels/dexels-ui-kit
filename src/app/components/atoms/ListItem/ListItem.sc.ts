import { rippleEffect, rippleEffectInit, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';

interface StyledListItemProps {
    color?: string;
    hasOnClickAction: boolean;
    isDisabled?: boolean;
    isFocused?: boolean;
    isHovered?: boolean;
}

export const StyledListItem = styled.li<StyledListItemProps>`
    ${rippleEffectInit()}
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${({ theme }): string => theme.spacing(1, 0, 1, 2.5)};

    ${({ color }): SimpleInterpolation =>
        color &&
        css`
            color: ${color};
        `}

    ${({ hasOnClickAction }): SimpleInterpolation =>
        hasOnClickAction &&
        css`
            cursor: pointer;
        `}

    ${({ isDisabled, theme }): SimpleInterpolation =>
        isDisabled &&
        css`
            color: ${theme.colorDisabled};
        `}

    ${({ isFocused, isHovered, theme }): SimpleInterpolation =>
        (isFocused || isHovered) &&
        css`
            color: ${theme.colorSecondary};
        `}

    &::after {
        ${({ theme }): FlattenSimpleInterpolation => rippleEffect(theme.colorSecondary)}
    }

    &:active::after {
        ${rippleEffectReset()}
    }

    &:hover {
        background-color: ${({ theme }): string => theme.hover.backgroundColor};
    }
`;

interface AdornmentWrapperProps {
    isDisabled?: boolean;
    isFocused?: boolean;
    isHovered?: boolean;
}
export const AdornmentWrapper = styled.div<AdornmentWrapperProps>`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
    background-color: transparent;
    padding: ${({ theme }): string => theme.spacing(0, 1.5, 0, 0)};

    ${({ isDisabled, theme }): SimpleInterpolation =>
        isDisabled &&
        css`
            color: ${theme.colorDisabled};
        `}

    ${({ isFocused, isHovered, theme }): SimpleInterpolation =>
        (isFocused || isHovered) &&
        css`
            color: ${theme.colorSecondary};
        `}
`;
