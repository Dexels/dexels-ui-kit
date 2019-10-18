import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import {
    backgroundColorPrimary,
    colorBodyDark,
    colorBodyLight,
    colorDisabled,
    colorError,
    colorPrimaryHover,
    colorPrimarySelected,
    colorValid,
} from '../../../styles/theme/theme';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import { spacingUnit } from '../../../styles/theme/layout';

export const StyledDropdown = styled.div`
    ${setBoxSizing()};
    position: relative;

    &::after {
        display: block;
        height: 1px;
        content: '';

        ${({ isFocused }) => isFocused && css`
            background-color: ${colorPrimarySelected};
        `};

        ${({ isValid }) => isValid && css`
            background-color: ${colorValid};
        `};

        ${({ hasError }) => hasError && css`
            background-color: ${colorError};
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
    ${textStyling(availableTextStyles().body1)};
    appearance: none;
    display: block;
    outline: none;
    border: 0;
    border-bottom: 1px solid ${colorBodyDark};
    border-radius: 0;
    background-color: ${backgroundColorPrimary};
    cursor: pointer;
    padding: 0;
    width: 100%;
    height: calc(${spacingUnit} * 3.5);
    color: ${colorBodyDark};

    ${({ isPlaceholderSelected }) => isPlaceholderSelected && css`
        color: ${colorBodyLight};
    `};

    ${({ isHovered }) => isHovered && css`
        border-color: ${colorPrimaryHover};
    `};

    ${({ isFocused }) => isFocused && css`
        border-color: ${colorPrimarySelected};
    `};

    ${({ isValid }) => isValid && css`
        border-color: ${colorValid};
        color: ${colorValid};
    `};

    ${({ hasError }) => hasError && css`
        border-color: ${colorError};
        color: ${colorError};
    `};

    ${({ isDisabled }) => isDisabled && css`
        border-color: ${colorDisabled};
        color: ${colorDisabled};
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
    ${textStyling(availableTextStyles().h1)};
    position: absolute;
    top: 0;
    right: 0;
    line-height: 1;
    color: ${colorBodyDark};
    pointer-events: none;

    ${({ isHovered }) => isHovered && css`
        color: ${colorPrimaryHover};
    `};

    ${({ isFocused }) => isFocused && css`
        color: ${colorPrimarySelected};
        transform: rotate(180deg);
    `};

    ${({ isValid }) => isValid && css`
        color: ${colorValid};
    `};

    ${({ hasError }) => hasError && css`
        color: ${colorError};
    `};

    ${({ isDisabled }) => isDisabled && css`
        color: ${colorDisabled};
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
    margin: calc(${spacingUnit} / 2) 0 0;
`;
