import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import {
    backgroundColorPrimary,
    colorBodyDark,
    colorBodyLight,
    colorDisabled,
    colorPrimaryHover,
    colorPrimarySelected,
    colorSignalError,
    colorSignalValid,
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

        ${({ isFocussed }) => isFocussed && css`
            background-color: ${colorPrimarySelected};
        `};

        ${({ isValid }) => isValid && css`
            background-color: ${colorSignalValid};
        `};

        ${({ hasError }) => hasError && css`
            background-color: ${colorSignalError};
        `};

        ${({ isDisabled }) => isDisabled && css`
            background-color: transparent;
        `};
    }
`;

StyledDropdown.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFocussed: PropTypes.bool.isRequired,
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

    ${({ isFocussed }) => isFocussed && css`
        border-color: ${colorPrimarySelected};
    `};

    ${({ isValid }) => isValid && css`
        border-color: ${colorSignalValid};
        color: ${colorSignalValid};
    `};

    ${({ hasError }) => hasError && css`
        border-color: ${colorSignalError};
        color: ${colorSignalError};
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
    isFocussed: PropTypes.bool.isRequired,
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

    ${({ isFocussed }) => isFocussed && css`
        color: ${colorPrimarySelected};
        transform: rotate(180deg);
    `};

    ${({ isValid }) => isValid && css`
        color: ${colorSignalValid};
    `};

    ${({ hasError }) => hasError && css`
        color: ${colorSignalError};
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
    isFocussed: PropTypes.bool.isRequired,
    isHovered: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
};

export const ErrorMessageWrapper = styled.div`
    margin: calc(${spacingUnit} / 2) 0 0;
`;
