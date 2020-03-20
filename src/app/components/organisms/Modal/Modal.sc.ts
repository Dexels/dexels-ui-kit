import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { Easing } from '../../../types';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { slideUpEffect } from '../../../styles/mixins/transitionEffects';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledModalProps {
    isVisible: boolean;
    transitionDuration: number;
    transitionEasing: Easing;
}

export const StyledModal = styled.div<StyledModalProps>`
    ${setBoxSizing()}
    ${({ isVisible, transitionDuration, transitionEasing }): FlattenSimpleInterpolation => slideUpEffect({
        duration: transitionDuration,
        easing: transitionEasing,
        isVisible,
    })}
    display: flex;
    position: fixed;
    top: 0;
    left: 50%;
    flex-direction: column;
    flex-wrap: nowrap;
    opacity: ${({ isVisible }): number => (isVisible ? 1 : 0)};
    z-index: 3;
    padding: ${({ theme }): string => theme.spacing(3.5)} 0 0 0;
    width: 100%;
    max-width: ${({ theme }): string => theme.spacing(128)};
    height: 100%;
`;

StyledModal.defaultProps = {
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

Body.defaultProps = {
    theme: themeBasic,
};
