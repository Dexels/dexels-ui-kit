import { SELECTION_CONTROL_DIRECTIONS, SELECTION_CONTROL_TYPES } from './SelectionControl.consts';
import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import PropTypes from 'prop-types';

export const StyledSelectionControl = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

export const InputWrapper = styled.div`
    position: relative;
    flex: 0 0 auto;
    margin: 0 6px 0 0;
    border: 1px solid ${({ theme }) => theme.selectionControl.colorDefault};
    width: ${({ theme }) => theme.selectionControl.size};
    height: ${({ theme }) => theme.selectionControl.size};
    pointer-events: none;

    ${({ type }) => type === SELECTION_CONTROL_TYPES.CHECKBOX && css`
        border-radius: ${({ theme }) => theme.selectionControl.checkboxBorderRadius};
    `};

    ${({ type }) => type === SELECTION_CONTROL_TYPES.RADIO && css`
        border-radius: 100%;
    `};

    ${({ direction }) => direction === SELECTION_CONTROL_DIRECTIONS.LTR && css`
        margin: 0 6px 0 0;
        order: 1;
    `};

    ${({ direction }) => direction === SELECTION_CONTROL_DIRECTIONS.RTL && css`
        margin: 0 0 0 6px;
        order: 2;
    `};

    ${({ isChecked, theme, type }) => isChecked && css`
        background-color: ${theme.selectionControl.colorDefault};

        ${type === SELECTION_CONTROL_TYPES.RADIO && css`
            &::after {
                position: absolute;
                top: 50%;
                left: 50%;
                width:  ${theme.selectionControl.iconSize};
                height:  ${theme.selectionControl.iconSize};
                background-color: ${theme.selectionControl.iconColor};
                content: '';
                transform: translate3d(-50%, -50%, 0);
                border-radius: 100%;
            }
        `};
    `};

    ${({ isChecked, isValid, theme }) => isValid && css`
        border-color: ${theme.selectionControl.colorValid};

        ${isChecked && css`
            background-color: ${theme.selectionControl.colorValid};
        `};
    `};

    ${({ hasError, isChecked, theme }) => hasError && css`
        border-color: ${theme.selectionControl.colorError};

        ${isChecked && css`
            background-color: ${theme.selectionControl.colorError};
        `};
    `};

    ${({ isChecked, isDisabled, theme }) => isDisabled && css`
        border-color: ${theme.selectionControl.colorDisabled};

        ${isChecked && css`
            background-color: ${theme.selectionControl.colorDisabled};
        `};

        input {
            pointer-events: none !important;
        }
    `};

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

InputWrapper.propTypes = {
    direction: PropTypes.oneOf(Object.values(SELECTION_CONTROL_DIRECTIONS)).isRequired,
    hasError: PropTypes.bool.isRequired,
    isChecked: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
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
            size: PropTypes.string.isRequired,
        }).isRequired,
    }),
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
