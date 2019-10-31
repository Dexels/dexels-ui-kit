import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';

export const StyledDropdown = styled.div`
    ${setBoxSizing()};
    position: relative;

    &::after {
        display: block;
        height: 1px;
        content: '';

        ${({ isFocused }) => isFocused && css`
            background-color: ${({ theme }) => theme.colorSecondary};
        `};

        ${({ isValid }) => isValid && css`
            background-color: ${({ theme }) => theme.colorValid};
        `};

        ${({ hasError }) => hasError && css`
            background-color: ${({ theme }) => theme.colorError};
        `};

        ${({ isDisabled }) => isDisabled && css`
            background-color: transparent;
        `};
    }
`;

StyledDropdown.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
};

export const Select = styled.select`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)};
    appearance: none;
    display: block;
    outline: none;
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colorHeaderText.primary};
    border-radius: 0;
    background-color: ${({ theme }) => theme.shades.nine};
    cursor: pointer;
    padding: 0;
    width: 100%;
    height: ${({ theme }) => theme.spacing(3.5)};
    color: ${({ theme }) => theme.colorHeaderText.primary};

    ${({ isPlaceholderSelected }) => isPlaceholderSelected && css`
        color: ${({ theme }) => theme.shades.four};
    `};

    ${({ isFocused, isHovered }) => (isFocused || isHovered) && css`
        border-color: ${({ theme }) => theme.colorSecondary};
    `};

    ${({ isValid }) => isValid && css`
        border-color: ${({ theme }) => theme.colorValid};
        color: ${({ theme }) => theme.colorValid};
    `};

    ${({ hasError }) => hasError && css`
        border-color: ${({ theme }) => theme.colorError};
        color: ${({ theme }) => theme.colorError};
    `};

    ${({ isDisabled }) => isDisabled && css`
        border-color: ${({ theme }) => theme.colorDisabled};
        color: ${({ theme }) => theme.colorDisabled};
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
};

export const IconWrapper = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h1)};
    position: absolute;
    top: 0;
    right: 0;
    line-height: 1;
    color: ${({ theme }) => theme.colorHeaderText.primary};
    pointer-events: none;

    ${({ isFocused, isHovered }) => (isFocused || isHovered) && css`
        color: ${({ theme }) => theme.colorSecondary};
    `};

    ${({ isFocused }) => isFocused && css`
        transform: rotate(180deg);
    `};

    ${({ isValid }) => isValid && css`
        color: ${({ theme }) => theme.colorValid};
    `};

    ${({ hasError }) => hasError && css`
        color: ${({ theme }) => theme.colorError};
    `};

    ${({ isDisabled }) => isDisabled && css`
        color: ${({ theme }) => theme.colorDisabled};
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
};

export const ErrorMessageWrapper = styled.div`
    margin: ${({ theme }) => theme.spacing(0.5, 0, 0)};
`;
