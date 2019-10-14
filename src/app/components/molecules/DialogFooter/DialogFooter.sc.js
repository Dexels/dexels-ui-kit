import defaultTheme from '../../../styles/theme/theme';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const StyledDialogFooter = styled.footer`
    ${setBoxSizing()};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    background-color: ${({ theme }) => theme.dialogFooter.backgroundColor};
    padding: 16px;
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

export const TextWrapper = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    flex: 1 1 auto;
    padding: 0 8px 0 0;
    word-break: break-all;
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
    display: flex;
    flex: 0 1 auto;
    flex-wrap: nowrap;
    align-items: center;
`;

export const ButtonWrapper = styled.div`
    margin: 0 16px 0 0;
`;
