import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import { black, grey100, white } from '../../../styles/colors/colors';
import {
    colorBodyLight,
    colorDisabled,
    colorPrimary,
    colorSecondary,
    colorSignalError,
    colorSignalValid,
    themeModes,
} from '../../../styles/theme/theme';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import theme from 'styled-theming';

const labelColor = theme('mode', {
    [themeModes.basic]: grey100,
    [themeModes.dark]: white,
    [themeModes.light]: black,
});

export const StyledLabel = styled.label`
    ${textStyling(availableTextStyles().body1)};
    cursor: inherit;
    color: ${colorBodyLight};

    ${({ isCheckboxLabel }) => isCheckboxLabel && css`
        color: ${labelColor};
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
