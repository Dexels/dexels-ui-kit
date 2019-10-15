import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const DisplayListButton = styled.div`
    position: absolute;
    float: right;
    color: ${({ theme }) => theme.dropdown.dividerColor};

    ${({ isListCollapsed, theme }) => isListCollapsed && css`
        color: ${theme.dropdown.activeInputColor};
    `};

    ${({ isDisabled, theme }) => isDisabled && css`
        color: ${theme.dropdown.disabledColor};
    `};
`;

DisplayListButton.propTypes = {
    isDisabled: PropTypes.bool,
    isListCollapsed: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
        dropdown: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

DisplayListButton.defaultProps = {
    isDisabled: false,
    theme: defaultTheme,
};

export const Option = styled.option`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)};
`;

Option.propTypes = {
    theme: PropTypes.shape({
        dropdown: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

Option.defaultProps = {
    theme: defaultTheme,
};

export const Select = styled.select`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)};
    appearance: none;
    position: relative;
    outline: none;
    border: unset;
    background: ${({ theme }) => theme.dropdown.backgroundColor};
    width: 100%;

    ${({ isDisabled, theme }) => isDisabled && css`
        color: ${theme.dropdown.disabledColor};
    `};
`;

Select.propTypes = {
    isDisabled: PropTypes.bool,
    theme: PropTypes.shape({
        dropdown: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

Select.defaultProps = {
    isDisabled: false,
    theme: defaultTheme,
};

export const StyledDropdown = styled.div`
    ${({ elevation }) => getElevation(elevation)};
    display: flex;
    flex-direction: row-reverse;
    border-bottom: 2px solid ${({ theme }) => theme.dropdown.dividerColor};

    ${({ isListCollapsed, theme }) => isListCollapsed && css`
        border-bottom: 2px solid ${theme.dropdown.activeInputColor};
    `};

    ${({ isDisabled, theme }) => isDisabled && css`
        color: ${theme.dropdown.disabledColor};
        border-bottom: 2px solid ${theme.dropdown.disabledColor};
        pointer-events: none;
    `};
`;

StyledDropdown.propTypes = {
    isDisabled: PropTypes.bool,
    isListCollapsed: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
        dropdown: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

StyledDropdown.defaultProps = {
    isDisabled: false,
    theme: defaultTheme,
};
