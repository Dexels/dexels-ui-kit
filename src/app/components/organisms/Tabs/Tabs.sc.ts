import { rippleEffect, rippleEffectInit, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';

export const TabHeaders = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

TabHeaders.defaultProps = {
    theme: themeBasic,
};

interface TabHeaderProps {
    isActive: boolean;
    isDisabled: boolean;
    isFullWidth: boolean;
}

export const TabHeader = styled.button<TabHeaderProps>`
    ${rippleEffectInit()}
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().buttonSmall)}
    appearance: none;
    outline: none;
    border: 0;
    border-bottom: 2px solid ${({ theme }): string => theme.colorDisabled};
    background-color: ${({ theme }): string => theme.background.secondary};
    cursor: pointer;
    padding: ${({ theme }): string => theme.spacing(1.25, 3)};
    text-align: center;
    color: ${({ theme }): string => theme.colorText.primary};

    ${({ isFullWidth }): SimpleInterpolation =>
        isFullWidth &&
        css`
            width: 100%;
        `}

    ${({ isActive, theme }): SimpleInterpolation =>
        isActive &&
        css`
            border-bottom-color: ${theme.colorPrimary};
        `}

    ${({ isDisabled, theme }): SimpleInterpolation =>
        isDisabled &&
        css`
            color: ${theme.colorDisabled};
            pointer-events: none;
        `}

    &::after {
        ${({ theme }): FlattenSimpleInterpolation => rippleEffect(theme.colorSecondary)}
    }

    &:active,
    &:hover {
        border-bottom-color: ${({ theme }): string => theme.colorSecondary};
        color: ${({ theme }): string => theme.colorText.secondary};
    }

    &:active::after {
        ${rippleEffectReset()}
    }
`;

TabHeader.defaultProps = {
    theme: themeBasic,
};

export const TabPanel = styled.div`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body2)}
`;

TabPanel.defaultProps = {
    theme: themeBasic,
};
