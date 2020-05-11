import { Easing, SidePanelSize } from '../../../types';
import styled, { css, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { transitionEffect } from '../../../styles/mixins/transitionEffects';

interface StyledSidePanelProps {
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
        ${
            size === SidePanelSize.SMALL &&
            css`
                max-width: ${theme.spacing(60)};
            `
        }

        ${
            size === SidePanelSize.MEDIUM &&
            css`
                max-width: ${theme.spacing(72)};
            `
        }

        ${
            size === SidePanelSize.LARGE &&
            css`
                max-width: ${theme.spacing(84)};
            `
        }
    `}

    position: fixed;
    top: 0;
    right: 0;
    transform: ${({ isVisible }): string => `translate3d(${isVisible ? 0 : '100%'}, 0, 0)`};
    z-index: 6;
    background-color: ${({ theme }): string => theme.background.secondary};
    padding: ${({ theme }): string => theme.spacing(3.5)} 0 0 0;
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

export const Body = styled.div`
    padding: ${({ theme }): string => theme.spacing(2)};
    overflow: auto;
`;
