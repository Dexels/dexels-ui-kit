import { InputType, InputVariant } from '../../../types';
import styled, { css } from 'styled-components';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledInputProps {
    hasError: boolean;
    isDisabled: boolean;
    isFocused: boolean;
    isValid: boolean;
    variant: InputVariant;
}

export const StyledInput = styled.div<StyledInputProps>`
    ${setBoxSizing()}
    position: relative;

    ${({ isDisabled }) => isDisabled && css`
        * {
            pointer-events: none;
        }
    `}

    ${({
        hasError,
        isDisabled,
        isFocused,
        isValid,
        theme,
        variant,
    }) => variant === InputVariant.COMPACT && css`
        &::after {
            display: block;
            height: 1px;
            content: '';

            ${isFocused && css`
                background-color: ${theme.colorSecondary};
            `}

            ${isValid && css`
                background-color: ${theme.colorValid};
            `}

            ${hasError && css`
                background-color: ${theme.colorInvalid};
            `}

            ${isDisabled && css`
                background-color: transparent;
            `}
        }
    `}
`;

StyledInput.defaultProps = {
    theme: themeBasic,
};

interface TextFieldProps extends StyledInputProps {
    isHovered: boolean;
    isTextarea: boolean;
    type: InputType;
}

export const TextField = styled.input<TextFieldProps>`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)}
    display: block;
    outline: none;
    background-color: transparent;
    width: 100%;
    color: ${({ theme }) => theme.colorTextBody.primary};

    ${({ theme, variant }) => variant === InputVariant.COMPACT && css`
        border: 0;
        border-bottom: 1px solid ${theme.colorPrimary};
        padding: 0;
        height: ${theme.spacing(3)};
    `}

    ${({ theme, variant }) => variant === InputVariant.OUTLINE && css`
        border: 1px solid ${theme.colorPrimary};
        border-radius: ${theme.spacing(1)};
        padding: ${theme.spacing(0, 1.5)};
        height: ${theme.spacing(6)};
    `}

    ${({ isTextarea, theme }) => isTextarea && css`
        padding: ${theme.spacing(1.5)};
        height: ${theme.spacing(16)};
        resize: none;
    `}

    ${({ isFocused, isHovered, theme }) => (isFocused || isHovered) && css`
        border-color: ${theme.colorSecondary};
    `}

    ${({ isValid, theme }) => isValid && css`
        border-color: ${theme.colorValid};
    `}

    ${({ hasError, theme }) => hasError && css`
        border-color: ${theme.colorInvalid};
    `}

    ${({ isDisabled, theme }) => isDisabled && css`
        border-color: ${theme.colorDisabled};
        color: ${theme.colorDisabled};
    `}
`;

TextField.defaultProps = {
    theme: themeBasic,
};

interface ErrorMessageWrapperProps {
    variant: InputVariant;
}

export const ErrorMessageWrapper = styled.div<ErrorMessageWrapperProps>`
    ${({ theme, variant }) => variant === InputVariant.OUTLINE && css`
        margin: ${theme.spacing(0.5, 0, 0, 1.5)};
    `}
`;

ErrorMessageWrapper.defaultProps = {
    theme: themeBasic,
};
