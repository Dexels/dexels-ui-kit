import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import { black, grey100, white } from '../../../styles/colors/colors';
import {
    colorBodyLight,
    colorDisabled,
    colorError,
    colorPrimary,
    colorSecondary,
    colorValid,
    themeModes,
} from '../../../styles/theme/theme';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import styledTheming from 'styled-theming';

const labelColor = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => theme.labelColor || grey100,
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

    ${({ isFocused }) => isFocused && css`
        color: ${colorSecondary};
    `};

    ${({ isValid }) => isValid && css`
        color: ${colorValid};
    `};

    ${({ hasError }) => hasError && css`
        color: ${colorError};
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
    isFocused: PropTypes.bool.isRequired,
    isSmall: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
};

export default StyledLabel;
