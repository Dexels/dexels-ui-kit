import styled, { css } from 'styled-components';
import { DROPDOWN_VARIANTS } from './Dropdown.consts';
import { DropdownVariants } from '../../../types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import setTruncate from '../../../styles/mixins/setTruncate';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledDropdownProps {
    hasError: boolean;
    isDisabled: boolean;
    isFocused: boolean;
    isValid: boolean;
    variant: DropdownVariants;
}

export const StyledDropdown = styled.div<StyledDropdownProps>`
    ${setBoxSizing()}
    position: relative;

    ${({
        hasError,
        isDisabled,
        isFocused,
        isValid,
        theme,
        variant,
    }) => variant === DROPDOWN_VARIANTS.COMPACT && css`
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

StyledDropdown.defaultProps = {
    theme: themeBasic,
};

interface SelectProps extends StyledDropdownProps {
    isHovered: boolean;
    isPlaceholderSelected: boolean;
}

export const Select = styled.select<SelectProps>`
    ${setTruncate()}
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)}
    appearance: none;
    display: block;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    width: 100%;
    color: ${({ theme }) => theme.colorTextBody.primary};

    ${({ theme, variant }) => variant === DROPDOWN_VARIANTS.COMPACT && css`
        border: 0;
        border-bottom: 1px solid ${theme.colorText.primary};
        border-radius: 0;
        padding: ${theme.spacing(0, 3, 0, 0)};
        height: ${theme.spacing(3.5)};
        line-height: ${theme.spacing(3.5)};
    `}

    ${({ theme, variant }) => variant === DROPDOWN_VARIANTS.OUTLINE && css`
        border: 1px solid ${theme.colorText.primary};
        border-radius: ${theme.spacing(1)};
        padding: ${theme.spacing(0, 4.5, 0, 1.5)};
        height: ${theme.spacing(6)};
        line-height: ${theme.spacing(6)};
    `}

    ${({ isPlaceholderSelected, theme }) => isPlaceholderSelected && css`
        color: ${theme.shades.four};
    `}

    ${({ isFocused, isHovered, theme }) => (isFocused || isHovered) && css`
        border-color: ${theme.colorSecondary};
    `}

    ${({ isValid, theme }) => isValid && css`
        border-color: ${theme.colorValid};
        color: ${theme.colorValid};
    `}

    ${({ hasError, theme }) => hasError && css`
        border-color: ${theme.colorInvalid};
        color: ${theme.colorInvalid};
    `}

    ${({ isDisabled, theme }) => isDisabled && css`
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
}

export const IconWrapper = styled.div<IconWrapperProps>`
    position: absolute;
    color: ${({ theme }) => theme.colorText.primary};
    font-size: ${({ theme }) => theme.spacing(3)};
    pointer-events: none;

    span {
        display: block;
    }

    ${({ theme, variant }) => variant === DROPDOWN_VARIANTS.COMPACT && css`
        top: ${theme.spacing(0.25)};
        right: 0;
    `}

    ${({ theme, variant }) => variant === DROPDOWN_VARIANTS.OUTLINE && css`
        top: ${theme.spacing(1.5)};
        right: ${theme.spacing(1.5)};
    `}

    ${({ isFocused, isHovered, theme }) => (isFocused || isHovered) && css`
        color: ${theme.colorSecondary};
    `}

    ${({ isFocused }) => isFocused && css`
        transform: rotate(180deg);
    `}

    ${({ isValid, theme }) => isValid && css`
        color: ${theme.colorValid};
    `}

    ${({ hasError, theme }) => hasError && css`
        color: ${theme.colorInvalid};
    `}

    ${({ isDisabled, theme }) => isDisabled && css`
        color: ${theme.colorDisabled};
    `}
`;

IconWrapper.defaultProps = {
    theme: themeBasic,
};

export const ErrorMessageWrapper = styled.div`
    margin: ${({ theme }) => theme.spacing(0.5, 0, 0)};
`;

ErrorMessageWrapper.defaultProps = {
    theme: themeBasic,
};
