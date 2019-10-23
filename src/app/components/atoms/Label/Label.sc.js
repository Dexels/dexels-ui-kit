import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const StyledLabel = styled.label`
    ${textStyling(availableTextStyles().body1)};
    cursor: inherit;
    color: ${({ theme }) => theme.colorMedium.dark};

    ${({ isCheckboxLabel }) => isCheckboxLabel && css`
        color: ${({ theme }) => theme.colorDark.main};
    `};

    ${({ isHovered }) => isHovered && css`
        color: ${({ theme }) => theme.colorMedium.dark};
    `};

    ${({ isActive }) => isActive && css`
        color: ${({ theme }) => theme.colorPrimary.dark};
    `};

    ${({ isFocused }) => isFocused && css`
        color: ${({ theme }) => theme.colorSecondary.dark};
    `};

    ${({ isValid }) => isValid && css`
        color: ${({ theme }) => theme.colorValid.main};
    `};

    ${({ hasError }) => hasError && css`
        color: ${({ theme }) => theme.colorError.main};
    `};

    ${({ isDisabled }) => isDisabled && css`
        color: ${({ theme }) => theme.colorDisabled.main};
    `};

    ${({ isSmall }) => isSmall && textStyling(availableTextStyles().caption)};
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
