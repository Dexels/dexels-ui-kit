import {
    SELECTION_CONTROL_DIRECTIONS,
    SELECTION_CONTROL_EASINGS,
    SELECTION_CONTROL_TYPES,
} from './SelectionControl.consts';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import setCentered from '../../../styles/mixins/setCentered';
import transitionEffect from '../../../styles/mixins/transitionEffect';

export const StyledSelectionControl = styled.div`
    ${setBoxSizing()};
    display: flex;
`;

/* eslint-disable indent */
// The indent rule is disabled because ESLint has a bug when using functions inside of hover/focus etc
export const InputWrapper = styled.div`
    position: relative;
    flex: 0 0 auto;
    border: 1px solid ${({ theme }) => theme.colorPrimary};
    width: ${({ theme }) => theme.spacing(3)};
    height: ${({ theme }) => theme.spacing(3)};
    pointer-events: none;

    ${({ direction, theme }) => direction === SELECTION_CONTROL_DIRECTIONS.LTR && css`
        margin: ${theme.spacing(0, 2.25, 0, 0)};
        order: 1;
    `};

    ${({ direction, theme }) => direction === SELECTION_CONTROL_DIRECTIONS.RTL && css`
        margin: ${theme.spacing(0, 0, 0, 2.25)};
        order: 2;
    `};

    ${({ theme, type }) => type === SELECTION_CONTROL_TYPES.CHECKBOX && css`
        border-radius: ${theme.spacing(0.5)};
    `};

    ${({ type }) => type === SELECTION_CONTROL_TYPES.RADIO && css`
        border-radius: 100%;
    `};

    ${({
        isChecked,
        isIndeterminate,
        theme,
        type,
    }) => (isChecked || isIndeterminate) && css`
        background-color: ${theme.colorPrimary};

        ${type === SELECTION_CONTROL_TYPES.RADIO && css`
            &::after {
                ${setCentered()};
                position: absolute;
                width: 60%;
                height: 60%;
                background-color: ${theme.shades.nine};
                content: '';
                border-radius: 100%;
            }
        `};
    `};

    ${({
        isChecked,
        isIndeterminate,
        isValid,
        theme,
    }) => isValid && css`
        border-color: ${theme.colorValid};

        ${(isChecked || isIndeterminate) && css`
            background-color: ${theme.colorValid};
        `};
    `};

    ${({
        hasError,
        isChecked,
        isIndeterminate,
        theme,
    }) => hasError && css`
        border-color: ${theme.colorInvalid};

        ${(isChecked || isIndeterminate) && css`
            background-color: ${theme.colorInvalid};
        `};
    `};

    ${({
        isChecked,
        isDisabled,
        isIndeterminate,
        theme,
    }) => isDisabled && css`
        border-color: ${theme.colorDisabled};

        ${(isChecked || isIndeterminate) && css`
            background-color: ${theme.colorDisabled};
        `};

        input {
            pointer-events: none !important;
        }
    `};

    &::before {
        ${setCentered()};
        ${({ transitionDuration, transitionEasing }) => transitionEffect({
            duration: transitionDuration,
            easing: transitionEasing,
        })};
        display: block;
        position: absolute;
        opacity: 0;
        z-index: -1;
        border-radius: 100%;
        background-color: ${({ theme }) => theme.colorTertiary};
        width: ${({ theme }) => `calc(${theme.spacing(3)} * (1 + 2 / 3))`};
        height: ${({ theme }) => `calc(${theme.spacing(3)} * (1 + 2 / 3))`};
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
        width: ${({ theme }) => theme.spacing(3)};
        height: ${({ theme }) => theme.spacing(3)};
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
    transitionDuration: PropTypes.number.isRequired,
    transitionEasing: PropTypes.oneOf(Object.values(SELECTION_CONTROL_EASINGS)),
    type: PropTypes.oneOf(Object.values(SELECTION_CONTROL_TYPES)).isRequired,
};

export const IconWrapper = styled.div`
    ${setCentered()};
    position: absolute;
    z-index: 2;
    color: ${({ theme }) => theme.colorContrastText.primary};
    font-size: ${({ theme }) => theme.spacing(2.5)};
    pointer-events: none;

    span {
        display: block;
    }
`;

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
    margin: ${({ theme }) => theme.spacing(0.25, 0, 0, 0)};
`;
