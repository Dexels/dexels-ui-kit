import { rippleEffect, rippleEffectInit, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import { isEmpty } from '../../../../lib';
import { Theme } from '../../../types';
import { themeBasic } from '../../../styles/theming/themes/basic';

const getTabStyling = (theme: Theme): FlattenSimpleInterpolation => css`
    border: 0;
    background-color: ${`${theme.background.secondary}`};
`;

interface TabProps {
    hasPadding: boolean;
    isSmall: boolean;
}

export const StyledTabs = styled.div<TabProps>`
    ${({ hasPadding, isSmall, theme }): SimpleInterpolation =>
        hasPadding &&
        isSmall &&
        css`
            padding: ${theme.spacing(0, 2)};
        `}

    ${({ hasPadding, isSmall, theme }): SimpleInterpolation =>
        hasPadding &&
        !isSmall &&
        css`
            padding: ${theme.spacing(0, 5)};
        `}
`;

StyledTabs.defaultProps = {
    theme: themeBasic,
};

export const TabHeaders = styled.div`
    ${({ theme }): FlattenSimpleInterpolation => getTabStyling(theme)}
    display: flex;
    flex-wrap: nowrap;
`;

TabHeaders.defaultProps = {
    theme: themeBasic,
};

interface TabHeaderProps {
    isActive: boolean;
    isChangeTabAllowed: boolean;
    isDisabled: boolean;
    isFullWidth: boolean;
}

export const TabHeader = styled.button<TabHeaderProps>`
    ${rippleEffectInit()}
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().caption2)}
    ${({ theme }): FlattenSimpleInterpolation => getTabStyling(theme)}
    appearance: none;
    outline: none;
    border-bottom: 2px solid ${({ theme }): string => theme.shades.six};
    cursor: pointer;
    padding: ${({ theme }): string => theme.spacing(1.25, 2)};
    height: ${({ theme }): string => theme.spacing(6.75)};
    text-align: center;
    color: ${({ theme }): string => theme.colorText.primary};

    ${({ isFullWidth }): SimpleInterpolation =>
        !isFullWidth &&
        css`
            &:last-of-type {
                flex-grow: 2;
            }
        `}

    ${({ isFullWidth }): SimpleInterpolation =>
        isFullWidth &&
        css`
            flex-grow: 2;
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
        ${({ isChangeTabAllowed, theme }): SimpleInterpolation =>
            isChangeTabAllowed && rippleEffect(theme.colorSecondary)}
    }

    &:active,
    &:hover {
        ${({ isChangeTabAllowed, theme }): SimpleInterpolation =>
            isChangeTabAllowed &&
            css`
                border-bottom-color: ${theme.colorSecondary};
                color: ${theme.colorText.secondary};
            `}
    }

    &:active::after {
        ${({ isChangeTabAllowed }): SimpleInterpolation => isChangeTabAllowed && rippleEffectReset()}
    }
`;

export const TabHeaderText = styled.div`
    max-height: ${({ theme }): string => theme.spacing(4.75)};
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.3; /* necessary in this case!!! */
    white-space: break-spaces;
`;

TabHeader.defaultProps = {
    theme: themeBasic,
};

export interface TabbPanelProps {
    padding: { bottom: number; left: number; right: number; top: number };
}

export const TabPanel = styled.div<TabbPanelProps>`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body2)}

    ${({ padding }): SimpleInterpolation =>
        !isEmpty(padding) &&
        css`
            padding: ${padding.top}px ${padding.left}px ${padding.bottom}px ${padding.right}px;
        `}
`;

TabPanel.defaultProps = {
    theme: themeBasic,
};
