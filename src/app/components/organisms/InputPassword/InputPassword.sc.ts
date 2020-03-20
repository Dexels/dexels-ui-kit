import styled, { css, SimpleInterpolation } from 'styled-components';
import { InputVariant } from '../../../types';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../styles/theming/themes/basic';

export const StyledInputPassword = styled.div`
    ${setBoxSizing()}
    position: relative;
`;

interface VisibilitySwitchProps {
    isDisabled: boolean;
    variant: InputVariant;
}

export const VisibilitySwitch = styled.button<VisibilitySwitchProps>`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().h1)}
    appearance: none;
    position: absolute;
    margin: 0;
    outline: none;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    color: ${({ theme }): string => theme.colorText.primary};

    span {
        display: block;
    }

    ${({ theme, variant }): SimpleInterpolation => variant === InputVariant.COMPACT && css`
        top: 0;
        right: 0;
        padding: ${theme.spacing(0, 0, 0, 1)};
    `}

    ${({ theme, variant }): SimpleInterpolation => variant === InputVariant.OUTLINE && css`
        top: ${theme.spacing(1)};
        right: ${theme.spacing(1)};
        padding: ${theme.spacing(0.5, 1)};
    `}

    ${({ isDisabled, theme }): SimpleInterpolation => isDisabled && css`
        color: ${theme.colorDisabled};
        pointer-events: none;
    `}
`;

VisibilitySwitch.defaultProps = {
    theme: themeBasic,
};
