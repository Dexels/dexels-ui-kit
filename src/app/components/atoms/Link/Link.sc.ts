import styled, { css, SimpleInterpolation } from 'styled-components';
import { StyledInputBaseProps } from '../../molecules/Input/Input.sc';
import { themeBasic } from '../../../styles/theming/themes/basic';

export const StyledLink = styled.span`
    text-decoration: none;
`;

interface StyledLinkTextProps extends Pick<StyledInputBaseProps, 'isFocused' | 'isHovered' | 'isDisabled'> {
    hasHoverEffect: boolean;
}

export const StyledLinkText = styled.span<StyledLinkTextProps>`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
    color: ${({ theme }): string => theme.colorText.primary};

    ${({ isFocused, isHovered, hasHoverEffect, theme }): SimpleInterpolation =>
        hasHoverEffect &&
        (isFocused || isHovered) &&
        css`
            color: ${theme.colorSecondary};
        `}

    ${({ isDisabled, theme }): SimpleInterpolation =>
        isDisabled &&
        css`
            color: ${theme.colorDisabled};
            pointer-events: none;
        `}
`;

StyledLinkText.defaultProps = {
    theme: themeBasic,
};
