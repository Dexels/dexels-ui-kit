import defaultTheme from '../../../styles/theme/theme';
import getAlignment from '../../../styles/mixins/getAlignment';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const Header = styled.div`
    ${({ alignmentHeader }) => getAlignment(alignmentHeader)};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h1)};
    display: flex;
    align-items: center;
    border-top-left-radius: ${({ theme }) => theme.alertDialog.borderRadius};
    border-top-right-radius: ${({ theme }) => theme.alertDialog.borderRadius};
    height: ${({ heightHeader }) => heightHeader};
    padding: 16px;
    background-color: ${({ theme }) => theme.alertDialog.backgroundColorHeader};
    color: ${({ theme }) => theme.alertDialog.colorHeader};
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
    ${({ alignmentBody }) => getAlignment(alignmentBody)};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)};
    border-top-left-radius: ${({ hasHeader, theme }) => !hasHeader && theme.alertDialog.borderRadius};
    border-top-right-radius: ${({ hasHeader, theme }) => !hasHeader && theme.alertDialog.borderRadius};
    padding: 16px;
    height: 100%;
    background-color: ${({ theme }) => theme.alertDialog.backgroundColorBody};
    color: ${({ theme }) => theme.alertDialog.colorBody};
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

export const ButtonSpacer = styled.span`
    padding-right: 16px;
`;

export const Footer = styled.div`
    ${({ alignmentFooter }) => getAlignment(alignmentFooter)};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    border-bottom-left-radius: ${({ theme }) => theme.alertDialog.borderRadius};
    border-bottom-right-radius: ${({ theme }) => theme.alertDialog.borderRadius};
    display: flex;
    align-items: center;
    height: ${({ heightFooter }) => heightFooter};
    padding: 16px;
    background-color: ${({ theme }) => theme.alertDialog.backgroundColorFooter};
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
    border-radius: ${({ theme }) => theme.alertDialog.borderRadius};
    width: ${({ widthDialog }) => widthDialog};
    height: ${({ heightDialog }) => heightDialog};
    max-width: ${({ widthDialog }) => widthDialog};
    max-height: ${({ heightDialog }) => heightDialog};
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
