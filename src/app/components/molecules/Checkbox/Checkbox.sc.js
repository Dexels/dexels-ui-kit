import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import PropTypes from 'prop-types';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const StyledCheckbox = styled.div`
    position: relative;
    border: 1px solid ${({ theme }) => theme.checkbox.colorDefault};
    border-radius: ${({ theme }) => theme.checkbox.borderRadius};
    width: ${({ theme }) => theme.checkbox.size};
    height: ${({ theme }) => theme.checkbox.size};
    pointer-events: none;

    ${({ isChecked, theme }) => isChecked && css`
        background-color: ${theme.checkbox.colorDefault};
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

    ${({ hasError, isChecked, theme }) => hasError && css`
        border-color: ${theme.checkbox.colorError};

        ${isChecked && css`
            background-color: ${theme.checkbox.colorError};
        `};
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

StyledCheckbox.propTypes = {
    hasError: PropTypes.bool.isRequired,
    isChecked: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
        checkbox: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )),
    }),
};

StyledCheckbox.defaultProps = {
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
        checkbox: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )),
    }),
};

IconWrapper.defaultProps = {
    theme: defaultTheme,
};
