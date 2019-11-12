import { DROPDOWN_MULTISELECT_ELEVATIONS, DROPDOWN_MULTISELECT_VARIANTS } from './DropdownMultiSelect.consts';
import styled, { css } from 'styled-components';
import { themeBasic, themePropTypes } from '../../../styles/theming/themes/basic';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';

export const StyledDropdownMultiSelect = styled.div`
    ${setBoxSizing()}
    position: relative;

    ${({
        hasError,
        isDisabled,
        isFocused,
        isValid,
        theme,
        variant,
    }) => variant === DROPDOWN_MULTISELECT_VARIANTS.COMPACT && css`
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

StyledDropdownMultiSelect.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    theme: themePropTypes,
    variant: PropTypes.oneOf(Object.values(DROPDOWN_MULTISELECT_VARIANTS)).isRequired,
};

StyledDropdownMultiSelect.defaultProps = {
    theme: themeBasic,
};

export const Select = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)}
    appearance: none;
    display: block;
    outline: none;
    border-radius: 0;
    background-color: ${({ theme }) => theme.shades.nine};
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing(0, 3, 0, 0)};
    width: 100%;
    color: ${({ theme }) => theme.colorHeaderText.primary};

    ${({ theme, variant }) => variant === DROPDOWN_MULTISELECT_VARIANTS.COMPACT && css`
        border: 0;
        border-bottom: 1px solid ${theme.colorHeaderText.primary};
        height: ${theme.spacing(3.5)};
    `}

    ${({ theme, variant }) => variant === DROPDOWN_MULTISELECT_VARIANTS.OUTLINE && css`
        border: 1px solid ${theme.colorHeaderText.primary};
        border-radius: ${theme.spacing(1)};
        padding: ${theme.spacing(0, 1.5)};
        height: ${theme.spacing(6)};
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

Select.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
    isHovered: PropTypes.bool.isRequired,
    isPlaceholderSelected: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    theme: themePropTypes,
    variant: PropTypes.oneOf(Object.values(DROPDOWN_MULTISELECT_VARIANTS)).isRequired,
};

Select.defaultProps = {
    theme: themeBasic,
};

export const ListItems = styled.ul`
    ${({ elevation }) => getElevation(elevation)}
    border-radius: ${({ theme }) => theme.spacing(1)};
    background-color: ${({ theme }) => theme.shades.nine};
    padding: ${({ theme }) => theme.spacing(2)};
    overflow: auto;
    height: 130px;
    list-style-type: none;
`;

ListItems.propTypes = {
    elevation: PropTypes.oneOf(Object.values(DROPDOWN_MULTISELECT_ELEVATIONS)).isRequired,
    theme: themePropTypes,
};

ListItems.defaultProps = {
    theme: themeBasic,
};

export const ListItem = styled.li`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)}
    background-color: transparent;
    padding: ${({ theme }) => theme.spacing(0, 0, 1)};
    color: ${({ theme }) => theme.shades.one};

    &:first-of-type {
        padding: ${({ theme }) => theme.spacing(0, 0, 2)};
    }

    &:first-child {
        position: fixed;
    }
`;

ListItem.propTypes = {
    theme: themePropTypes,
};

ListItem.defaultProps = {
    theme: themeBasic,
};

export const IconWrapper = styled.div`
    position: absolute;
    color: ${({ theme }) => theme.colorHeaderText.primary};
    font-size: ${({ theme }) => theme.spacing(3)};
    pointer-events: none;

    span {
        display: block;
    }

    ${({ variant }) => variant === DROPDOWN_MULTISELECT_VARIANTS.COMPACT && css`
        top: 0;
        right: 0;
    `}

    ${({ theme, variant }) => variant === DROPDOWN_MULTISELECT_VARIANTS.OUTLINE && css`
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

IconWrapper.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
    isHovered: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    theme: themePropTypes,
    variant: PropTypes.oneOf(Object.values(DROPDOWN_MULTISELECT_VARIANTS)).isRequired,
};

IconWrapper.defaultProps = {
    theme: themeBasic,
};

export const ErrorMessageWrapper = styled.div`
    margin: ${({ theme }) => theme.spacing(0.5, 0, 0)};
`;

ErrorMessageWrapper.propTypes = {
    theme: themePropTypes,
};

ErrorMessageWrapper.defaultProps = {
    theme: themeBasic,
};
