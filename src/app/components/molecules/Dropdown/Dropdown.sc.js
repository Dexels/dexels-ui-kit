import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';

export const StyledDropdown = styled.div`
    ${setBoxSizing()};
    display: flex;
    position: relative;
    flex-direction: row;
    flex-grow: auto;
    /* @TODO: figure out how to not use 100%, but just add theme.spacing * 3 to the width */
    /* width: ${({ theme }) => `calc(100% + ${theme.spacing(3)})`}; */

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
            background-color: ${({ theme }) => theme.colorInvalid};
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
    padding: ${({ theme }) => theme.spacing(0, 3, 0, 0)};
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
        border-color: ${({ theme }) => theme.colorInvalid};
        color: ${({ theme }) => theme.colorInvalid};
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
    position: absolute;
    top: 0;
    right: 0;
    line-height: 1;
    color: ${({ theme }) => theme.colorHeaderText.primary};
    font-size: ${({ theme }) => theme.spacing(3)};
    pointer-events: none;

    ${({ isFocused }) => isFocused && css`
        transform: rotate(180deg);
    `};

    ${({ isValid }) => isValid && css`
        color: ${({ theme }) => theme.colorValid};
    `};

    ${({ hasError }) => hasError && css`
        color: ${({ theme }) => theme.colorInvalid};
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
    isValid: PropTypes.bool.isRequired,
};

export const ErrorMessageWrapper = styled.div`
    margin: ${({ theme }) => theme.spacing(0.5, 0, 0)};
`;
