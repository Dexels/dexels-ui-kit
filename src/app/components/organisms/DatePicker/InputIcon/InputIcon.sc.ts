import styled, { css } from 'styled-components';
import { themeBasic } from '../../../../styles/theming/themes/basic';

interface StyledInputIconProps {
    isDisabled: boolean;
    isFocused: boolean;
}

export const StyledInputIcon = styled.div<StyledInputIconProps>`
    padding: ${({ theme }) => theme.spacing(1.5)};
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
`;

StyledInputIcon.defaultProps = {
    theme: themeBasic,
};

export default StyledInputIcon;
