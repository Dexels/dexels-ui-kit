import {
    DIALOG_BODY_ALIGNMENTS,
    DIALOG_BUTTON_CLOSE_POSITIONS,
    DIALOG_EASINGS,
    DIALOG_ELEVATIONS,
    DIALOG_HEADER_ALIGNMENTS,
} from './Dialog.consts';
import styled, { css } from 'styled-components';
import { fadeInEffect } from '../../../styles/mixins/transitionEffects';
import getAlignment from '../../../styles/mixins/getAlignment';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import setCentered from '../../../styles/mixins/setCentered';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/propTypes';

export const StyledDialog = styled.div`
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
    pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};
`;

StyledDialog.propTypes = {
    elevation: PropTypes.oneOf(Object.values(DIALOG_ELEVATIONS)).isRequired,
    isVisible: PropTypes.bool.isRequired,
    theme: themePropTypes,
    transitionDuration: PropTypes.number.isRequired,
    transitionEasing: PropTypes.oneOf(Object.values(DIALOG_EASINGS)).isRequired,
    width: PropTypes.string.isRequired,
};

StyledDialog.defaultProps = {
    theme: themeBasic,
};

export const ButtonClose = styled.button`
    position: fixed;
    top: 2px;
    z-index: 3;
    outline: none;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing(1)};
    text-align: ${({ position }) => (position === DIALOG_BUTTON_CLOSE_POSITIONS.LEFT ? 'left' : 'right')};
    color: ${({ theme }) => theme.colorText.primary};
    font-size: ${({ theme }) => theme.spacing(3)};

    ${({ position }) => position === DIALOG_BUTTON_CLOSE_POSITIONS.LEFT && css`
        left: 2px;
    `}

    ${({ position }) => position === DIALOG_BUTTON_CLOSE_POSITIONS.RIGHT && css`
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

ButtonClose.propTypes = {
    position: PropTypes.oneOf(Object.values(DIALOG_BUTTON_CLOSE_POSITIONS)).isRequired,
    theme: themePropTypes,
};

ButtonClose.defaultProps = {
    theme: themeBasic,
};

export const Header = styled.header`
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

Header.propTypes = {
    alignment: PropTypes.oneOf(Object.values(DIALOG_HEADER_ALIGNMENTS)).isRequired,
    theme: themePropTypes,
};

Header.defaultProps = {
    theme: themeBasic,
};

export const Body = styled.div`
    ${({ alignment }) => getAlignment(alignment)}
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)}
    background-color: ${({ theme }) => theme.card.backgroundColor};
    padding: ${({ theme }) => theme.spacing(2)};
    color: ${({ theme }) => theme.colorText.primary};

    ${({ hasHeader, theme }) => !hasHeader && css`
        border-radius: ${theme.spacing(1, 1, 0, 0)};
    `}
`;

Body.propTypes = {
    alignment: PropTypes.oneOf(Object.values(DIALOG_BODY_ALIGNMENTS)).isRequired,
    hasHeader: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

Body.defaultProps = {
    theme: themeBasic,
};
