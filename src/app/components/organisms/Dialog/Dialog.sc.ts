import { Alignment, Easing, Elevation } from '../../../types';
import styled, { css, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import { DialogButtonClosePosition } from './types';
import { fadeInEffect } from '../../../styles/mixins/transitionEffects';
import { getAlignment } from '../../../styles/mixins/getAlignment';
import { getElevation } from '../../../styles/mixins/getElevation';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { setCentered } from '../../../styles/mixins/setCentered';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledDialogProps {
    elevation: Elevation;
    isVisible: boolean;
    transitionDuration: number;
    transitionEasing: Easing;
}

export const StyledDialog = styled.div<StyledDialogProps>`
    ${setBoxSizing()}
    ${setCentered()}
    ${({ elevation }): FlattenSimpleInterpolation => getElevation(elevation)}
    ${({ isVisible, transitionDuration, transitionEasing }): FlattenSimpleInterpolation =>
        fadeInEffect({
            duration: transitionDuration,
            easing: transitionEasing,
            isVisible,
        })}
    position: fixed;
    opacity: ${({ isVisible }): number => (isVisible ? 1 : 0)};
    z-index: 9999;
    border-radius: ${({ theme }): string => theme.spacing(1)};
    width: 100%;
    max-width: 464px;
    pointer-events: ${({ isVisible }): string => (isVisible ? 'auto' : 'none')};
`;

StyledDialog.defaultProps = {
    theme: themeBasic,
};

interface ButtonCloseProps {
    position: DialogButtonClosePosition;
}

export const ButtonClose = styled.button<ButtonCloseProps>`
    position: fixed;
    top: 2px;
    z-index: 3;
    outline: none;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    padding: ${({ theme }): string => theme.spacing(1)};
    text-align: ${({ position }): string => (position === DialogButtonClosePosition.LEFT ? 'left' : 'right')};
    color: ${({ theme }): string => theme.colorText.primary};
    font-size: ${({ theme }): string => theme.spacing(3)};

    ${({ position }): SimpleInterpolation =>
        position === DialogButtonClosePosition.LEFT &&
        css`
            left: 2px;
        `}

    ${({ position }): SimpleInterpolation =>
        position === DialogButtonClosePosition.RIGHT &&
        css`
            right: 2px;
        `}

    &:active,
    &:hover {
        background-color: transparent;
        color: ${({ theme }): string => theme.colorTextContrast.primary};
    }

    span {
        display: block;
    }
`;

ButtonClose.defaultProps = {
    theme: themeBasic,
};

interface HeaderProps {
    alignment: Alignment;
}

export const Header = styled.header<HeaderProps>`
    ${({ alignment }): FlattenSimpleInterpolation => getAlignment(alignment)}
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().h1)}
    display: flex;
    align-items: center;
    border-top-left-radius: ${({ theme }): string => theme.spacing(1)};
    border-top-right-radius: ${({ theme }): string => theme.spacing(1)};
    background-color: ${({ theme }): string => theme.colorPrimary};
    padding: ${({ theme }): string => theme.spacing(2)};
    min-height: ${({ theme }): string => theme.spacing(7)};
    color: ${({ theme }): string => theme.colorTextContrast.primary};
`;

Header.defaultProps = {
    theme: themeBasic,
};

interface BodyProps {
    alignment: Alignment;
    hasHeader: boolean;
}

export const Body = styled.div<BodyProps>`
    ${({ alignment }): FlattenSimpleInterpolation => getAlignment(alignment, false)}
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
    display: grid;
    background-color: ${({ theme }): string => theme.card.backgroundColor};
    padding: ${({ theme }): string => theme.spacing(2)};
    height: 100%;
    overflow: auto;
    color: ${({ theme }): string => theme.colorText.primary};

    ${({ hasHeader, theme }): SimpleInterpolation =>
        !hasHeader &&
        css`
            border-radius: ${theme.spacing(1, 1, 0, 0)};
        `}
`;

Body.defaultProps = {
    theme: themeBasic,
};
