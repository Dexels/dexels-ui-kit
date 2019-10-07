import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import { INPUT_VARIANTS } from '../../../utils/constants';
import PropTypes from 'prop-types';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const StyledInput = styled.div`
    position: relative;

    ${({ isDisabled }) => isDisabled && css`
        * {
            pointer-events: none;
        }
    `};
`;

StyledInput.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
};

export const LabelWrapper = styled.div`
    position: absolute;
    pointer-events: none;

    ${({ hasValue, isFocussed, variant }) => variant === INPUT_VARIANTS.COMPACT && css`
        top: 0;
        left: 0;

        ${(hasValue || isFocussed) && css`
            top: -16px;
            left: 0;
            padding: 0;
        `};
    `};

    ${({ hasValue, isFocussed, variant }) => variant === INPUT_VARIANTS.FULL_SIZE && css`
        top: 12px;
        left: 12px;
        background-color: white;

        ${(hasValue || isFocussed) && css`
            top: -8px;
            left: 20px;
            padding: 0 4px;
        `};
    `};
`;

LabelWrapper.propTypes = {
    hasValue: PropTypes.bool.isRequired,
    isFocussed: PropTypes.bool.isRequired,
    variant: PropTypes.oneOf(Object.values(INPUT_VARIANTS)).isRequired,
};

export const TextField = styled.input`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)};
    display: block;
    outline: none;
    width: 100%;
    color: ${({ theme }) => theme.input.textColor};

    ${({ variant, theme }) => variant === INPUT_VARIANTS.COMPACT && css`
        border: 0;
        border-bottom: 1px solid ${theme.input.colorDefault};
        padding: 0;
        height: ${theme.input.heightCompact};
    `};

    ${({ variant, theme }) => variant === INPUT_VARIANTS.FULL_SIZE && css`
        border: 1px solid ${theme.input.colorDefault};
        border-radius: ${theme.input.borderRadius};
        padding: 0 12px;
        height: ${theme.input.heightFullSize};
    `};

    ${({ isTextarea, theme }) => isTextarea && css`
        height: ${theme.input.heightTextarea};
        padding: 12px;
        resize: none;
    `};

    ${({ isFocussed, theme }) => isFocussed && css`
        border-color: ${theme.input.colorFocus};
    `};

    ${({ hasError, theme }) => hasError && css`
        border-color: ${theme.input.colorError};
    `};

    ${({ isValid, theme }) => isValid && css`
        border-color: ${theme.input.colorValid};
    `};

    ${({ isDisabled, theme }) => isDisabled && css`
        border-color: ${theme.input.colorDisabled};
        color: ${theme.input.colorDisabled};
    `};

    &:hover {
        border-color: ${({ theme }) => theme.input.colorHover};
    }
`;

TextField.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFocussed: PropTypes.bool.isRequired,
    isTextarea: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
        availableTextStyles: PropTypes.func.isRequired,
        input: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
        textStyling: PropTypes.func.isRequired,
    }),
    variant: PropTypes.oneOf(Object.values(INPUT_VARIANTS)).isRequired,
};

TextField.defaultProps = {
    theme: defaultTheme,
};

export const ErrorMessageWrapper = styled.div`
    ${({ variant }) => variant === INPUT_VARIANTS.FULL_SIZE && css`
        margin: 4px 0 0 12px;
    `};
`;

ErrorMessageWrapper.propTypes = {
    variant: PropTypes.oneOf(Object.values(INPUT_VARIANTS)).isRequired,
};
