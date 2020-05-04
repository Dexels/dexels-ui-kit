import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { Easing } from '../../../types';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { transitionEffect } from '../../../styles/mixins/transitionEffects';

interface StyledSidePannelProps {
    isVisible: boolean;
    transitionDuration: number;
    transitionEasing: Easing;
}

export const StyledSidePannel = styled.div<StyledSidePannelProps>`
    ${setBoxSizing()}
    position: fixed;
    top: 0;
    right: 0;
    transform: ${({ isVisible }): string => `translate3d(${isVisible ? 0 : '100%'}, 0, 0)`};
    ${({ transitionDuration, transitionEasing }): FlattenSimpleInterpolation =>
        transitionEffect({
            duration: transitionDuration,
            easing: transitionEasing,
        })}
    z-index: 6;
    background-color: ${({ theme }): string => theme.background.secondary};
    width: 100%;
    max-width: ${({ theme }): string => theme.spacing(72)};
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: ${({ theme }): string => theme.spacing(3.5)} 0 0 0;
`;

StyledSidePannel.defaultProps = {
    theme: themeBasic,
};

export const HeaderWrapper = styled.header`
    position: relative;
    flex: 0 0 auto;
`;

export const Body = styled.div`
    flex: 1 1 auto;
    background-color: ${({ theme }): string => theme.card.backgroundColor};
    padding: ${({ theme }): string => theme.spacing(2)};
    overflow: auto;
    color: ${({ theme }): string => theme.colorText.primary};
`;
