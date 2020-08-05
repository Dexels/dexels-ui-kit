import { Direction, Easing } from '../../../types';
import { rippleEffect, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
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

    ${({ hasHorizontalCorrection, hasVerticalCorrection, theme, type }): FlattenSimpleInterpolation => css`
        ${type === SelectionControlType.CHECKBOX &&
        css`
            ${hasHorizontalCorrection &&
            css`
                margin-left: ${theme.spacing(-1)};
            `}

            ${hasVerticalCorrection &&
            css`
                margin-top: ${theme.spacing(-1)};
                margin-bottom: ${theme.spacing(-1)};
            `}
        `}

        ${type === SelectionControlType.RADIO &&
        css`
            ${hasHorizontalCorrection &&
            css`
                margin-left: ${theme.spacing(-1.25)};
            `}

            ${hasVerticalCorrection &&
            css`
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

export const InputWrapper = styled.div<InputWrapperProps>`
    display: flex;
    position: relative;
    flex: 0 0 auto;
    order: ${({ direction }): number => (direction === Direction.LTR ? 1 : 2)};
    z-index: 1;
    border-radius: 100%;
    width: ${({ theme }): string => theme.spacing(5)};
    height: ${({ theme }): string => theme.spacing(5)};
    overflow: hidden;
    pointer-events: none;

    ${({ isDisabled }): SimpleInterpolation =>
        isDisabled &&
        css`
            input {
                pointer-events: none !important;
            }
        `}

    &::before {
        ${setCentered()}
        ${({ transitionDuration, transitionEasing }): FlattenSimpleInterpolation =>
            transitionEffect({
                duration: transitionDuration,
                easing: transitionEasing,
            })}
        display: block;
        position: absolute;
        opacity: 0;
        z-index: 1;
        border-radius: 100%;
        background-color: ${({ theme }): string => theme.colorTertiary};
        width: 100%;
        height: 100%;
        content: '';
    }

    &::after {
        ${({ theme }): FlattenSimpleInterpolation => rippleEffect(theme.colorSecondary)}
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
    border: 2px solid ${({ theme }): string => theme.colorPrimary};
    background-color: transparent;

    ${({ theme, type }): SimpleInterpolation =>
        type === SelectionControlType.CHECKBOX &&
        css`
            border-radius: ${theme.spacing(0.5)};
            width: ${theme.spacing(3)};
            height: ${theme.spacing(3)};
        `}

    ${({ theme, type }): SimpleInterpolation =>
        type === SelectionControlType.RADIO &&
        css`
            border-radius: 100%;
            width: ${theme.spacing(2.5)};
            height: ${theme.spacing(2.5)};
        `}

    ${({ isChecked, isIndeterminate, theme, type }): SimpleInterpolation =>
        (isChecked || isIndeterminate) &&
        type === SelectionControlType.RADIO &&
        css`
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

    ${({ isHovered, theme }): SimpleInterpolation =>
        isHovered &&
        css`
            border-color: ${theme.colorSecondary};
        `}

    ${({ isChecked, isIndeterminate, isValid, theme, type }): SimpleInterpolation =>
        isValid &&
        css`
            border-color: ${theme.colorValid};

            ${(isChecked || isIndeterminate) &&
            type === SelectionControlType.RADIO &&
            css`
                &::after {
                    background-color: ${theme.colorValid};
                }
            `}
        `}

    ${({ hasError, isChecked, isIndeterminate, theme, type }): SimpleInterpolation =>
        hasError &&
        css`
            border-color: ${theme.colorInvalid};

            ${(isChecked || isIndeterminate) &&
            type === SelectionControlType.RADIO &&
            css`
                &::after {
                    background-color: ${theme.colorInvalid};
                }
            `}
        `}

    ${({ isChecked, isDisabled, isIndeterminate, theme, type }): SimpleInterpolation =>
        isDisabled &&
        css`
            border-color: ${theme.colorDisabled};

            ${(isChecked || isIndeterminate) &&
            type === SelectionControlType.RADIO &&
            css`
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
    color: ${({ theme }): string => theme.colorSecondary};

    span {
        display: block;
    }

    ${({ hasError, theme }): SimpleInterpolation =>
        hasError &&
        css`
            color: ${theme.colorInvalid};
        `}

    ${({ isDisabled, theme }): SimpleInterpolation =>
        isDisabled &&
        css`
            color: ${theme.colorDisabled};
        `}

    ${({ isValid, theme }): SimpleInterpolation =>
        isValid &&
        css`
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
    order: ${({ direction }): number => (direction === Direction.LTR ? 2 : 1)};
    outline: none;
    border: 0;
    background: transparent;
    cursor: pointer;
    padding: 0;
    text-align: ${({ direction }): string => (direction === Direction.LTR ? 'left' : 'right')};

    ${({ isDisabled }): SimpleInterpolation =>
        isDisabled &&
        css`
            pointer-events: none;
        `}
`;

LabelWrapper.defaultProps = {
    theme: themeBasic,
};

export const ErrorMessageWrapper = styled.div`
    margin: ${({ theme }): string => theme.spacing(0.25, 0, 0, 0)};
`;

ErrorMessageWrapper.defaultProps = {
    theme: themeBasic,
};
