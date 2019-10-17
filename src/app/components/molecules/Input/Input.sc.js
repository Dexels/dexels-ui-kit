import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import {
    colorBodyDark,
    colorPrimary,
    colorPrimaryHover,
    colorPrimarySelected,
    colorSignalDisabled,
    colorSignalError,
    colorSignalValid,
} from '../../../styles/theme/theme';
import styled, { css } from 'styled-components';
import { INPUT_VARIANTS } from '../../../utils/constants';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import { spacingUnit } from '../../../styles/theme/layout';

export const StyledInput = styled.div`
    ${setBoxSizing()};
    position: relative;

    ${({ isDisabled }) => isDisabled && css`
        * {
            pointer-events: none;
        }
    `};

    ${({
        hasError,
        isDisabled,
        isFocussed,
        isValid,
        variant,
    }) => variant === INPUT_VARIANTS.COMPACT && css`
        &::after {
            display: block;
            content: '';
            height: 1px;

            ${isFocussed && css`
                background-color: ${colorPrimarySelected};
            `};

            ${isValid && css`
                background-color: ${colorSignalValid};
            `};

            ${hasError && css`
                background-color: ${colorSignalError};
            `};

            ${isDisabled && css`
                background-color: transparent;
            `};
        }
    `};
`;

StyledInput.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFocussed: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    variant: PropTypes.oneOf(Object.values(INPUT_VARIANTS)).isRequired,
};

export const LabelWrapper = styled.div`
    position: absolute;
    pointer-events: none;

    ${({ hasValue, isFocussed, variant }) => variant === INPUT_VARIANTS.COMPACT && css`
        top: 0;
        left: 0;

        ${(hasValue || isFocussed) && css`
            top: calc(-${spacingUnit} * 2);
            left: 0;
            padding: 0;
        `};
    `};

    ${({ hasValue, isFocussed, variant }) => variant === INPUT_VARIANTS.FULL_SIZE && css`
        top: calc(${spacingUnit} * 1.5);
        left: calc(${spacingUnit} * 1.5);
        background-color: white;

        ${(hasValue || isFocussed) && css`
            top: calc(-${spacingUnit} * 1);
            left: calc(${spacingUnit} * 2.5);
            padding: 0 calc(${spacingUnit} / 2);
        `};
    `};
`;

LabelWrapper.propTypes = {
    hasValue: PropTypes.bool.isRequired,
    isFocussed: PropTypes.bool.isRequired,
    variant: PropTypes.oneOf(Object.values(INPUT_VARIANTS)).isRequired,
};

export const TextField = styled.input`
    ${textStyling(availableTextStyles().body1)};
    display: block;
    outline: none;
    width: 100%;
    color: ${colorBodyDark};

    ${({ variant }) => variant === INPUT_VARIANTS.COMPACT && css`
        border: 0;
        border-bottom: 1px solid ${colorPrimary};
        padding: 0;
        height: calc(${spacingUnit} * 3);
    `};

    ${({ variant }) => variant === INPUT_VARIANTS.FULL_SIZE && css`
        border: 1px solid ${colorPrimary};
        border-radius: 8px;
        padding: 0 calc(${spacingUnit} * 1.5);
        height: calc(${spacingUnit} * 6);
    `};

    ${({ isTextarea }) => isTextarea && css`
        height: calc(${spacingUnit} * 16);
        padding: calc(${spacingUnit} * 1.5);
        resize: none;
    `};

    ${({ isHovered }) => isHovered && css`
        border-color: ${colorPrimaryHover};
    `};

    ${({ isFocussed }) => isFocussed && css`
        border-color: ${colorPrimarySelected};
    `};

    ${({ isValid }) => isValid && css`
        border-color: ${colorSignalValid};
    `};

    ${({ hasError }) => hasError && css`
        border-color: ${colorSignalError};
    `};

    ${({ isDisabled }) => isDisabled && css`
        border-color: ${colorSignalDisabled};
        color: ${colorSignalDisabled};
    `};
`;

TextField.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFocussed: PropTypes.bool.isRequired,
    isHovered: PropTypes.bool.isRequired,
    isTextarea: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    variant: PropTypes.oneOf(Object.values(INPUT_VARIANTS)).isRequired,
};

export const ErrorMessageWrapper = styled.div`
    ${({ variant }) => variant === INPUT_VARIANTS.FULL_SIZE && css`
        margin: calc(${spacingUnit} / 2) 0 0 calc(${spacingUnit} * 1.5);
    `};
`;

ErrorMessageWrapper.propTypes = {
    variant: PropTypes.oneOf(Object.values(INPUT_VARIANTS)).isRequired,
};
