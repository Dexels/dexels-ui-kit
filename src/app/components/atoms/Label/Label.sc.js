import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import {
    colorBodyLight,
    colorDisabled,
    colorPrimary,
    colorSecondary,
    colorSignalError,
    colorSignalValid,
    labelTextColor,
} from '../../../styles/theme/theme';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const StyledLabel = styled.label`
    ${textStyling(availableTextStyles().body1)};
    cursor: inherit;
    color: ${colorBodyLight};

    ${({ isCheckboxLabel }) => isCheckboxLabel && css`
        color: ${labelTextColor};
    `};

    ${({ isHovered }) => isHovered && css`
        color: ${colorBodyLight};
    `};

    ${({ isActive }) => isActive && css`
        color: ${colorPrimary};
    `};

    ${({ isFocussed }) => isFocussed && css`
        color: ${colorSecondary};
    `};

    ${({ isValid }) => isValid && css`
        color: ${colorSignalValid};
    `};

    ${({ hasError }) => hasError && css`
        color: ${colorSignalError};
    `};

    ${({ isDisabled }) => isDisabled && css`
        color: ${colorDisabled};
    `};

    ${({ isSmall }) => isSmall && textStyling(availableTextStyles().caption)};
`;

StyledLabel.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isActive: PropTypes.bool.isRequired,
    isCheckboxLabel: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFocussed: PropTypes.bool.isRequired,
    isSmall: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
};

export default StyledLabel;
