import styled, { css } from 'styled-components';
import { CHECKBOX_DIRECTIONS } from './Checkbox.consts';
import defaultTheme from '../../../styles/theme/theme';
import PropTypes from 'prop-types';

export const StyledCheckbox = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

export const CheckboxWrapper = styled.div`
    position: relative;
    flex: 0 0 auto;
    margin: 0 6px 0 0;
    border: 1px solid ${({ theme }) => theme.checkbox.colorDefault};
    border-radius: ${({ theme }) => theme.checkbox.borderRadius};
    width: ${({ theme }) => theme.checkbox.size};
    height: ${({ theme }) => theme.checkbox.size};
    pointer-events: none;

    ${({ direction }) => direction === CHECKBOX_DIRECTIONS.LTR && css`
        margin: 0 6px 0 0;
        order: 1;
    `};

    ${({ direction }) => direction === CHECKBOX_DIRECTIONS.RTL && css`
        margin: 0 0 0 6px;
        order: 2;
    `};

    ${({ isChecked, theme }) => isChecked && css`
        background-color: ${theme.checkbox.colorDefault};
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

CheckboxWrapper.propTypes = {
    direction: PropTypes.oneOf(Object.values(CHECKBOX_DIRECTIONS)).isRequired,
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

CheckboxWrapper.defaultProps = {
    theme: defaultTheme,
};

export const IconWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 2;
    color: ${({ theme }) => theme.checkbox.iconColor};
    font-size: ${({ theme }) => theme.checkbox.iconFontSize};
    pointer-events: none;
`;

IconWrapper.propTypes = {
    theme: PropTypes.shape({
        checkbox: PropTypes.shape({
            iconColor: PropTypes.string.isRequired,
            iconFontSize: PropTypes.string.isRequired,
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

    ${({ direction }) => direction === CHECKBOX_DIRECTIONS.LTR && css`
        order: 2;
    `};

    ${({ direction }) => direction === CHECKBOX_DIRECTIONS.RTL && css`
        order: 1;
    `};
`;

LabelWrapper.propTypes = {
    direction: PropTypes.oneOf(Object.values(CHECKBOX_DIRECTIONS)).isRequired,
    isDisabled: PropTypes.bool.isRequired,
};

export const ErrorMessageWrapper = styled.div`
    margin: 2px 0 0 0;
`;
