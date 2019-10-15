import { DIALOG_ALERT_ALIGNMENTS, DIALOG_ALERT_DIRECTIONS, DIALOG_ALERT_ELEVATIONS } from './DialogAlert.consts';
import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import getAlignment from '../../../styles/mixins/getAlignment';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const StyledDialogAlert = styled.div`
    ${setBoxSizing()};
    ${({ elevation }) => getElevation(elevation)};
    margin: auto;
    border-radius: ${({ theme }) => theme.dialogAlert.borderRadius};
    width: ${({ width }) => width};
`;

StyledDialogAlert.propTypes = {
    elevation: PropTypes.oneOf(Object.values(DIALOG_ALERT_ELEVATIONS)).isRequired,
    theme: PropTypes.shape({
        dialogAlert: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
    width: PropTypes.string.isRequired,
};

StyledDialogAlert.defaultProps = {
    theme: defaultTheme,
};

export const ButtonWrapper = styled.div`
    margin: 0 16px 0 0;
`;

export const ButtonClose = styled.button`
    position: fixed;
    top: 2px;
    z-index: 2;
    outline: none;
    border: 0;
    background-color: ${({ theme }) => theme.dialogAlert.buttonCloseBackgroundColor};
    cursor: pointer;
    padding: 8px;
    text-align: ${({ position }) => (position === DIALOG_ALERT_DIRECTIONS.LTR ? 'left' : 'right')};
    color: ${({ theme }) => theme.dialogAlert.buttonCloseColor};
    font-size: ${({ theme }) => theme.dialogAlert.buttonCloseSize};

    ${({ position }) => position === DIALOG_ALERT_DIRECTIONS.LTR && css`
        left: 2px;
    `};

    ${({ position }) => position === DIALOG_ALERT_DIRECTIONS.RTL && css`
        right: 2px;
    `};

    &:active,
    &:hover {
        background-color: ${({ theme }) => theme.dialogAlert.buttonCloseBackgroundColorHover};
        color: ${({ theme }) => theme.dialogAlert.buttonCloseColorHover};
    }

    span {
        display: block;
    }
`;

ButtonClose.propTypes = {
    position: PropTypes.oneOf(Object.values(DIALOG_ALERT_DIRECTIONS)).isRequired,
    theme: PropTypes.shape({
        dialogAlert: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

ButtonClose.defaultProps = {
    theme: defaultTheme,
};

export const Header = styled.header`
    ${({ alignment }) => getAlignment(alignment)};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h1)};
    display: flex;
    align-items: center;
    border-top-left-radius: ${({ theme }) => theme.dialogAlert.borderRadius};
    border-top-right-radius: ${({ theme }) => theme.dialogAlert.borderRadius};
    background-color: ${({ theme }) => theme.dialogAlert.headerBackgroundColor};
    padding: 16px;
    min-height: 56px;
    color: ${({ theme }) => theme.dialogAlert.headerColor};
`;

Header.propTypes = {
    alignment: PropTypes.oneOf(Object.values(DIALOG_ALERT_ALIGNMENTS)).isRequired,
    theme: PropTypes.shape({
        dialogAlert: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

Header.defaultProps = {
    theme: defaultTheme,
};

export const Body = styled.div`
    ${({ alignment }) => getAlignment(alignment)};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)};
    background-color: ${({ theme }) => theme.dialogAlert.bodyBackgroundColor};
    padding: 16px;
    color: ${({ theme }) => theme.dialogAlert.bodyColor};

    ${({ hasHeader, theme }) => !hasHeader && css`
        border-radius: ${theme.dialogAlert.borderRadius} ${theme.dialogAlert.borderRadius} 0 0;
    `};
`;

Body.propTypes = {
    alignment: PropTypes.oneOf(Object.values(DIALOG_ALERT_ALIGNMENTS)).isRequired,
    hasHeader: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
        dialogAlert: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

Body.defaultProps = {
    theme: defaultTheme,
};
