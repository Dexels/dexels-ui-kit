import {
    SELECTION_CONTROL_DIRECTIONS,
    SELECTION_CONTROL_EASINGS,
    SELECTION_CONTROL_TYPES,
} from './SelectionControl.consts';
import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import PropTypes from 'prop-types';
import setCentered from '../../../styles/mixins/setCentered';
import transitionEffect from '../../../styles/mixins/transitionEffect';

export const StyledSelectionControl = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

/* eslint-disable indent */
// The indent rule is disabled because ESLint has a bug when using functions inside of hover/focus etc
export const InputWrapper = styled.div`
    position: relative;
    flex: 0 0 auto;
    border: 1px solid ${({ theme }) => theme.selectionControl.colorDefault};
    width: ${({ theme }) => theme.selectionControl.size};
    height: ${({ theme }) => theme.selectionControl.size};
    pointer-events: none;

    ${({ direction }) => direction === SELECTION_CONTROL_DIRECTIONS.LTR && css`
        margin: 0 18px 0 0;
        order: 1;
    `};

    ${({ direction }) => direction === SELECTION_CONTROL_DIRECTIONS.RTL && css`
        margin: 0 0 0 18px;
        order: 2;
    `};

    ${({ type }) => type === SELECTION_CONTROL_TYPES.CHECKBOX && css`
        border-radius: ${({ theme }) => theme.selectionControl.checkboxBorderRadius};
    `};

    ${({ type }) => type === SELECTION_CONTROL_TYPES.RADIO && css`
        border-radius: 100%;
    `};

    ${({ isChecked, theme, type }) => isChecked && css`
        background-color: ${theme.selectionControl.colorDefault};

        ${type === SELECTION_CONTROL_TYPES.RADIO && css`
            &::after {
                position: absolute;
                top: 50%;
                left: 50%;
                width:  ${theme.selectionControl.radioButtonDotSize};
                height:  ${theme.selectionControl.radioButtonDotSize};
                background-color: ${theme.selectionControl.iconColor};
                content: '';
                transform: translate3d(-50%, -50%, 0);
                border-radius: 100%;
            }
        `};
    `};

    ${({ isIndeterminate, theme, type }) => isIndeterminate && css`
        ${type === SELECTION_CONTROL_TYPES.CHECKBOX && css`
            background-color: ${theme.selectionControl.colorDefault};
        `};
    `};

    ${({
        isChecked,
        isIndeterminate,
        isValid,
        theme,
        }) => isValid && css`
        border-color: ${theme.selectionControl.colorValid};

        ${(isChecked || isIndeterminate) && css`
            background-color: ${theme.selectionControl.colorValid};
        `};
    `};

    ${({
        hasError,
        isChecked,
        isIndeterminate,
        theme,
        }) => hasError && css`
        border-color: ${theme.selectionControl.colorError};

        ${(isChecked || isIndeterminate) && css`
            background-color: ${theme.selectionControl.colorError};
        `};
    `};

    ${({
        isChecked,
        isDisabled,
        isIndeterminate,
        theme,
        }) => isDisabled && css`
        border-color: ${theme.selectionControl.colorDisabled};

        ${(isChecked || isIndeterminate) && css`
            background-color: ${theme.selectionControl.colorDisabled};
        `};

        input {
            pointer-events: none !important;
        }
    `};

    &::before {
        ${({ transitionDuration, transitionEasing }) => transitionEffect({
            duration: transitionDuration,
            easing: transitionEasing,
        })};
        ${({ theme }) => css`
            width: calc(${theme.selectionControl.size} * (1 + 2/3));
            height: calc(${theme.selectionControl.size} * (1 + 2/3));
        `};
        ${setCentered()};
        display: block;
        position: absolute;
        opacity: 0;
        z-index: -1;
        border-radius: 100%;
        background-color: ${({ theme }) => theme.selectionControl.colorHover};
        content: '';
    }

    &:hover,
    &:focus {
        &::before {
            opacity: 1;
        }
    }

    input {
        display: block;
        position: relative;
        opacity: 0;
        z-index: 1;
        margin: 0;
        border: 0;
        cursor: pointer;
        width: ${({ theme }) => theme.selectionControl.size};
        height: ${({ theme }) => theme.selectionControl.size};
        pointer-events: auto;
    }
`;
/* eslint-enable */

InputWrapper.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isChecked: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isIndeterminate: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
        selectionControl: PropTypes.shape({
            checkboxBorderRadius: PropTypes.string.isRequired,
            colorDefault: PropTypes.string.isRequired,
            colorDisabled: PropTypes.string.isRequired,
            colorError: PropTypes.string.isRequired,
            colorValid: PropTypes.string.isRequired,
            iconColor: PropTypes.string.isRequired,
            iconSize: PropTypes.string.isRequired,
            radioButtonDotSize: PropTypes.string.isRequired,
            size: PropTypes.string.isRequired,
        }).isRequired,
    }),
    transitionDuration: PropTypes.number.isRequired,
    transitionEasing: PropTypes.oneOf(Object.values(SELECTION_CONTROL_EASINGS)),
    type: PropTypes.oneOf(Object.values(SELECTION_CONTROL_TYPES)).isRequired,
};

InputWrapper.defaultProps = {
    theme: defaultTheme,
};

export const IconWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 2;
    color: ${({ theme }) => theme.selectionControl.iconColor};
    font-size: ${({ theme }) => theme.selectionControl.iconSize};
    pointer-events: none;
`;

IconWrapper.propTypes = {
    theme: PropTypes.shape({
        selectionControl: PropTypes.shape({
            iconColor: PropTypes.string.isRequired,
            iconSize: PropTypes.string.isRequired,
        }).isRequired,
    }),
};

IconWrapper.defaultProps = {
    theme: defaultTheme,
};

export const LabelWrapper = styled.button`
    flex: 0 1 auto;
    outline: none;
    border: 0;
    background: transparent;
    cursor: pointer;
    padding: 0;
    text-align: left;

    ${({ isDisabled }) => isDisabled && css`
        pointer-events: none;
    `};

    ${({ direction }) => direction === SELECTION_CONTROL_DIRECTIONS.LTR && css`
        order: 2;
    `};

    ${({ direction }) => direction === SELECTION_CONTROL_DIRECTIONS.RTL && css`
        order: 1;
    `};
`;

LabelWrapper.propTypes = {
    direction: PropTypes.oneOf(Object.values(SELECTION_CONTROL_DIRECTIONS)).isRequired,
    isDisabled: PropTypes.bool.isRequired,
};

export const ErrorMessageWrapper = styled.div`
    margin: 2px 0 0 0;
`;
