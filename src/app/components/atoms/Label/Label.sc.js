import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import setTruncate from '../../../styles/mixins/setTruncate';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/propTypes';
import { transitionEffect } from '../../../styles/mixins/transitionEffects';

export const StyledLabel = styled.label`
    ${({ isSmall, theme }) => theme.textStyling(
        isSmall ? theme.availableTextStyles().caption : theme.availableTextStyles().body1,
    )}
    ${transitionEffect({
        duration: 300,
        property: 'font-size',
    })}
    ${({ isTruncatable }) => isTruncatable && setTruncate()}
    display: block;
    cursor: inherit;
    color: ${({ theme }) => theme.shades.three};

    ${({ isCheckboxLabel }) => isCheckboxLabel && css`
        color: ${({ theme }) => theme.colorText.primary};
    `}

    ${({ isActive }) => isActive && css`
        color: ${({ theme }) => theme.colorText.primary};
    `}

    ${({ isFocused }) => isFocused && css`
        color: ${({ theme }) => theme.colorText.secondary};
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
    backgroundColor: PropTypes.string.isRequired,
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
