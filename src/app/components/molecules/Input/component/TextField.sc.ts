import { AdornmentPosition, InputType, InputVariant } from '../../../../types';
import styled, { css, SimpleInterpolation } from 'styled-components';
import { getBorderColor } from '../../../../styles/mixins/getBorderColor';
import { StyledInputBaseProps } from '../Input.sc';
import { themeBasic } from '../../../../styles/theming/themes/basic';

interface TextFieldProps extends StyledInputBaseProps {
    adornmentPosition: AdornmentPosition;
    hasAdornment: boolean;
    hasNegativeAmountColor: boolean;
    hasTransparentBackground: boolean;
    isTextarea: boolean;
    type: InputType;
}

export const TextField = styled.input<TextFieldProps>`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
    display: block;
    outline: none;
    width: 100%;
    text-overflow: ellipsis;
    color: ${({ theme }): string => theme.colorTextBody.primary};

    ${({ hasTransparentBackground }): SimpleInterpolation =>
        hasTransparentBackground &&
        css`
            background-color: transparent;
        `}

    ${({ hasNegativeAmountColor, theme }): SimpleInterpolation =>
        hasNegativeAmountColor &&
        css`
            color: ${theme.colorInvalid};
        `}

    ${({ theme, variant }): SimpleInterpolation =>
        variant === InputVariant.COMPACT &&
        css`
            border: 0;
            border-bottom: 1px solid;
            padding: 0;
            height: ${theme.spacing(3.5)};
        `}

    ${({ theme, variant }): SimpleInterpolation =>
        variant === InputVariant.OUTLINE &&
        css`
            border: 1px solid;
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
            white-space: pre-wrap;
        `}

    ${({ isDisabled, theme }): SimpleInterpolation =>
        isDisabled &&
        css`
            color: ${theme.colorDisabled};
        `}

    ${({ adornmentPosition, hasAdornment, theme, variant }): SimpleInterpolation =>
        hasAdornment &&
        css`
            /* stylelint-disable */
            padding: ${theme.spacing(
                0,
                // eslint-disable-next-line no-nested-ternary
                variant === InputVariant.OUTLINE
                    ? adornmentPosition === AdornmentPosition.RIGHT
                        ? 3
                        : 1.5
                    : adornmentPosition === AdornmentPosition.RIGHT
                    ? 2
                    : 0,
                0,
                variant === InputVariant.OUTLINE ? 1.5 : 0
            )};
            /* stylelint-enable */
            text-indent: ${theme.spacing(adornmentPosition === AdornmentPosition.LEFT ? 2 : 0)};
        `}

    ${({ hasError, isDisabled, isFocused, isHovered, isValid, theme }): SimpleInterpolation =>
        css`
            /* stylelint-disable indentation */
            border-color: ${getBorderColor({
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
`;

TextField.defaultProps = {
    theme: themeBasic,
};
