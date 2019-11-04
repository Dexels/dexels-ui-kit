import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const StyledLabel = styled.label`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)};
    cursor: inherit;
    color: ${({ theme }) => theme.shades.four};

    ${({ isCheckboxLabel }) => isCheckboxLabel && css`
        color: ${({ theme }) => theme.colorHeaderText.primary};
    `};

    ${({ isActive }) => isActive && css`
        color: ${({ theme }) => theme.colorHeaderText.primary};
    `};

    ${({ isFocused }) => isFocused && css`
        color: ${({ theme }) => theme.colorHeaderText.secondary};
    `};

    ${({ isValid }) => isValid && css`
        color: ${({ theme }) => theme.colorValid};
    `};

    ${({ hasError }) => hasError && css`
        color: ${({ theme }) => theme.colorInvalid};
    `};

    ${({ isDisabled }) => isDisabled && css`
        color: ${({ theme }) => theme.colorDisabled};
    `};

    ${({ isSmall, theme }) => isSmall && css`
        ${theme.textStyling(theme.availableTextStyles().caption)};
    `};
`;

StyledLabel.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isActive: PropTypes.bool.isRequired,
    isCheckboxLabel: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
    isSmall: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
};

export default StyledLabel;
