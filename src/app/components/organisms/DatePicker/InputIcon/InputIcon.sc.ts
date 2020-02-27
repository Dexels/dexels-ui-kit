import styled, { css } from 'styled-components';
import { DatePickerVariant } from '../types';
import { themeBasic } from '../../../../styles/theming/themes/basic';

interface StyledInputIconProps {
    isDisabled: boolean;
    isFocused: boolean;
    variant: DatePickerVariant;
}

export const StyledInputIcon = styled.div<StyledInputIconProps>`
    color: ${({ theme }) => theme.colorPrimary};
    font-size: ${({ theme }) => theme.spacing(3)};

    span {
        display: block;
    }

    ${({ isFocused, theme }) => isFocused && css`
        color: ${theme.colorSecondary};
    `}

    ${({ isDisabled, theme }) => isDisabled && css`
        color: ${theme.colorDisabled};
    `}

    ${({ theme, variant }) => variant === DatePickerVariant.OUTLINE && css`
        padding: ${theme.spacing(1.5)};
    `}
`;

StyledInputIcon.defaultProps = {
    theme: themeBasic,
};

export default StyledInputIcon;
