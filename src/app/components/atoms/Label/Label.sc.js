import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import PropTypes from 'prop-types';

export const StyledLabel = styled.label`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)};
    cursor: inherit;
    color: ${({ theme }) => theme.label.colorDefault};

    ${({ isHovered, theme }) => isHovered && css`
        color: ${theme.label.colorHover};
    `};

    ${({ isActive, theme }) => isActive && css`
        color: ${theme.label.colorActive};
    `};

    ${({ isFocussed, theme }) => isFocussed && css`
        color: ${theme.label.colorFocus};
    `};

    ${({ isValid, theme }) => isValid && css`
        color: ${theme.label.colorValid};
    `};

    ${({ hasError, theme }) => hasError && css`
        color: ${theme.label.colorError};
    `};

    ${({ isDisabled, theme }) => isDisabled && css`
        color: ${theme.label.colorDisabled};
    `};

    ${({ isSmall, theme }) => isSmall && theme.textStyling(theme.availableTextStyles().caption)};
`;

StyledLabel.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isActive: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFocussed: PropTypes.bool.isRequired,
    isSmall: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
        availableTextStyles: PropTypes.func.isRequired,
        label: PropTypes.shape({
            colorActive: PropTypes.string.isRequired,
            colorDefault: PropTypes.string.isRequired,
            colorDisabled: PropTypes.string.isRequired,
            colorError: PropTypes.string.isRequired,
            colorHover: PropTypes.string.isRequired,
            colorValid: PropTypes.string.isRequired,
        }),
        textStyling: PropTypes.func.isRequired,
    }),
};

StyledLabel.defaultProps = {
    theme: defaultTheme,
};

export default StyledLabel;
