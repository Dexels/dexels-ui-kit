import styled, { css, SimpleInterpolation } from 'styled-components';
import { DropdownVariant } from './types';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { setTruncate } from '../../../styles/mixins/setTruncate';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledDropdownProps {
    hasError: boolean;
    isDisabled: boolean;
    isFocused: boolean;
    isValid: boolean;
    variant: DropdownVariant;
}

export const StyledDropdown = styled.div<StyledDropdownProps>`
    ${setBoxSizing()}
    position: relative;

    ${({ hasError, isDisabled, isFocused, isValid, theme, variant }): SimpleInterpolation =>
        variant === DropdownVariant.COMPACT &&
        css`
        &::after {
            display: block;
            height: 1px;
            content: '';

            ${
                isFocused &&
                css`
                    background-color: ${theme.colorSecondary};
                `
            }

            ${
                isValid &&
                css`
                    background-color: ${theme.colorValid};
                `
            }

            ${
                hasError &&
                css`
                    background-color: ${theme.colorInvalid};
                `
            }

            ${
                isDisabled &&
                css`
                    background-color: transparent;
                `
            }
        }
    `}
`;

StyledDropdown.defaultProps = {
    theme: themeBasic,
};

interface SelectProps extends StyledDropdownProps {
    isHovered: boolean;
    isPlaceholderSelected: boolean;
    variant: DropdownVariant;
}

export const Select = styled.select<SelectProps>`
    ${setTruncate()}
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
    appearance: none;
    display: block;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    width: 100%;
    color: ${({ theme }): string => theme.colorTextBody.primary};

    ${({ theme, variant }): SimpleInterpolation =>
        variant === DropdownVariant.COMPACT &&
        css`
            border: 0;
            border-bottom: 1px solid ${theme.colorText.primary};
            border-radius: 0;
            padding: ${theme.spacing(0, 3, 0, 0)};
            height: ${theme.spacing(3.5)};
            line-height: ${theme.spacing(3.5)};
        `}

    ${({ theme, variant }): SimpleInterpolation =>
        variant === DropdownVariant.OUTLINE &&
        css`
            border: 1px solid ${theme.colorText.primary};
            border-radius: ${theme.spacing(1)};
            padding: ${theme.spacing(0, 4.5, 0, 1.5)};
            height: ${theme.spacing(6)};
            line-height: ${theme.spacing(6)};
        `}

    ${({ isPlaceholderSelected, theme }): SimpleInterpolation =>
        isPlaceholderSelected &&
        css`
            color: ${theme.shades.four};
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
            color: ${theme.colorValid};
        `}

    ${({ hasError, theme }): SimpleInterpolation =>
        hasError &&
        css`
            border-color: ${theme.colorInvalid};
            color: ${theme.colorInvalid};
        `}

    ${({ isDisabled, theme }): SimpleInterpolation =>
        isDisabled &&
        css`
            border-color: ${theme.colorDisabled};
            color: ${theme.colorDisabled};
            pointer-events: none;
        `}
`;

Select.defaultProps = {
    theme: themeBasic,
};

interface IconWrapperProps extends StyledDropdownProps {
    isHovered: boolean;
    variant: DropdownVariant;
}

export const IconWrapper = styled.div<IconWrapperProps>`
    position: absolute;
    color: ${({ theme }): string => theme.colorText.primary};
    font-size: ${({ theme }): string => theme.spacing(3)};
    pointer-events: none;

    span {
        display: block;
    }

    ${({ theme, variant }): SimpleInterpolation =>
        variant === DropdownVariant.COMPACT &&
        css`
            top: ${theme.spacing(0.25)};
            right: 0;
        `}

    ${({ theme, variant }): SimpleInterpolation =>
        variant === DropdownVariant.OUTLINE &&
        css`
            top: ${theme.spacing(1.5)};
            right: ${theme.spacing(1.5)};
        `}

    ${({ isFocused, isHovered, theme }): SimpleInterpolation =>
        (isFocused || isHovered) &&
        css`
            color: ${theme.colorSecondary};
        `}

    ${({ isFocused }): SimpleInterpolation =>
        isFocused &&
        css`
            transform: rotate(180deg);
        `}

    ${({ isValid, theme }): SimpleInterpolation =>
        isValid &&
        css`
            color: ${theme.colorValid};
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
`;

IconWrapper.defaultProps = {
    theme: themeBasic,
};

export const ErrorMessageWrapper = styled.div`
    margin: ${({ theme }): string => theme.spacing(0.5, 0, 0)};
`;

ErrorMessageWrapper.defaultProps = {
    theme: themeBasic,
};
