import styled, { css, SimpleInterpolation } from 'styled-components';
import { setTruncate } from '../../../styles/mixins/setTruncate';
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
    ${({ isSmall, theme }): string => theme.textStyling(
        isSmall ? theme.availableTextStyles().caption : theme.availableTextStyles().body1,
    )}
    ${transitionEffect({
        duration: 300,
        property: 'font-size',
    })}
    ${({ isTruncatable }): SimpleInterpolation => isTruncatable && setTruncate()}
    display: block;
    cursor: inherit;
    color: ${({ theme }): string => theme.shades.three};

    ${({ isCheckboxLabel, theme }): SimpleInterpolation => isCheckboxLabel && css`
        color: ${theme.colorText.primary};
    `}

    ${({ isActive, theme }): SimpleInterpolation => isActive && css`
        color: ${theme.colorText.primary};
    `}

    ${({ isFocused, isHovered, theme }): SimpleInterpolation => (isFocused || isHovered) && css`
        color: ${theme.colorText.secondary};
    `}

    ${({ isValid, theme }): SimpleInterpolation => isValid && css`
        color: ${theme.colorValid};
    `}

    ${({ hasError, theme }): SimpleInterpolation => hasError && css`
        color: ${theme.colorInvalid};
    `}

    ${({ isDisabled, theme }): SimpleInterpolation => isDisabled && css`
        color: ${theme.colorDisabled};
    `}
`;

StyledLabel.defaultProps = {
    theme: themeBasic,
};

export default StyledLabel;
