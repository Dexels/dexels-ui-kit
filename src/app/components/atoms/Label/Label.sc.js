import styled, { css } from 'styled-components';
import { themeBasic, themePropTypes } from '../../../styles/theming/themes/basic';
import PropTypes from 'prop-types';
import setTruncate from '../../../styles/mixins/setTruncate';

export const StyledLabel = styled.label`
    ${({ isSmall, theme }) => theme.textStyling(
        isSmall ? theme.availableTextStyles().caption : theme.availableTextStyles().body1,
    )}
    ${({ isTruncatable }) => isTruncatable && setTruncate()}
    display: block;
    cursor: inherit;
    color: ${({ theme }) => theme.shades.four};

    ${({ isCheckboxLabel }) => isCheckboxLabel && css`
        color: ${({ theme }) => theme.colorHeaderText.primary};
    `}

    ${({ isActive }) => isActive && css`
        color: ${({ theme }) => theme.colorHeaderText.primary};
    `}

    ${({ isFocused }) => isFocused && css`
        color: ${({ theme }) => theme.colorHeaderText.secondary};
    `}

    ${({ isValid }) => isValid && css`
        color: ${({ theme }) => theme.colorValid};
    `}

    ${({ hasError }) => hasError && css`
        color: ${({ theme }) => theme.colorInvalid};
    `}

    ${({ isDisabled }) => isDisabled && css`
        color: ${({ theme }) => theme.colorDisabled};
    `}
`;

StyledLabel.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isActive: PropTypes.bool.isRequired,
    isCheckboxLabel: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
    isSmall: PropTypes.bool.isRequired,
    isTruncatable: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

StyledLabel.defaultProps = {
    theme: themeBasic,
};

export default StyledLabel;
