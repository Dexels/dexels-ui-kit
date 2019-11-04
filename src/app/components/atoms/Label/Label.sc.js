import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const StyledLabel = styled.label`
    ${({ isSmall, theme }) => theme.textStyling(
        isSmall ? theme.availableTextStyles().caption : theme.availableTextStyles().body1,
    )};
    display: block;
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
