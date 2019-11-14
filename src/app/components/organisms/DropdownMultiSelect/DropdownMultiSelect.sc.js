import { DROPDOWN_MULTISELECT_ELEVATIONS, DROPDOWN_MULTISELECT_VARIANTS } from './DropdownMultiSelect.consts';
import { rippleEffect, rippleEffectInit, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import { themeBasic, themePropTypes } from '../../../styles/theming/themes/basic';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import setTruncate from '../../../styles/mixins/setTruncate';

export const StyledDropdownMultiSelect = styled.div`
    ${setBoxSizing()}
    position: relative;

    ${({
        hasError,
        isDisabled,
        isValid,
        theme,
        variant,
    }) => variant === DROPDOWN_MULTISELECT_VARIANTS.COMPACT && css`
        &::after {
            display: block;
            height: 1px;
            content: '';

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
    isValid: PropTypes.bool.isRequired,
    theme: themePropTypes,
    variant: PropTypes.oneOf(Object.values(DROPDOWN_MULTISELECT_VARIANTS)).isRequired,
};

StyledDropdownMultiSelect.defaultProps = {
    theme: themeBasic,
};

export const Select = styled.div`
    ${setTruncate()}
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)}
    background-color: transparent;
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing(0, 3, 0, 0)};
    color: ${({ theme }) => theme.shades.four};

    ${({ theme, variant }) => variant === DROPDOWN_MULTISELECT_VARIANTS.COMPACT && css`
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

    ${({ isHovered, theme }) => isHovered && css`
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
    isHovered: PropTypes.bool.isRequired,
    isPlaceholderSelected: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    theme: themePropTypes,
    variant: PropTypes.oneOf(Object.values(DROPDOWN_MULTISELECT_VARIANTS)).isRequired,
};

Select.defaultProps = {
    theme: themeBasic,
};

export const ListWrapper = styled.div`
    ${({ elevation }) => getElevation(elevation)}
    position: absolute;
    margin: ${({ theme }) => theme.spacing(1, 0, 0, 0)};
    border-radius: ${({ theme }) => theme.spacing(1)};
    background-color: ${({ theme }) => theme.shades.nine};
    width: 100%;

    ${({ theme, variant }) => variant === DROPDOWN_MULTISELECT_VARIANTS.OUTLINE && css`
        margin: ${theme.spacing(5, 0, 0, 0)};
    `}
`;

ListWrapper.propTypes = {
    elevation: PropTypes.oneOf(Object.values(DROPDOWN_MULTISELECT_ELEVATIONS)).isRequired,
    theme: themePropTypes,
};

ListWrapper.defaultProps = {
    theme: themeBasic,
};

export const StaticItem = styled.div`
    ${rippleEffectInit()}
    ${({ elevation }) => getElevation(elevation)}
    margin: 0 0 2px;
    border-radius: ${({ theme }) => theme.spacing(1, 1, 0, 0)};
    background-color: ${({ theme }) => theme.shades.eight};
    padding: ${({ theme }) => theme.spacing(1, 1, 1, 2)};

    &:after {
        ${({ theme }) => rippleEffect(theme.colorSecondary)}
    }

    &:active:after {
        ${rippleEffectReset()}
    }
`;

StaticItem.propTypes = {
    elevation: PropTypes.oneOf(Object.values(DROPDOWN_MULTISELECT_ELEVATIONS)).isRequired,
    theme: themePropTypes,
};

StaticItem.defaultProps = {
    theme: themeBasic,
};

export const ListItems = styled.ul`
    margin: 0;
    background-color: ${({ theme }) => theme.shades.nine};
    padding: ${({ theme }) => theme.spacing(0, 0, 0, 2)};
    overflow: auto;
    list-style-type: none;

    ${({ maxHeight }) => maxHeight && css`
        max-height: ${maxHeight};
    `}
`;

ListItems.propTypes = {
    maxHeight: PropTypes.string.isRequired,
    theme: themePropTypes,
};

ListItems.defaultProps = {
    theme: themeBasic,
};

export const ListItem = styled.li`
    ${rippleEffectInit()}
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)}
    background-color: transparent;
    padding: ${({ theme }) => theme.spacing(1, 0, 1)};

    &:after {
        ${({ theme }) => rippleEffect(theme.colorSecondary)}
    }

    &:active:after {
        ${rippleEffectReset()}
    }

    &:hover {
        background-color: ${({ theme }) => theme.shades.eight};
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

    ${({ isHovered, theme }) => isHovered && css`
        color: ${theme.colorSecondary};
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
