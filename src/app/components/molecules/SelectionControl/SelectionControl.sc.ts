import { Direction, Easing } from '../../../types';
import { rippleEffect, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import { SelectionControlType } from './types';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { setCentered } from '../../../styles/mixins/setCentered';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { transitionEffect } from '../../../styles/mixins/transitionEffects';

interface StyledSelectionControlProps {
    hasHorizontalCorrection: boolean;
    hasVerticalCorrection: boolean;
    type: SelectionControlType;
}

export const StyledSelectionControl = styled.div<StyledSelectionControlProps>`
    ${setBoxSizing()}
    display: flex;

    ${({
        hasHorizontalCorrection,
        hasVerticalCorrection,
        theme,
        type,
    }) => css`
        ${type === SelectionControlType.CHECKBOX && css`
            ${hasHorizontalCorrection && css`
                margin-left: ${theme.spacing(-1)};
            `}

            ${hasVerticalCorrection && css`
                margin-top: ${theme.spacing(-1)};
                margin-bottom: ${theme.spacing(-1)};
            `}
        `}

        ${type === SelectionControlType.RADIO && css`
            ${hasHorizontalCorrection && css`
                margin-left: ${theme.spacing(-1.25)};
            `}

            ${hasVerticalCorrection && css`
                margin-top: ${theme.spacing(-1.25)};
                margin-bottom: ${theme.spacing(-1.25)};
            `}
        `}
    `}
`;

interface InputWrapperProps {
    direction: Direction;
    isDisabled: boolean;
    transitionDuration: number;
    transitionEasing: Easing;
}

/* eslint-disable indent, @typescript-eslint/indent */
// The indent rule is disabled because ESLint has a bug when using functions inside of hover/focus etc
export const InputWrapper = styled.div<InputWrapperProps>`
    display: flex;
    position: relative;
    flex: 0 0 auto;
    order: ${({ direction }) => (direction === Direction.LTR ? 1 : 2)};
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

InputWrapper.defaultProps = {
    theme: themeBasic,
};

interface FakeInputProps {
    hasError: boolean;
    isChecked: boolean;
    isDisabled: boolean;
    isHovered: boolean;
    isIndeterminate: boolean;
    isValid: boolean;
    type: SelectionControlType;
}

export const FakeInput = styled.div<FakeInputProps>`
    position: relative;
    flex: 0 0 auto;
    z-index: 3;
    margin: auto;
    border: 2px solid ${({ theme }) => theme.colorPrimary};
    background-color: transparent;

    ${({ theme, type }) => type === SelectionControlType.CHECKBOX && css`
        border-radius: ${theme.spacing(0.5)};
        width: ${theme.spacing(3)};
        height: ${theme.spacing(3)};
    `}

    ${({ theme, type }) => type === SelectionControlType.RADIO && css`
        border-radius: 100%;
        width: ${theme.spacing(2.5)};
        height: ${theme.spacing(2.5)};
    `}

    ${({
        isChecked,
        isIndeterminate,
        theme,
        type,
    }) => (isChecked || isIndeterminate) && type === SelectionControlType.RADIO && css`
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

        ${(isChecked || isIndeterminate) && type === SelectionControlType.RADIO && css`
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

        ${(isChecked || isIndeterminate) && type === SelectionControlType.RADIO && css`
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

        ${(isChecked || isIndeterminate) && type === SelectionControlType.RADIO && css`
            &::after {
                background-color: ${theme.colorDisabled};
            }
        `}
    `}
`;

FakeInput.defaultProps = {
    theme: themeBasic,
};

interface IconWrapperProps {
    hasError: boolean;
    isDisabled: boolean;
    isValid: boolean;
}

export const IconWrapper = styled.div<IconWrapperProps>`
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

IconWrapper.defaultProps = {
    theme: themeBasic,
};

interface LabelWrapperProps {
    direction: Direction;
    isDisabled: boolean;
}

export const LabelWrapper = styled.button<LabelWrapperProps>`
    flex: 1 1 auto;
    order: ${({ direction }) => (direction === Direction.LTR ? 2 : 1)};
    outline: none;
    border: 0;
    background: transparent;
    cursor: pointer;
    padding: 0;
    text-align: ${({ direction }) => (direction === Direction.LTR ? 'left' : 'right')};

    ${({ isDisabled }) => isDisabled && css`
        pointer-events: none;
    `}
`;

LabelWrapper.defaultProps = {
    theme: themeBasic,
};

export const ErrorMessageWrapper = styled.div`
    margin: ${({ theme }) => theme.spacing(0.25, 0, 0, 0)};
`;

ErrorMessageWrapper.defaultProps = {
    theme: themeBasic,
};
