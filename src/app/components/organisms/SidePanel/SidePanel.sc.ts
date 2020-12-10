import { Easing, SidePanelSize, zIndex } from '../../../types';
import styled, { css, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { transitionEffect } from '../../../styles/mixins/transitionEffects';

interface StyledSidePanelProps {
    isModalSidePanel: boolean;
    isVisible: boolean;
    size: SidePanelSize;
    transitionDuration: number;
    transitionEasing: Easing;
}

export const StyledSidePanel = styled.div<StyledSidePanelProps>`
    ${setBoxSizing()}
    ${({ transitionDuration, transitionEasing }): FlattenSimpleInterpolation =>
        transitionEffect({
            duration: transitionDuration,
            easing: transitionEasing,
        })}

    ${({ size, theme }): SimpleInterpolation => css`
        ${size === SidePanelSize.SMALL &&
        css`
            max-width: ${theme.spacing(60)};
        `}

        ${size === SidePanelSize.MEDIUM &&
        css`
            max-width: ${theme.spacing(72)};
        `}

        ${size === SidePanelSize.LARGE &&
        css`
            max-width: ${theme.spacing(84)};
        `}

        ${size === SidePanelSize.XLARGE &&
        css`
            max-width: ${theme.spacing(128)};
        `}

        ${size === SidePanelSize.FULL &&
        css`
            max-width: 100%;
        `}
    `}

    position: fixed;
    top: 0;
    right: 0;
    transform: ${({ isVisible }): string => `translate3d(${isVisible ? 0 : '100%'}, 0, 0)`};
    z-index: ${({ isModalSidePanel }): number =>
        isModalSidePanel
            ? zIndex.SIDEPANEL + 2
            : zIndex.SIDEPANEL}; /* Overlay will get a different z-index as well when isModalSidePanel = true */
    background-color: ${({ theme }): string => theme.background.secondary};
    width: 100%;
    height: 100%;
    overflow: auto;
`;

StyledSidePanel.defaultProps = {
    theme: themeBasic,
};

export const HeaderWrapper = styled.header`
    position: relative;
`;
