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
    background-color: ${({ theme }) => theme.alertDialog.backgroundColorHeader};
    padding: 16px;
    height: ${({ heightHeader }) => heightHeader};
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
    background-color: ${({ theme }) => theme.alertDialog.backgroundColorBody};
    padding: 16px;
    height: 100%;
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
    display: flex;
    align-items: center;
    border-bottom-left-radius: ${({ theme }) => theme.alertDialog.borderRadius};
    border-bottom-right-radius: ${({ theme }) => theme.alertDialog.borderRadius};
    background-color: ${({ theme }) => theme.alertDialog.backgroundColorFooter};
    padding: 16px;
    height: ${({ heightFooter }) => heightFooter};
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
    max-width: ${({ widthDialog }) => widthDialog};
    height: ${({ heightDialog }) => heightDialog};
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
