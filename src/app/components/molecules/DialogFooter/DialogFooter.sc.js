import defaultTheme from '../../../styles/theme/theme';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const TextWrapper = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    flex-grow: 2;
    padding-right: 8px;
`;

TextWrapper.propTypes = {
    theme: PropTypes.shape({
        dialogFooter: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

TextWrapper.defaultProps = {
    theme: defaultTheme,
};

export const ButtonBarWrapper = styled.div`
    display: contents;
    justify-content: flex-end;
`;

export const ButtonWrapper = styled.div`
    margin: 0 16px 0 0;
`;

export const StyledDialogFooter = styled.footer`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    /* border-bottom-left-radius: ${({ theme }) => theme.dialogFooter.borderRadius};
    border-bottom-right-radius: ${({ theme }) => theme.dialogFooter.borderRadius}; */
    background-color: ${({ theme }) => theme.dialogFooter.backgroundColor};
    padding: 16px;
    height: 76px;
`;

StyledDialogFooter.propTypes = {
    theme: PropTypes.shape({
        dialogFooter: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

StyledDialogFooter.defaultProps = {
    theme: defaultTheme,
};
