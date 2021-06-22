import { Direction, Easing, SelectionControlSize } from '../../../types';
import { rippleEffect, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import { getBorderColor } from '../../../styles/mixins/getBorderColor';
import { SelectionControlType } from './types';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { setCentered } from '../../../styles/mixins/setCentered';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { transitionEffect } from '../../../styles/mixins/transitionEffects';

interface StyledSelectionControlProps {
    hasHorizontalCorrection: boolean;
    hasVerticalCorrection: boolean;
    size: SelectionControlSize;
    type: SelectionControlType;
}

export const StyledSelectionControl = styled.div<StyledSelectionControlProps>`
    ${setBoxSizing()}
    display: flex;

    ${({ hasHorizontalCorrection, hasVerticalCorrection, size, theme, type }): FlattenSimpleInterpolation => css`
        ${type === SelectionControlType.CHECKBOX &&
        css`
            ${hasHorizontalCorrection &&
            css`
                margin-left: ${theme.spacing(size === SelectionControlSize.SMALL ? -0.5 : -1)};
            `}

            ${hasVerticalCorrection &&
            css`
                margin-top: ${theme.spacing(size === SelectionControlSize.SMALL ? -0.5 : -1)};
                margin-bottom: ${theme.spacing(size === SelectionControlSize.SMALL ? -0.5 : -1)};
            `}
        `}

        ${type === SelectionControlType.RADIO &&
        css`
            ${hasHorizontalCorrection &&
            css`
                margin-left: ${theme.spacing(size === SelectionControlSize.SMALL ? -0.75 : -1.25)};
            `}

            ${hasVerticalCorrection &&
            css`
                margin-top: ${theme.spacing(size === SelectionControlSize.SMALL ? -0.75 : -1.25)};
                margin-bottom: ${theme.spacing(size === SelectionControlSize.SMALL ? -0.75 : -1.25)};
            `}
        `}
    `}
`;

interface InputWrapperProps {
    direction: Direction;
    isDisabled: boolean;
    size: SelectionControlSize;
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
    width: ${({ size, theme }): string => theme.spacing(size === SelectionControlSize.SMALL ? 4 : 5)};
    height: ${({ size, theme }): string => theme.spacing(size === SelectionControlSize.SMALL ? 4 : 5)};
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
    isTableElement: boolean;
    isValid: boolean;
    size: SelectionControlSize;
    type: SelectionControlType;
}

export const FakeInput = styled.div<FakeInputProps>`
    position: relative;
    flex: 0 0 auto;
    z-index: 3;
    margin: auto;
    border: 2px solid;
    background-color: transparent;

    ${({ size, theme, type }): SimpleInterpolation =>
        type === SelectionControlType.CHECKBOX &&
        css`
            border-radius: ${theme.spacing(0.5)};
            width: ${theme.spacing(size === SelectionControlSize.SMALL ? 2 : 3)};
            height: ${theme.spacing(size === SelectionControlSize.SMALL ? 2 : 3)};
        `}

    ${({ size, theme, type }): SimpleInterpolation =>
        type === SelectionControlType.RADIO &&
        css`
            border-radius: 100%;
            width: ${theme.spacing(size === SelectionControlSize.SMALL ? 2 : 2.5)};
            height: ${theme.spacing(size === SelectionControlSize.SMALL ? 2 : 2.5)};
        `}

    ${({ isChecked, isIndeterminate, size, theme, type }): SimpleInterpolation =>
        (isChecked || isIndeterminate) &&
        type === SelectionControlType.RADIO &&
        css`
            &::after {
                ${setCentered()}
                position: absolute;
                border-radius: 100%;
                background-color: ${theme.colorSecondary};
                width: ${theme.spacing(size === SelectionControlSize.SMALL ? 1 : 1.5)};
                height: ${theme.spacing(size === SelectionControlSize.SMALL ? 1 : 1.5)};
                content: '';
            }
        `}

    ${({ isChecked, isIndeterminate, isValid, theme, type }): SimpleInterpolation =>
        isValid &&
        css`
            ${(isChecked || isIndeterminate) &&
            type === SelectionControlType.RADIO &&
            css`
                &::after {
                    background-color: ${theme.colorValid};
                }
            `}
        `}

    ${({ isChecked, isDisabled, isIndeterminate, theme, type }): SimpleInterpolation =>
        isDisabled &&
        css`
            ${(isChecked || isIndeterminate) &&
            type === SelectionControlType.RADIO &&
            css`
                &::after {
                    background-color: ${theme.colorDisabled};
                }
            `}
        `}

    ${({ hasError, isDisabled, isHovered, isTableElement, isValid, theme }): SimpleInterpolation =>
        css`
            /* stylelint-disable indentation */
            border-color: ${getBorderColor({
                defaultColor:
                    // eslint-disable-next-line no-nested-ternary
                    isTableElement && !isDisabled
                        ? theme.table.row.borderColorRowSelector
                        : isTableElement && isDisabled
                        ? theme.table.row.borderColorRowSelectorDisabled
                        : theme.colorPrimary,
                hasError,
                isDisabled,
                isHovered,
                isValid,
                theme,
            })};
            /* stylelint-enable indentation */
        `}
`;

FakeInput.defaultProps = {
    theme: themeBasic,
};

interface IconWrapperProps {
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
