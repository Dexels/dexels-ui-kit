import styled, { css } from 'styled-components';
import { DROPDOWN_VARIANTS } from './Dropdown.consts';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';

export const StyledDropdown = styled.div`
    ${setBoxSizing()};
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
            `};

            ${isValid && css`
                background-color: ${theme.colorValid};
            `};

            ${hasError && css`
                background-color: ${theme.colorError};
            `};

            ${isDisabled && css`
                background-color: transparent;
            `};
        }
    `};
`;

StyledDropdown.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    variant: PropTypes.oneOf(Object.values(DROPDOWN_VARIANTS)).isRequired,
};

export const Select = styled.select`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)};
    appearance: none;
    display: block;
    outline: none;
    border-radius: 0;
    background-color: ${({ theme }) => theme.shades.nine};
    cursor: pointer;
    padding: 0;
    width: 100%;
    color: ${({ theme }) => theme.colorHeaderText.primary};

    ${({ theme, variant }) => variant === DROPDOWN_VARIANTS.COMPACT && css`
        border: 0;
        border-bottom: 1px solid ${theme.colorHeaderText.primary};
        height: ${theme.spacing(3.5)};
    `};

    ${({ theme, variant }) => variant === DROPDOWN_VARIANTS.OUTLINE && css`
        border-radius: ${theme.spacing(1)};
        padding: ${theme.spacing(0, 1.5)};
        border: 1px solid ${theme.colorHeaderText.primary};
        height: ${theme.spacing(6)};
    `};

    ${({ isPlaceholderSelected, theme }) => isPlaceholderSelected && css`
        color: ${theme.shades.four};
    `};

    ${({ isFocused, isHovered, theme }) => (isFocused || isHovered) && css`
        border-color: ${theme.colorSecondary};
    `};

    ${({ isValid, theme }) => isValid && css`
        border-color: ${theme.colorValid};
        color: ${theme.colorValid};
    `};

    ${({ hasError, theme }) => hasError && css`
        border-color: ${theme.colorError};
        color: ${theme.colorError};
    `};

    ${({ isDisabled, theme }) => isDisabled && css`
        border-color: ${theme.colorDisabled};
        color: ${theme.colorDisabled};
        pointer-events: none;
    `};
`;

Select.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
    isHovered: PropTypes.bool.isRequired,
    isPlaceholderSelected: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    variant: PropTypes.oneOf(Object.values(DROPDOWN_VARIANTS)).isRequired,
};

export const IconWrapper = styled.div`
    position: absolute;
    color: ${({ theme }) => theme.colorHeaderText.primary};
    font-size: 24px;
    pointer-events: none;

    ${({ variant }) => variant === DROPDOWN_VARIANTS.COMPACT && css`
        top: 0;
        right: 0;
    `};

    ${({ theme, variant }) => variant === DROPDOWN_VARIANTS.OUTLINE && css`
        top: ${theme.spacing(1.5)};
        right: ${theme.spacing(1.5)};
    `};

    ${({ isFocused, isHovered, theme }) => (isFocused || isHovered) && css`
        color: ${theme.colorSecondary};
    `};

    ${({ isFocused }) => isFocused && css`
        transform: rotate(180deg);
    `};

    ${({ isValid, theme }) => isValid && css`
        color: ${theme.colorValid};
    `};

    ${({ hasError, theme }) => hasError && css`
        color: ${theme.colorError};
    `};

    ${({ isDisabled, theme }) => isDisabled && css`
        color: ${theme.colorDisabled};
    `};

    span {
        display: block;
    }
`;

IconWrapper.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
    isHovered: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    variant: PropTypes.oneOf(Object.values(DROPDOWN_VARIANTS)).isRequired,
};

export const ErrorMessageWrapper = styled.div`
    margin: ${({ theme }) => theme.spacing(0.5, 0, 0)};
`;
