import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { Easing } from '../../../types';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { transitionEffect } from '../../../styles/mixins/transitionEffects';

interface StyledSidePanelProps {
    isVisible: boolean;
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
    position: fixed;
    top: 0;
    right: 0;
    transform: ${({ isVisible }): string => `translate3d(${isVisible ? 0 : '100%'}, 0, 0)`};
    z-index: 6;
    background-color: ${({ theme }): string => theme.background.secondary};
    padding: ${({ theme }): string => theme.spacing(3.5)} 0 0 0;
    width: 100%;
    max-width: ${({ theme }): string => theme.spacing(72)};
    height: 100%;
    overflow: auto;
`;

StyledSidePanel.defaultProps = {
    theme: themeBasic,
};

export const HeaderWrapper = styled.header`
    position: relative;
    flex: 0 0 auto;
`;

export const Body = styled.div`
    flex: 1 1 auto;
    padding: ${({ theme }): string => theme.spacing(2)};
    overflow: auto;
    color: ${({ theme }): string => theme.colorText.primary};
`;
