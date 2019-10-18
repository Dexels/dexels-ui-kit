import {
    colorButtonLight,
    colorDisabled,
    colorError,
    colorPrimary,
    colorValid,
    themeModes,
} from '../../../styles/theme/theme';
import {
    SELECTION_CONTROL_DIRECTIONS,
    SELECTION_CONTROL_EASINGS,
    SELECTION_CONTROL_TYPES,
} from './SelectionControl.consts';
import styled, { css } from 'styled-components';
import { blue10 } from '../../../styles/colors/colors';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import setCentered from '../../../styles/mixins/setCentered';
import { spacingUnit } from '../../../styles/theme/layout';
import theme from 'styled-theming';
import transitionEffect from '../../../styles/mixins/transitionEffect';

const selectionControlBackgroundColorHover = theme('mode', {
    [themeModes.basic]: blue10,
    [themeModes.dark]: blue10,
    [themeModes.light]: blue10,
});

export const StyledSelectionControl = styled.div`
    ${setBoxSizing()};
    display: flex;
    flex-wrap: nowrap;
`;

/* eslint-disable indent */
// The indent rule is disabled because ESLint has a bug when using functions inside of hover/focus etc
export const InputWrapper = styled.div`
    position: relative;
    flex: 0 0 auto;
    border: 1px solid ${colorPrimary};
    width: calc(${spacingUnit} * 3);
    height: calc(${spacingUnit} * 3);
    pointer-events: none;

    ${({ direction }) => direction === SELECTION_CONTROL_DIRECTIONS.LTR && css`
        margin: 0 calc(${spacingUnit} * 2.25) 0 0;
        order: 1;
    `};

    ${({ direction }) => direction === SELECTION_CONTROL_DIRECTIONS.RTL && css`
        margin: 0 0 0 calc(${spacingUnit} * 2.25);
        order: 2;
    `};

    ${({ type }) => type === SELECTION_CONTROL_TYPES.CHECKBOX && css`
        border-radius: 5px;
    `};

    ${({ type }) => type === SELECTION_CONTROL_TYPES.RADIO && css`
        border-radius: 100%;
    `};

    ${({ isChecked, isIndeterminate, type }) => (isChecked || isIndeterminate) && css`
        background-color: ${colorPrimary};

        ${type === SELECTION_CONTROL_TYPES.RADIO && css`
            &::after {
                ${setCentered()};
                position: absolute;
                width: 60%;
                height: 60%;
                background-color: ${colorButtonLight};
                content: '';
                border-radius: 100%;
            }
        `};
    `};

    ${({ isChecked, isIndeterminate, isValid }) => isValid && css`
        border-color: ${colorValid};

        ${(isChecked || isIndeterminate) && css`
            background-color: ${colorValid};
        `};
    `};

    ${({ hasError, isChecked, isIndeterminate }) => hasError && css`
        border-color: ${colorError};

        ${(isChecked || isIndeterminate) && css`
            background-color: ${colorError};
        `};
    `};

    ${({ isChecked, isDisabled, isIndeterminate }) => isDisabled && css`
        border-color: ${colorDisabled};

        ${(isChecked || isIndeterminate) && css`
            background-color: ${colorDisabled};
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
        background-color: ${selectionControlBackgroundColorHover};
        width: calc(calc(${spacingUnit} * 3) * (1 + 2 / 3));
        height: calc(calc(${spacingUnit} * 3) * (1 + 2 / 3));
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
        width: calc(${spacingUnit} * 3);
        height: calc(${spacingUnit} * 3);
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
    color: ${colorButtonLight};
    font-size: calc(${spacingUnit} * 2.5);
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
    margin: calc(${spacingUnit} / 4) 0 0 0;
`;
