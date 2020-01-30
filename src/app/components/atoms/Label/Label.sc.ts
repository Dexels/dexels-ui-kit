import styled, { css } from 'styled-components';
import setTruncate from '../../../styles/mixins/setTruncate';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { transitionEffect } from '../../../styles/mixins/transitionEffects';

interface StyledLabelProps {
    hasError: boolean;
    isActive: boolean;
    isCheckboxLabel: boolean;
    isDisabled: boolean;
    isFocused: boolean;
    isHovered: boolean;
    isSmall: boolean;
    isTruncatable: boolean;
    isValid: boolean;
}

export const StyledLabel = styled.label<StyledLabelProps>`
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

    ${({ isFocused, isHovered }) => (isFocused || isHovered) && css`
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

StyledLabel.defaultProps = {
    theme: themeBasic,
};

export default StyledLabel;
