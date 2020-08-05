import { Easing, Elevation, Status } from '../../../types';
import styled, { css, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import { DialogButtonClosePosition } from './types';
import { fadeInEffect } from '../../../styles/mixins/transitionEffects';
import { getElevation } from '../../../styles/mixins/getElevation';
import { getStatusColor } from '../../../styles/mixins/getStatusColor';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { setCentered } from '../../../styles/mixins/setCentered';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface OverlayWrapperProps {
    isVisible: boolean;
}

export const OverlayWrapper = styled.div<OverlayWrapperProps>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9998;
    width: 100%;
    height: 100%;
    pointer-events: ${({ isVisible }): string => (isVisible ? 'auto' : 'none')};
`;

interface WrapperProps {
    isVisible: boolean;
    transitionDuration: number;
    transitionEasing: Easing;
}

export const Wrapper = styled.div<WrapperProps>`
    ${setBoxSizing()}
    ${setCentered()}
    ${({ isVisible, transitionDuration, transitionEasing }): FlattenSimpleInterpolation =>
        fadeInEffect({
            duration: transitionDuration,
            easing: transitionEasing,
            isVisible,
        })}
    position: fixed;
    opacity: ${({ isVisible }): number => (isVisible ? 1 : 0)};
    z-index: 9999;
    padding: 40px;
    width: 100%;
    max-width: 544px;
    max-height: 100%;
    overflow: auto;
    pointer-events: ${({ isVisible }): string => (isVisible ? 'auto' : 'none')};
`;

interface StyledDialogProps {
    elevation: Elevation;
}

export const StyledDialog = styled.div<StyledDialogProps>`
    ${({ elevation }): FlattenSimpleInterpolation => getElevation(elevation)}
    border-radius: ${({ theme }): string => theme.spacing(1)};
    overflow: hidden;
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
    z-index: 10000;
    outline: none;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    padding: ${({ theme }): string => theme.spacing(1)};
    color: ${({ theme }): string => theme.colorText.primary};

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
    hasHeaderPadding: boolean;
}

export const Header = styled.header<HeaderProps>`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().h1)}
    background-color: ${({ theme }): string => theme.colorPrimary};
    min-height: ${({ theme }): string => theme.spacing(7)};
    color: ${({ theme }): string => theme.colorTextContrast.primary};

    ${({ hasHeaderPadding, theme }): SimpleInterpolation =>
        hasHeaderPadding &&
        css`
            padding: ${theme.spacing(2, 3)};
        `}
`;

Header.defaultProps = {
    theme: themeBasic,
};

interface BodyProps {
    hasBodyPadding: boolean;
}

export const Body = styled.div<BodyProps>`
    background-color: ${({ theme }): string => theme.card.backgroundColor};

    ${({ hasBodyPadding, theme }): SimpleInterpolation =>
        hasBodyPadding &&
        css`
            padding: ${theme.spacing(2, 3)};
        `}
`;

Body.defaultProps = {
    theme: themeBasic,
};

export const Content = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
`;

interface IconWrapperProps {
    status: Status;
}

export const IconWrapper = styled.div<IconWrapperProps>`
    flex: 0 0 auto;
    margin: 0 16px 0 0;
    color: ${({ status, theme }): string => getStatusColor(status, theme)};

    span {
        display: block;
    }
`;

IconWrapper.defaultProps = {
    theme: themeBasic,
};

export const Text = styled.div`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
    color: ${({ theme }): string => theme.colorTextBody.primary};
`;

Text.defaultProps = {
    theme: themeBasic,
};

interface ChildrenWrapperProps {
    hasPaddingLeft: boolean;
    hasPaddingTop: boolean;
}

export const ChildrenWrapper = styled.div<ChildrenWrapperProps>`
    ${({ hasPaddingLeft, theme }): SimpleInterpolation =>
        hasPaddingLeft &&
        css`
            padding-left: ${theme.spacing(6)};
        `}

    ${({ hasPaddingTop, theme }): SimpleInterpolation =>
        hasPaddingTop &&
        css`
            padding-top: ${theme.spacing(2)};
        `}
`;

ChildrenWrapper.defaultProps = {
    theme: themeBasic,
};
