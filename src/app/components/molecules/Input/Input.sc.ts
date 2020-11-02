import { AdornmentPosition, InputType, InputVariant } from '../../../types';
import styled, { css, SimpleInterpolation } from 'styled-components';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledInputBaseProps {
    hasError: boolean;
    isDisabled: boolean;
    isFocused: boolean;
    isValid: boolean;
    variant: InputVariant;
}

interface StyledInputProps extends StyledInputBaseProps {
    isClickable: boolean;
}

export const StyledInput = styled.div<StyledInputProps>`
    ${setBoxSizing()}
    position: relative;

    ${({ isClickable }): SimpleInterpolation =>
        isClickable &&
        css`
            cursor: pointer;

            input,
            textarea {
                pointer-events: none;
            }
        `}

    ${({ isDisabled }): SimpleInterpolation =>
        isDisabled &&
        css`
            * {
                pointer-events: none;
            }
        `}

    ${({ hasError, isDisabled, isFocused, isValid, theme, variant }): SimpleInterpolation =>
        variant === InputVariant.COMPACT &&
        css`
            &::after {
                display: block;
                height: 1px;
                content: '';

                ${isFocused &&
                css`
                    background-color: ${theme.colorSecondary};
                `}

                ${isValid &&
                css`
                    background-color: ${theme.colorValid};
                `}

                ${hasError &&
                css`
                    background-color: ${theme.colorInvalid};
                `}

                ${isDisabled &&
                css`
                    background-color: transparent;
                `}
            }
        `}
`;

StyledInput.defaultProps = {
    theme: themeBasic,
};

interface TextFieldProps extends StyledInputBaseProps {
    adornmentPosition: AdornmentPosition;
    hasAdornment: boolean;
    isHovered: boolean;
    isTextarea: boolean;
    type: InputType;
}

export const TextField = styled.input<TextFieldProps>`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
    display: block;
    outline: none;
    background-color: transparent;
    width: 100%;
    color: ${({ theme }): string => theme.colorTextBody.primary};

    ${({ adornmentPosition, hasAdornment, theme }): SimpleInterpolation =>
        hasAdornment &&
        adornmentPosition === AdornmentPosition.LEFT &&
        css`
            text-indent: ${theme.spacing(2)};
        `}

    ${({ theme, variant }): SimpleInterpolation =>
        variant === InputVariant.COMPACT &&
        css`
            border: 0;
            border-bottom: 1px solid ${theme.colorPrimary};
            padding: 0;
            height: ${theme.spacing(3.5)};
        `}

    ${({ theme, variant }): SimpleInterpolation =>
        variant === InputVariant.OUTLINE &&
        css`
            border: 1px solid ${theme.colorPrimary};
            border-radius: ${theme.spacing(1)};
            padding: ${theme.spacing(0, 1.5)};
            height: ${theme.spacing(6)};
        `}

    ${({ isTextarea, theme }): SimpleInterpolation =>
        isTextarea &&
        css`
            padding: ${theme.spacing(1.5)};
            height: ${theme.spacing(16)};
            resize: none;
        `}

    ${({ isFocused, isHovered, theme }): SimpleInterpolation =>
        (isFocused || isHovered) &&
        css`
            border-color: ${theme.colorSecondary};
        `}

    ${({ isValid, theme }): SimpleInterpolation =>
        isValid &&
        css`
            border-color: ${theme.colorValid};
        `}

    ${({ hasError, theme }): SimpleInterpolation =>
        hasError &&
        css`
            border-color: ${theme.colorInvalid};
        `}

    ${({ isDisabled, theme }): SimpleInterpolation =>
        isDisabled &&
        css`
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
    ${({ theme, variant }): SimpleInterpolation =>
        variant === InputVariant.OUTLINE &&
        css`
            margin: ${theme.spacing(0.5, 0, 0, 1.5)};
        `}
`;

ErrorMessageWrapper.defaultProps = {
    theme: themeBasic,
};

interface AdornmentWrapperProps {
    adornmentPosition: AdornmentPosition;
    hasError: boolean;
    hasValue: boolean;
    isDisabled: boolean;
    isFocused: boolean;
    isHovered: boolean;
    isValid: boolean;
    variant: InputVariant;
}

export const AdornmentWrapper = styled.div<AdornmentWrapperProps>`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
    position: absolute;
    margin: 0;
    outline: none;
    border: 0;
    background-color: transparent;

    ${({ hasValue, theme }): SimpleInterpolation =>
        !hasValue &&
        css`
            color: ${theme.shades.three};
        `}

    ${({ adornmentPosition, variant }): SimpleInterpolation =>
        variant === InputVariant.COMPACT &&
        css`
            top: 0;
            ${adornmentPosition === AdornmentPosition.LEFT &&
            css`
                left: 0;
            `}

            ${adornmentPosition === AdornmentPosition.RIGHT &&
            css`
                right: 0;
            `}
        `}

    ${({ adornmentPosition, theme, variant }): SimpleInterpolation =>
        variant === InputVariant.OUTLINE &&
        css`
            top: 14px;

            ${adornmentPosition === AdornmentPosition.LEFT &&
            css`
                left: ${theme.spacing(1)};
            `}

            ${adornmentPosition === AdornmentPosition.RIGHT &&
            css`
                right: ${theme.spacing(1)};
            `}
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

    ${({ isFocused, isHovered, theme }): SimpleInterpolation =>
        (isFocused || isHovered) &&
        css`
            color: ${theme.colorSecondary};
        `}

    ${({ isValid, theme }): SimpleInterpolation =>
        isValid &&
        css`
            color: ${theme.colorValid};
        `}
`;
