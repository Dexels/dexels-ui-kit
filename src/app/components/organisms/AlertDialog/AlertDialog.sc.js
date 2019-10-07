import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import getAlignment from '../../../styles/mixins/getAlignment';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const ButtonWrapper = styled.div`
    margin: 0 16px 0 0;
`;

export const ButtonClose = styled.button`
    position: fixed;
    top: 10px;
    z-index: 2;
    border: 0;
    background-color: ${({ theme }) => theme.alertDialog.buttonCloseBackgroundColor};
    ${({ buttonClosePosition }) => buttonClosePosition === 'RTL' && css`
        width: 100%;
    `};
    text-align: ${({ buttonClosePosition }) => (buttonClosePosition === 'LTR' ? 'left' : 'right')};
    color: ${({ theme }) => theme.alertDialog.buttonCloseColor};
    font-size: ${({ theme }) => theme.alertDialog.buttonCloseSize};

    &:active,
    &:hover {
        background-color: ${({ theme }) => theme.alertDialog.buttonCloseBackgroundColorHover};
        color: ${({ theme }) => theme.alertDialog.buttonCloseColorHover};
    }
`;

ButtonClose.propTypes = {
    theme: PropTypes.shape({
        alertDialog: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

ButtonClose.defaultProps = {
    theme: defaultTheme,
};

export const Header = styled.header`
    ${({ headerAlignment }) => getAlignment(headerAlignment)};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h1)};
    display: flex;
    align-items: center;
    border-top-left-radius: ${({ theme }) => theme.alertDialog.borderRadius};
    border-top-right-radius: ${({ theme }) => theme.alertDialog.borderRadius};
    background-color: ${({ theme }) => theme.alertDialog.headerBackgroundColor};
    padding: 16px;
    height: ${({ headerHeight }) => headerHeight};
    color: ${({ theme }) => theme.alertDialog.headerColor};
`;

Header.propTypes = {
    theme: PropTypes.shape({
        alertDialog: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

Header.defaultProps = {
    theme: defaultTheme,
};

export const Body = styled.div`
    ${({ bodyAlignment }) => getAlignment(bodyAlignment)};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)};
    border-top-left-radius: ${({ hasHeader, theme }) => !hasHeader && theme.alertDialog.borderRadius};
    border-top-right-radius: ${({ hasHeader, theme }) => !hasHeader && theme.alertDialog.borderRadius};
    background-color: ${({ theme }) => theme.alertDialog.bodyBackgroundColor};
    padding: 16px;
    height: 100%;
    color: ${({ theme }) => theme.alertDialog.bodyColor};
`;

Body.propTypes = {
    theme: PropTypes.shape({
        alertDialog: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

Body.defaultProps = {
    theme: defaultTheme,
};

export const Footer = styled.footer`
    ${({ footerAlignment }) => getAlignment(footerAlignment)};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    display: flex;
    align-items: center;
    border-bottom-left-radius: ${({ theme }) => theme.alertDialog.borderRadius};
    border-bottom-right-radius: ${({ theme }) => theme.alertDialog.borderRadius};
    background-color: ${({ theme }) => theme.alertDialog.footerBackgroundColor};
    padding: 16px;
    height: ${({ footerHeight }) => footerHeight};
`;

Footer.propTypes = {
    theme: PropTypes.shape({
        alertDialog: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

Footer.defaultProps = {
    theme: defaultTheme,
};

export const StyledAlertDialog = styled.div`
    ${({ elevation }) => getElevation(elevation)};
    display: flex;
    flex-direction: column;
    z-index: 999;
    margin: auto;
    border-radius: ${({ theme }) => theme.alertDialog.borderRadius};
    width: ${({ dialogWidth }) => dialogWidth};
    max-width: ${({ dialogWidth }) => dialogWidth};
    height: ${({ dialogHeight }) => dialogHeight};
    max-height: ${({ dialogHeight }) => dialogHeight};
`;

StyledAlertDialog.propTypes = {
    theme: PropTypes.shape({
        alertDialog: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

StyledAlertDialog.defaultProps = {
    theme: defaultTheme,
};
