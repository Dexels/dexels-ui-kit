import { AdornmentPosition, InputVariant } from '../../../types';
import styled, { css, SimpleInterpolation } from 'styled-components';
import { getBorderColor } from '../../../styles/mixins/getBorderColor';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../styles/theming/themes/basic';

export interface StyledInputBaseProps {
    hasError: boolean;
    isDisabled: boolean;
    isFocused: boolean;
    isHovered: boolean;
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

    ${({ hasError, isDisabled, isFocused, isHovered, isValid, theme, variant }): SimpleInterpolation =>
        variant === InputVariant.COMPACT &&
        css`
            &::after {
                display: block;
                content: '';

                ${isFocused &&
                css`
                    height: 1px;
                `}

                ${css`
                    /* stylelint-disable indentation */
                    background-color: ${getBorderColor({
                        defaultColor: theme.colorPrimary,
                        hasError,
                        isDisabled,
                        isFocused,
                        isHovered,
                        isValid,
                        theme,
                    })};
                    /* stylelint-enable indentation */
                `}
            }
        `}
`;

StyledInput.defaultProps = {
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

    ${({ adornmentPosition, theme, variant }): SimpleInterpolation =>
        variant === InputVariant.COMPACT &&
        css`
            top: ${theme.spacing(0.5)};
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
            top: ${theme.spacing(1.75)};

            ${adornmentPosition === AdornmentPosition.LEFT &&
            css`
                left: ${theme.spacing(1)};
            `}

            ${adornmentPosition === AdornmentPosition.RIGHT &&
            css`
                right: ${theme.spacing(1)};
            `}
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
