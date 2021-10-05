import styled, { css, SimpleInterpolation } from 'styled-components';
import { getBorderColor } from '../../../styles/mixins/getBorderColor';
import { StyledInputBaseProps } from '../../molecules/Input/Input.sc';
import { themeBasic } from '../../../styles/theming/themes/basic';

export const StyledLink = styled.span`
    text-decoration: none;
`;

interface StyledLinkTextProps extends Pick<StyledInputBaseProps, 'isFocused' | 'isHovered'> {
    isStyled: boolean;
}

export const StyledLinkText = styled.span<StyledLinkTextProps>`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}

    ${({ isFocused, isHovered, isStyled, theme }): SimpleInterpolation =>
        isStyled &&
        css`
            /* stylelint-disable indentation */
            color: ${getBorderColor({
                defaultColor: theme.colorPrimary,
                hasError: false,
                isDisabled: false,
                isFocused,
                isHovered,
                isValid: false,
                theme,
            })};
            /* stylelint-enable indentation */
        `}
`;

StyledLinkText.defaultProps = {
    theme: themeBasic,
};
