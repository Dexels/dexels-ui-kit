import { AdornmentPosition, InputType, InputVariant } from '../../../../types';
import styled, { css, SimpleInterpolation } from 'styled-components';
import { getBorderColor } from '../../../../styles/mixins/getBorderColor';
import { StyledInputBaseProps } from '../Input.sc';
import { themeBasic } from '../../../../styles/theming/themes/basic';

interface TextFieldProps extends StyledInputBaseProps {
    adornmentPosition: AdornmentPosition;
    hasAdornment: boolean;
    hasNegativeAmountColor: boolean;
    isTextarea: boolean;
    type: InputType;
}

export const TextField = styled.input<TextFieldProps>`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
    display: block;
    outline: none;
    width: 100%;
    color: ${({ theme }): string => theme.colorTextBody.primary};

    ${({ hasNegativeAmountColor, theme }): SimpleInterpolation =>
        hasNegativeAmountColor &&
        css`
            color: ${theme.colorInvalid};
        `}

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
