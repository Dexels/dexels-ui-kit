import styled, { css, SimpleInterpolation } from 'styled-components';
import { SingleDatePickerVariant } from '../types';
import { themeBasic } from '../../../../styles/theming/themes/basic';

interface StyledInputIconProps {
    isDisabled: boolean;
    isFocused: boolean;
    variant: SingleDatePickerVariant;
}

export const StyledInputIcon = styled.div<StyledInputIconProps>`
    color: ${({ theme }): string => theme.colorPrimary};

    span {
        display: block;
    }

    ${({ isFocused, theme }): SimpleInterpolation =>
        isFocused &&
        css`
            color: ${theme.colorSecondary};
        `}

    ${({ isDisabled, theme }): SimpleInterpolation =>
        isDisabled &&
        css`
            color: ${theme.colorDisabled};
        `}

    ${({ theme, variant }): SimpleInterpolation =>
        variant === SingleDatePickerVariant.OUTLINE &&
        css`
            padding: ${theme.spacing(1.5)};
        `}
`;

StyledInputIcon.defaultProps = {
    theme: themeBasic,
};

export default StyledInputIcon;
