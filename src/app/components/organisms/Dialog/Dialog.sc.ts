import { Alignment, Easing, Elevation } from '../../../types';
import styled, { css } from 'styled-components';
import { DialogButtonClosePosition } from './types';
import { fadeInEffect } from '../../../styles/mixins/transitionEffects';
import getAlignment from '../../../styles/mixins/getAlignment';
import getElevation from '../../../styles/mixins/getElevation';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import setCentered from '../../../styles/mixins/setCentered';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledDialogProps {
    elevation: Elevation;
    height: string;
    isVisible: boolean;
    transitionDuration: number;
    transitionEasing: Easing;
    width: string;
}

export const StyledDialog = styled.div<StyledDialogProps>`
    ${setBoxSizing()}
    ${setCentered()}
    ${({ elevation }) => getElevation(elevation)}
    ${({ isVisible, transitionDuration, transitionEasing }) => fadeInEffect({
        duration: transitionDuration,
        easing: transitionEasing,
        isVisible,
    })}
    position: fixed;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    z-index: 3;
    border-radius: ${({ theme }) => theme.spacing(1)};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};
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
    padding: ${({ theme }) => theme.spacing(1)};
    text-align: ${({ position }) => (position === DialogButtonClosePosition.LEFT ? 'left' : 'right')};
    color: ${({ theme }) => theme.colorText.primary};
    font-size: ${({ theme }) => theme.spacing(3)};

    ${({ position }) => position === DialogButtonClosePosition.LEFT && css`
        left: 2px;
    `}

    ${({ position }) => position === DialogButtonClosePosition.RIGHT && css`
        right: 2px;
    `}

    &:active,
    &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.colorTextContrast.primary};
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
    ${({ alignment }) => getAlignment(alignment)}
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h1)}
    display: flex;
    align-items: center;
    border-top-left-radius: ${({ theme }) => theme.spacing(1)};
    border-top-right-radius: ${({ theme }) => theme.spacing(1)};
    background-color: ${({ theme }) => theme.colorPrimary};
    padding: ${({ theme }) => theme.spacing(2)};
    min-height: ${({ theme }) => theme.spacing(7)};
    color: ${({ theme }) => theme.colorTextContrast.primary};
`;

Header.defaultProps = {
    theme: themeBasic,
};

interface BodyProps {
    alignment: Alignment;
    hasHeader: boolean;
}

export const Body = styled.div<BodyProps>`
    ${({ alignment }) => getAlignment(alignment, false)}
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)}
    display: grid;
    background-color: ${({ theme }) => theme.card.backgroundColor};
    padding: ${({ theme }) => theme.spacing(2)};
    height: 100%;
    overflow: auto;
    color: ${({ theme }) => theme.colorText.primary};

    ${({ hasHeader, theme }) => !hasHeader && css`
        border-radius: ${theme.spacing(1, 1, 0, 0)};
    `}
`;

Body.defaultProps = {
    theme: themeBasic,
};
