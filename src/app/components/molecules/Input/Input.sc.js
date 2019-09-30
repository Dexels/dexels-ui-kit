import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import { INPUT_VARIANTS } from '../../../utils/constants';
import PropTypes from 'prop-types';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const ErrorMessage = styled.p`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().caption)};
    margin: 4px 0 0 12px;
    color: ${({ theme }) => theme.input.colorError};
`;

ErrorMessage.defaultProps = {
    theme: defaultTheme,
};

export const Label = styled.label`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)};
    display: block;
    position: absolute;
    top: 11px;
    left: 12px;
    background-color: white;
    color: ${({ theme }) => theme.input.labelColorPrimary};
    pointer-events: none;

    ${({ hasValue, isFocussed, theme }) => (hasValue || isFocussed) && css`
        ${theme.textStyling(theme.availableTextStyles().caption)};
        top: -8px;
        left: 20px;
        padding: 0 4px;
    `};

    ${({ hasValue, theme }) => hasValue && css`
        color: ${theme.input.labelColorActive} !important;
    `};

    ${({ isFocussed, theme }) => isFocussed && css`
        color: ${theme.input.labelColorFocus} !important;
    `};

    ${({ hasValue, isFocussed, variant }) => variant === INPUT_VARIANTS.COMPACT && css`
        top: 0;
        left: 0;
        background-color: transparent;

        ${(hasValue || isFocussed) && css`
            top: -16px;
            left: 0;
            padding: 0;
        `};
    `};

    ${({ isDisabled, theme }) => isDisabled && css`
        pointer-events: none;
        color: ${theme.input.labelColorDisabled} !important;
    `};

    ${({ isValid, theme }) => isValid && css`
        color: ${theme.input.labelColorValid} !important;
    `};

    ${({ hasError, theme }) => hasError && css`
        color: ${theme.input.labelColorError} !important;
    `};
`;

Label.propTypes = {
    hasError: PropTypes.bool.isRequired,
    hasValue: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFocussed: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
        input: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
    variant: PropTypes.oneOf(Object.values(INPUT_VARIANTS)).isRequired,
};

Label.defaultProps = {
    theme: defaultTheme,
};

export const TextField = styled.input`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)};
    display: block;
    outline: none;
    border: 1px solid ${({ theme }) => theme.input.colorPrimary};
    border-radius: ${({ theme }) => theme.input.borderRadius};
    padding: 0 12px;
    width: 100%;
    color: ${({ theme }) => theme.input.textColor};

    ${({ isTextarea, theme }) => isTextarea && css`
        height: ${theme.input.heightTextarea};
        padding: 11px 12px;
        resize: none;
    `};

    ${({ isFocussed, theme }) => isFocussed && css`
        border-color: ${theme.input.colorFocus} !important;
    `};

    ${({ isDisabled, theme }) => isDisabled && css`
        pointer-events: none;
        border-color: ${theme.input.colorDisabled} !important;
    `};

    ${({ hasError, theme }) => hasError && css`
        border-color: ${theme.input.colorError} !important;
    `};

    ${({ isValid, theme }) => isValid && css`
        border-color: ${theme.input.colorValid} !important;
    `};

    &:hover {
        border-color: ${({ theme }) => theme.input.colorHover};

        + ${Label} {
            color: ${({ theme }) => theme.input.labelColorHover};
        }
    }
`;

TextField.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFocussed: PropTypes.bool.isRequired,
    isTextarea: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
        input: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

TextField.defaultProps = {
    theme: defaultTheme,
};

export const StyledInput = styled.div`
    position: relative;

    ${({ variant, theme }) => variant === INPUT_VARIANTS.COMPACT && css`
        ${ErrorMessage} {
            margin-left: 0;
        }

        ${TextField} {
            border-top: 0;
            border-right: 0;
            border-left: 0;
            border-radius: 0;
            padding: 0;
            height: ${theme.input.heightCompact};
        }
    `};

    ${({ variant, theme }) => variant === INPUT_VARIANTS.FULL_SIZE && css`
        ${TextField} {
            height: ${theme.input.heightFullSize};
        }
    `};
`;

StyledInput.propTypes = {
    theme: PropTypes.shape({
        input: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
    variant: PropTypes.oneOf(Object.values(INPUT_VARIANTS)).isRequired,
};

StyledInput.defaultProps = {
    theme: defaultTheme,
};
