import defaultTheme from '../../../styles/theme/theme';
import { INPUT_VARIANTS } from './Input.consts';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import validateThemePropTypes from '../../../utils/validateThemePropTypes';

export const Label = styled.label`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)};
    display: block;
    position: absolute;
    top: 11px;
    left: 12px;
    color: ${({ theme }) => theme.input.labelColorPrimary};
    pointer-events: none;
    background-color: white;
`;

Label.propTypes = {
    theme: PropTypes.shape({
        input: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }).isRequired,
};

Label.defaultProps = {
    theme: defaultTheme,
};

export const InputField = styled.input`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)};
    display: block;
    width: 100%;
    height: 46px;
    padding: 0 12px;
    outline: none;
    border: 1px solid ${({ theme }) => theme.input.colorPrimary};
    border-radius: ${({ theme }) => theme.input.borderRadius};

    &:hover {
        border-color: ${({ theme }) => theme.input.colorHover};

        + ${Label} {
            color: ${({ theme }) => theme.input.labelColorHover}
        }
    }

    &:focus {
        border-color: ${({ theme }) => theme.input.colorFocus}

        + ${Label} {
            ${({ theme }) => theme.textStyling(theme.availableTextStyles().caption)};
            top: -8px;
            left: 20px;
            padding: 0 4px;
        }
    }
`;

InputField.propTypes = {
    theme: PropTypes.shape({
        input: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }).isRequired,
};

InputField.defaultProps = {
    theme: defaultTheme,
};

export const StyledInput = styled.div`
    position: relative;
`;

StyledInput.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
        input: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }).isRequired,
    variant: PropTypes.oneOf(Object.values(INPUT_VARIANTS)).isRequired,
};

StyledInput.defaultProps = {
    theme: defaultTheme,
};
