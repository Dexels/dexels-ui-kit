import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
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
                background-color: ${theme.colorSecondary.dark};
            `};

            ${isValid && css`
                background-color: ${theme.colorValid.main};
            `};

            ${hasError && css`
                background-color: ${theme.colorError.main};
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
            top: calc(-${theme.spacingUnit} * 2);
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
        top: calc(${theme.spacingUnit} * 1.5);
        left: calc(${theme.spacingUnit} * 1.5);
        background-color: ${theme.colorLight.light};

        ${(hasValue || isFocused) && css`
            top: calc(-${theme.spacingUnit});
            left: calc(${theme.spacingUnit} * 2.5);
            padding: 0 calc(${theme.spacingUnit} / 2);
        `};
    `};
`;

LabelWrapper.propTypes = {
    hasValue: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
    variant: PropTypes.oneOf(Object.values(INPUT_VARIANTS)).isRequired,
};

export const TextField = styled.input`
    ${textStyling(availableTextStyles().body1)};
    display: block;
    outline: none;
    background-color: ${({ theme }) => theme.colorLight.light};
    width: 100%;
    color: ${({ theme }) => theme.colorDark.main};

    ${({ theme, variant }) => variant === INPUT_VARIANTS.COMPACT && css`
        border: 0;
        border-bottom: 1px solid ${theme.colorPrimary.dark};
        padding: 0;
        height: calc(${theme.spacingUnit} * 3);
    `};

    ${({ theme, variant }) => variant === INPUT_VARIANTS.OUTLINE && css`
        border: 1px solid ${theme.colorPrimary.dark};
        border-radius: 8px;
        padding: 0 calc(${theme.spacingUnit} * 1.5);
        height: calc(${theme.spacingUnit} * 6);
    `};

    ${({ isTextarea, theme }) => isTextarea && css`
        height: calc(${theme.spacingUnit} * 16);
        padding: calc(${theme.spacingUnit} * 1.5);
        resize: none;
    `};

    ${({ isFocused, isHovered, theme }) => (isFocused || isHovered) && css`
        border-color: ${theme.colorSecondary.dark};
    `};

    ${({ isValid, theme }) => isValid && css`
        border-color: ${theme.colorValid.main};
    `};

    ${({ hasError, theme }) => hasError && css`
        border-color: ${theme.colorError.main};
    `};

    ${({ isDisabled, theme }) => isDisabled && css`
        border-color: ${theme.colorDisabled.main};
        color: ${theme.colorDisabled.main};
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
        margin: calc(${theme.spacingUnit} / 2) 0 0 calc(${theme.spacingUnit} * 1.5);
    `};
`;

ErrorMessageWrapper.propTypes = {
    variant: PropTypes.oneOf(Object.values(INPUT_VARIANTS)).isRequired,
};
