import styled, { css, SimpleInterpolation } from 'styled-components';
import { setTruncate } from '../../../styles/mixins/setTruncate';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { transitionEffect } from '../../../styles/mixins/transitionEffects';

interface StyledLabelProps {
    hasAlternativeTextStyle: boolean;
    hasError: boolean;
    isActive: boolean;
    isDisabled: boolean;
    isFocused: boolean;
    isHovered: boolean;
    isSelectionControlLabel: boolean;
    isSmall: boolean;
    isTruncatable: boolean;
    isValid: boolean;
}

export const StyledLabel = styled.label<StyledLabelProps>`
    ${({ hasAlternativeTextStyle, isSmall, theme }): string =>
        theme.textStyling(
            /* Mind the fact that hasAlternativeTextStyle does not yet have an isSmall implementation
               This has to do with that fact that we than need another new style, so left it like this for now
            */
            // eslint-disable-next-line no-nested-ternary
            hasAlternativeTextStyle
                ? theme.availableTextStyles().caption2
                : isSmall
                ? theme.availableTextStyles().caption
                : theme.availableTextStyles().body1
        )}
    ${transitionEffect({
        duration: 300,
        property: 'font-size',
    })}
    ${({ isTruncatable }): SimpleInterpolation => isTruncatable && setTruncate()}
    display: block;
    cursor: inherit;
    color: ${({ theme }): string => theme.shades.three};

    ${({ isSelectionControlLabel, theme }): SimpleInterpolation =>
        isSelectionControlLabel &&
        css`
            color: ${theme.colorTextBody.primary};
        `}

    ${({ hasAlternativeTextStyle, theme }): SimpleInterpolation =>
        hasAlternativeTextStyle &&
        css`
            color: ${theme.colorPrimary};
        `}

    ${({ isActive, theme }): SimpleInterpolation =>
        isActive &&
        css`
            color: ${theme.colorText.primary};
        `}

    ${({ isFocused, isHovered, theme }): SimpleInterpolation =>
        (isFocused || isHovered) &&
        css`
            color: ${theme.colorText.secondary};
        `}

    ${({ isValid, theme }): SimpleInterpolation =>
        isValid &&
        css`
            color: ${theme.colorValid};
        `}

    ${({ hasError, theme }): SimpleInterpolation =>
        hasError &&
        css`
            color: ${theme.colorInvalid};
        `}

    ${({ isDisabled, theme }): SimpleInterpolation =>
        isDisabled &&
        css`
            color: ${theme.colorDisabled};
        `}
`;

StyledLabel.defaultProps = {
    theme: themeBasic,
};

export default StyledLabel;
