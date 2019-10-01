import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import PropTypes from 'prop-types';
import { RADIO_BUTTON_DIRECTIONS } from './RadioButton.consts';

export const StyledRadioButton = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

export const RadioButtonWrapper = styled.div`
    position: relative;
    flex: 0 0 auto;
    margin: 0 6px 0 0;
    border: 1px solid ${({ theme }) => theme.checkbox.colorDefault};
    border-radius: 100%;
    width: ${({ theme }) => theme.checkbox.size};
    height: ${({ theme }) => theme.checkbox.size};
    pointer-events: none;

    ${({ direction }) => direction === RADIO_BUTTON_DIRECTIONS.LTR && css`
        margin: 0 6px 0 0;
        order: 1;
    `};

    ${({ direction }) => direction === RADIO_BUTTON_DIRECTIONS.RTL && css`
        margin: 0 0 0 6px;
        order: 2;
    `};

    ${({ isChecked, theme }) => isChecked && css`
        background-color: ${theme.checkbox.colorDefault};

        &::after {
            position: absolute;
            top: 50%;
            left: 50%;
            width:  ${theme.radioButton.iconSize};
            height:  ${theme.radioButton.iconSize};
            background-color: ${theme.radioButton.iconColor};
            content: '';
            transform: translate3d(-50%, -50%, 0);
            border-radius: 100%;
        }
    `};

    ${({ isChecked, isValid, theme }) => isValid && css`
        border-color: ${theme.checkbox.colorValid};

        ${isChecked && css`
            background-color: ${theme.checkbox.colorValid};
        `};
    `};

    ${({ hasError, isChecked, theme }) => hasError && css`
        border-color: ${theme.checkbox.colorError};

        ${isChecked && css`
            background-color: ${theme.checkbox.colorError};
        `};
    `};

    ${({ isChecked, isDisabled, theme }) => isDisabled && css`
        border-color: ${theme.checkbox.colorDisabled};

        ${isChecked && css`
            background-color: ${theme.checkbox.colorDisabled};
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
        width: ${({ theme }) => theme.checkbox.size};
        height: ${({ theme }) => theme.checkbox.size};
        pointer-events: auto;
    }
`;

RadioButtonWrapper.propTypes = {
    direction: PropTypes.oneOf(Object.values(RADIO_BUTTON_DIRECTIONS)).isRequired,
    hasError: PropTypes.bool.isRequired,
    isChecked: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
        checkbox: PropTypes.shape({
            borderRadius: PropTypes.string.isRequired,
            colorDefault: PropTypes.string.isRequired,
            colorDisabled: PropTypes.string.isRequired,
            colorError: PropTypes.string.isRequired,
            size: PropTypes.string.isRequired,
        }).isRequired,
    }),
};

RadioButtonWrapper.defaultProps = {
    theme: defaultTheme,
};

export const LabelWrapper = styled.div`
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

    ${({ direction }) => direction === RADIO_BUTTON_DIRECTIONS.LTR && css`
        order: 2;
    `};

    ${({ direction }) => direction === RADIO_BUTTON_DIRECTIONS.RTL && css`
        order: 1;
    `};
`;

LabelWrapper.propTypes = {
    direction: PropTypes.oneOf(Object.values(RADIO_BUTTON_DIRECTIONS)).isRequired,
    isDisabled: PropTypes.bool.isRequired,
};

export const ErrorMessageWrapper = styled.div`
    margin: 2px 0 0 0;
`;
