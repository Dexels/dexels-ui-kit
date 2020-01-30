import { rippleEffect, rippleEffectInit, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import { Elevations } from '../../../types';
import getElevation from '../../../styles/mixins/getElevation';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledTabsProps {
    elevation: Elevations;
}

export const StyledTabs = styled.div<StyledTabsProps>`
    ${({ elevation }) => getElevation(elevation)}
`;

interface TabHeaderProps {
    isActive: boolean;
    isDisabled: boolean;
    isFullWidth: boolean;
}

export const TabHeader = styled.button<TabHeaderProps>`
    ${rippleEffectInit()}
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h3)}
    appearance: none;
    outline: none;
    border: 0;
    border-bottom: 2px solid ${({ theme }) => theme.shades.nine};
    background-color: ${({ theme }) => theme.shades.nine};
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing(0, 3)};
    height: ${({ theme }) => theme.spacing(6)};
    text-align: center;
    color: ${({ theme }) => theme.colorText.primary};

    ${({ isFullWidth }) => isFullWidth && css`
        width: 100%;
    `}

    ${({ isActive, theme }) => isActive && css`
        border-bottom-color: ${theme.colorPrimary};
    `}

    ${({ isDisabled, theme }) => isDisabled && css`
        color: ${theme.colorDisabled};
        pointer-events: none;
    `}

    &::after {
        ${({ theme }) => rippleEffect(theme.colorSecondary)}
    }

    &:active,
    &:hover {
        border-bottom-color: ${({ theme }) => theme.colorSecondary};
        color: ${({ theme }) => theme.colorText.secondary};
    }

    &:active::after {
        ${rippleEffectReset()}
    }
`;

TabHeader.defaultProps = {
    theme: themeBasic,
};

export const TabHeaderList = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)}
    display: flex;
    flex-wrap: nowrap;
    border-bottom: 1px solid ${({ theme }) => theme.shades.five};
`;

TabHeaderList.defaultProps = {
    theme: themeBasic,
};

export const TabPanel = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)}
`;

TabPanel.defaultProps = {
    theme: themeBasic,
};
