import styled, { css } from 'styled-components';
import { INPUT_VARIANTS } from '../../../utils/constants';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';

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
        isFocused,
        isValid,
        theme,
        variant,
    }) => variant === INPUT_VARIANTS.COMPACT && css`
        &::after {
            display: block;
            content: '';
            height: 1px;

            ${isFocused && css`
                background-color: ${theme.colorSecondary};
            `};

            ${isValid && css`
                background-color: ${theme.colorValid};
            `};

            ${hasError && css`
                background-color: ${theme.colorInvalid};
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
    isFocused: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    variant: PropTypes.oneOf(Object.values(INPUT_VARIANTS)).isRequired,
};

export const LabelWrapper = styled.div`
    position: absolute;
    pointer-events: none;

    ${({
        hasValue,
        isFocused,
        theme,
        variant,
    }) => variant === INPUT_VARIANTS.COMPACT && css`
        top: 0;
        left: 0;

        ${(hasValue || isFocused) && css`
            top: -${theme.spacing(2)};
            left: 0;
            padding: 0;
        `};
    `};

    ${({
        hasValue,
        isFocused,
        theme,
        variant,
    }) => variant === INPUT_VARIANTS.OUTLINE && css`
        top: ${theme.spacing(1.5)};
        left: ${theme.spacing(1.5)};
        background-color: ${theme.shades.nine};

        ${(hasValue || isFocused) && css`
            top: -${theme.spacing(1)};
            left: ${theme.spacing(2.5)};
            padding: ${theme.spacing(0, 0.5)};
        `};
    `};
`;

LabelWrapper.propTypes = {
    hasValue: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
    variant: PropTypes.oneOf(Object.values(INPUT_VARIANTS)).isRequired,
};

export const TextField = styled.input`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)};
    display: block;
    outline: none;
    background-color: ${({ theme }) => theme.shades.nine};
    width: 100%;
    color: ${({ theme }) => theme.colorHeaderText.primary};

    ${({ theme, variant }) => variant === INPUT_VARIANTS.COMPACT && css`
        border: 0;
        border-bottom: 1px solid ${theme.colorPrimary};
        padding: 0;
        height: ${theme.spacing(3)};
    `};

    ${({ theme, variant }) => variant === INPUT_VARIANTS.OUTLINE && css`
        border: 1px solid ${theme.colorPrimary};
        border-radius: ${theme.spacing(1)};
        padding: ${theme.spacing(0, 1.5)};
        height: ${theme.spacing(6)};
    `};

    ${({ isTextarea, theme }) => isTextarea && css`
        height: ${theme.spacing(16)};
        padding: ${theme.spacing(1.5)};
        resize: none;
    `};

    ${({ isFocused, isHovered, theme }) => (isFocused || isHovered) && css`
        border-color: ${theme.colorSecondary};
    `};

    ${({ isValid, theme }) => isValid && css`
        border-color: ${theme.colorValid};
    `};

    ${({ hasError, theme }) => hasError && css`
        border-color: ${theme.colorInvalid};
    `};

    ${({ isDisabled, theme }) => isDisabled && css`
        border-color: ${theme.colorDisabled};
        color: ${theme.colorDisabled};
    `};
`;

TextField.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
    isHovered: PropTypes.bool.isRequired,
    isTextarea: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    variant: PropTypes.oneOf(Object.values(INPUT_VARIANTS)).isRequired,
};

export const ErrorMessageWrapper = styled.div`
    ${({ theme, variant }) => variant === INPUT_VARIANTS.OUTLINE && css`
        margin: ${theme.spacing(0.5, 0, 0, 1.5)};
    `};
`;

ErrorMessageWrapper.propTypes = {
    variant: PropTypes.oneOf(Object.values(INPUT_VARIANTS)).isRequired,
};
