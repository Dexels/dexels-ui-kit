import { Easing, ModalSize, zIndex } from '../../../types';
import styled, { css, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import { Overlay } from '../../molecules/Overlay/Overlay';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { slideUpEffect } from '../../../styles/mixins/transitionEffects';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledModalProps {
    isVisible: boolean;
    size: ModalSize;
    transitionDuration: number;
    transitionEasing: Easing;
}

export const StyledModalOverlay = styled(Overlay)`
    z-index: ${zIndex.MODAL - 1};
`;

export const StyledModal = styled.div<StyledModalProps>`
    ${setBoxSizing()}
    ${({ isVisible, transitionDuration, transitionEasing }): FlattenSimpleInterpolation =>
        slideUpEffect({
            duration: transitionDuration,
            easing: transitionEasing,
            isVisible,
        })}
    ${({ size, theme }): SimpleInterpolation => css`
        ${size === ModalSize.SMALL &&
        css`
            max-width: ${theme.spacing(60)};
        `}

        ${size === ModalSize.MEDIUM &&
        css`
            max-width: ${theme.spacing(80)};
        `}

        ${size === ModalSize.LARGE &&
        css`
            max-width: ${theme.spacing(128)};
        `}

        ${size === ModalSize.XLARGE &&
        css`
            max-width: ${theme.spacing(160)};
        `}

        ${size === ModalSize.FULL &&
        css`
            max-width: 100%;
        `}
    `}

    display: flex;
    position: fixed;
    top: 0;
    left: 50%;
    flex-direction: column;
    flex-wrap: nowrap;
    opacity: ${({ isVisible }): number => (isVisible ? 1 : 0)};
    z-index: ${zIndex.MODAL};
    padding: ${({ theme }): string => theme.spacing(3.5)} 0 0 0;
    width: 100%;
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
