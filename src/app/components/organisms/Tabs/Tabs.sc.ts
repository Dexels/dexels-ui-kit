import { rippleEffect, rippleEffectInit, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import { Elevation } from '../../../types';
import { getElevation } from '../../../styles/mixins/getElevation';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledTabsProps {
    elevation: Elevation;
}

export const StyledTabs = styled.div<StyledTabsProps>`
    ${({ elevation }): FlattenSimpleInterpolation => getElevation(elevation)}
`;

interface TabHeaderProps {
    isActive: boolean;
    isDisabled: boolean;
    isFullWidth: boolean;
}

export const TabHeader = styled.button<TabHeaderProps>`
    ${rippleEffectInit()}
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().h3)}
    appearance: none;
    outline: none;
    border: 0;
    border-bottom: 2px solid ${({ theme }): string => theme.shades.nine};
    background-color: ${({ theme }): string => theme.shades.nine};
    cursor: pointer;
    padding: ${({ theme }): string => theme.spacing(0, 3)};
    height: ${({ theme }): string => theme.spacing(6)};
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

export const TabHeaderList = styled.div`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body2)}
    display: flex;
    flex-wrap: nowrap;
    border-bottom: 1px solid ${({ theme }): string => theme.shades.five};
`;

TabHeaderList.defaultProps = {
    theme: themeBasic,
};

export const TabPanel = styled.div`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body2)}
`;

TabPanel.defaultProps = {
    theme: themeBasic,
};
