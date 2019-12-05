import { rippleEffect, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import {
    SELECTION_CONTROL_DIRECTIONS,
    SELECTION_CONTROL_EASINGS,
    SELECTION_CONTROL_TYPES,
} from './SelectionControl.consts';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import setCentered from '../../../styles/mixins/setCentered';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/propTypes';
import { transitionEffect } from '../../../styles/mixins/transitionEffects';

export const StyledSelectionControl = styled.div`
    ${setBoxSizing()}
    display: flex;
`;

/* eslint-disable indent */
// The indent rule is disabled because ESLint has a bug when using functions inside of hover/focus etc
export const InputWrapper = styled.div`
    display: flex;
    position: relative;
    flex: 0 0 auto;
    order: ${({ direction }) => (direction === SELECTION_CONTROL_DIRECTIONS.LTR ? 1 : 2)};
    z-index: 1;
    border-radius: 100%;
    width: ${({ theme }) => theme.spacing(5)};
    height: ${({ theme }) => theme.spacing(5)};
    overflow: hidden;
    pointer-events: none;

    ${({ isDisabled }) => isDisabled && css`
        input {
            pointer-events: none !important;
        }
    `}

    &::before {
        ${setCentered()}
        ${({ transitionDuration, transitionEasing }) => transitionEffect({
            duration: transitionDuration,
            easing: transitionEasing,
        })}
        display: block;
        position: absolute;
        opacity: 0;
        z-index: 1;
        border-radius: 100%;
        background-color: ${({ theme }) => theme.colorTertiary};
        width: 100%;
        height: 100%;
        content: '';
    }

    &::after {
        ${({ theme }) => rippleEffect(theme.colorSecondary)}
        z-index: 2;
    }

    &:hover,
    &:focus {
        &::before {
            opacity: 0.25;
        }
    }

    &:active::after {
        ${rippleEffectReset()}
    }

    input {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        z-index: 0;
        margin: 0;
        border: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        pointer-events: auto;
    }
`;
/* eslint-enable */

InputWrapper.propTypes = {
    direction: PropTypes.oneOf(Object.values(SELECTION_CONTROL_DIRECTIONS)).isRequired,
    isDisabled: PropTypes.bool.isRequired,
    theme: themePropTypes,
    transitionDuration: PropTypes.number.isRequired,
    transitionEasing: PropTypes.oneOf(Object.values(SELECTION_CONTROL_EASINGS)),
};

InputWrapper.defaultProps = {
    theme: themeBasic,
};

export const FakeInput = styled.div`
    position: relative;
    flex: 0 0 auto;
    z-index: 3;
    margin: auto;
    border: 2px solid ${({ theme }) => theme.colorPrimary};
    background-color: transparent;

    ${({ theme, type }) => type === SELECTION_CONTROL_TYPES.CHECKBOX && css`
        border-radius: ${theme.spacing(0.5)};
        width: ${theme.spacing(3)};
        height: ${theme.spacing(3)};
    `}

    ${({ theme, type }) => type === SELECTION_CONTROL_TYPES.RADIO && css`
        border-radius: 100%;
        width: ${theme.spacing(2.5)};
        height: ${theme.spacing(2.5)};
    `}

    ${({
        isChecked,
        isIndeterminate,
        theme,
        type,
    }) => (isChecked || isIndeterminate) && type === SELECTION_CONTROL_TYPES.RADIO && css`
        &::after {
            ${setCentered()}
            position: absolute;
            border-radius: 100%;
            background-color: ${theme.colorSecondary};
            width: ${theme.spacing(1.5)};
            height: ${theme.spacing(1.5)};
            content: '';
        }
    `}

    ${({ isHovered, theme }) => isHovered && css`
        border-color: ${theme.colorSecondary};
    `}

    ${({
        isChecked,
        isIndeterminate,
        isValid,
        theme,
        type,
    }) => isValid && css`
        border-color: ${theme.colorValid};

        ${(isChecked || isIndeterminate) && type === SELECTION_CONTROL_TYPES.RADIO && css`
            &::after {
                background-color: ${theme.colorValid};
            }
        `}
    `}

    ${({
        hasError,
        isChecked,
        isIndeterminate,
        theme,
        type,
    }) => hasError && css`
        border-color: ${theme.colorInvalid};

        ${(isChecked || isIndeterminate) && type === SELECTION_CONTROL_TYPES.RADIO && css`
            &::after {
                background-color: ${theme.colorInvalid};
            }
        `}
    `}

    ${({
        isChecked,
        isDisabled,
        isIndeterminate,
        theme,
        type,
    }) => isDisabled && css`
        border-color: ${theme.colorDisabled};

        ${(isChecked || isIndeterminate) && type === SELECTION_CONTROL_TYPES.RADIO && css`
            &::after {
                background-color: ${theme.colorDisabled};
            }
        `}
    `}
`;

FakeInput.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isChecked: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isHovered: PropTypes.bool.isRequired,
    isIndeterminate: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    theme: themePropTypes,
    type: PropTypes.oneOf(Object.values(SELECTION_CONTROL_TYPES)).isRequired,
};

FakeInput.defaultProps = {
    theme: themeBasic,
};

export const IconWrapper = styled.div`
    ${setCentered()}
    position: absolute;
    z-index: 4;
    padding: 0 0 1px;
    color: ${({ theme }) => theme.colorSecondary};
    font-size: ${({ theme }) => theme.spacing(2.5)};

    span {
        display: block;
    }

    ${({ hasError, theme }) => hasError && css`
        color: ${theme.colorInvalid};
    `}

    ${({ isDisabled, theme }) => isDisabled && css`
        color: ${theme.colorDisabled};
    `}

    ${({ isValid, theme }) => isValid && css`
        color: ${theme.colorValid};
    `}
`;

IconWrapper.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

IconWrapper.defaultProps = {
    theme: themeBasic,
};

export const LabelWrapper = styled.button`
    flex: 1 1 auto;
    order: ${({ direction }) => (direction === SELECTION_CONTROL_DIRECTIONS.LTR ? 2 : 1)};
    outline: none;
    border: 0;
    background: transparent;
    cursor: pointer;
    padding: 0;
    text-align: ${({ direction }) => (direction === SELECTION_CONTROL_DIRECTIONS.LTR ? 'left' : 'right')};

    ${({ isDisabled }) => isDisabled && css`
        pointer-events: none;
    `}
`;

LabelWrapper.propTypes = {
    direction: PropTypes.oneOf(Object.values(SELECTION_CONTROL_DIRECTIONS)).isRequired,
    isDisabled: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

LabelWrapper.defaultProps = {
    theme: themeBasic,
};

export const ErrorMessageWrapper = styled.div`
    margin: ${({ theme }) => theme.spacing(0.25, 0, 0, 0)};
`;

ErrorMessageWrapper.propTypes = {
    theme: themePropTypes,
};

ErrorMessageWrapper.defaultProps = {
    theme: themeBasic,
};
