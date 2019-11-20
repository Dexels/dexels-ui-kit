import { DIALOG_ALIGNMENTS, DIALOG_DIRECTIONS, DIALOG_ELEVATIONS } from './Dialog.consts';
import styled, { css } from 'styled-components';
import { themeBasic, themePropTypes } from '../../../styles/theming/themes/basic';
import getAlignment from '../../../styles/mixins/getAlignment';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';

export const StyledDialog = styled.div`
    ${setBoxSizing()}
    ${({ elevation }) => getElevation(elevation)}
    margin: auto;
    border-radius: ${({ theme }) => theme.spacing(1)};
    width: ${({ width }) => width};

`;

StyledDialog.propTypes = {
    elevation: PropTypes.oneOf(Object.values(DIALOG_ELEVATIONS)).isRequired,
    theme: themePropTypes,
    width: PropTypes.string.isRequired,
};

StyledDialog.defaultProps = {
    theme: themeBasic,
};

export const ButtonWrapper = styled.div`
    margin: ${({ theme }) => theme.spacing(0, 2, 0, 0)};
`;

ButtonWrapper.propTypes = {
    theme: themePropTypes,
};

ButtonWrapper.defaultProps = {
    theme: themeBasic,
};

export const ButtonClose = styled.button`
    position: fixed;
    top: 2px;
    z-index: 2;
    outline: none;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing(1)};
    text-align: ${({ position }) => (position === DIALOG_DIRECTIONS.LTR ? 'left' : 'right')};
    color: ${({ theme }) => theme.colorHeaderText.primary};
    font-size: ${({ theme }) => theme.spacing(3)};

    ${({ position }) => position === DIALOG_DIRECTIONS.LTR && css`
        left: 2px;
    `}

    ${({ position }) => position === DIALOG_DIRECTIONS.RTL && css`
        right: 2px;
    `}

    &:active,
    &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.colorContrastText.primary};
    }

    span {
        display: block;
    }
`;

ButtonClose.propTypes = {
    position: PropTypes.oneOf(Object.values(DIALOG_DIRECTIONS)).isRequired,
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
    color: ${({ theme }) => theme.colorContrastText.primary};
`;

Header.propTypes = {
    alignment: PropTypes.oneOf(Object.values(DIALOG_ALIGNMENTS)).isRequired,
    theme: themePropTypes,
};

Header.defaultProps = {
    theme: themeBasic,
};

export const Body = styled.div`
    ${({ alignment }) => getAlignment(alignment)}
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)}
    background-color: ${({ theme }) => theme.shades.nine};
    padding: ${({ theme }) => theme.spacing(2)};
    color: ${({ theme }) => theme.colorHeaderText.primary};

    ${({ hasHeader, theme }) => !hasHeader && css`
        border-radius: ${theme.spacing(1, 1, 0, 0)};
    `}
`;

Body.propTypes = {
    alignment: PropTypes.oneOf(Object.values(DIALOG_ALIGNMENTS)).isRequired,
    hasHeader: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

Body.defaultProps = {
    theme: themeBasic,
};
