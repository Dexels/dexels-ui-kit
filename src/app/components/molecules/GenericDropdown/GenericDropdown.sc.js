import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const DisplayListButton = styled.div`
    position: absolute;
    float: right;
    color: ${({ theme }) => theme.genericDropdown.dividerColor};

    ${({ isListCollapsed, theme }) => isListCollapsed && css`
        color: ${theme.genericDropdown.activeInputColor};
    `};

    ${({ isDisabled, theme }) => isDisabled && css`
        color: ${theme.genericDropdown.disabledColor};
    `};
`;

DisplayListButton.propTypes = {
    isDisabled: PropTypes.bool,
    isListCollapsed: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
        genericDropdown: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

DisplayListButton.defaultProps = {
    isDisabled: false,
    theme: defaultTheme,
};

export const Item = styled.option`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)};
`;

Item.propTypes = {
    theme: PropTypes.shape({
        genericDropdown: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

Item.defaultProps = {
    theme: defaultTheme,
};

export const SelectionList = styled.select`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)};
    appearance: none;
    position: relative;
    outline: none;
    border: unset;
    background: ${({ theme }) => theme.genericDropdown.backgroundColor};
    width: 100%;

    ${({ isDisabled, theme }) => isDisabled && css`
        color: ${theme.genericDropdown.disabledColor};
    `};
`;

SelectionList.propTypes = {
    isDisabled: PropTypes.bool,
    theme: PropTypes.shape({
        genericDropdown: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

SelectionList.defaultProps = {
    isDisabled: false,
    theme: defaultTheme,
};

export const StyledGenericDropdown = styled.div`
    ${({ elevation }) => getElevation(elevation)};
    display: flex;
    flex-direction: row-reverse;
    border-bottom: 2px solid ${({ theme }) => theme.genericDropdown.dividerColor};

    ${({ isListCollapsed, theme }) => isListCollapsed && css`
        border-bottom: 2px solid ${theme.genericDropdown.activeInputColor};
    `};

    ${({ isDisabled, theme }) => isDisabled && css`
        color: ${theme.genericDropdown.disabledColor};
        border-bottom: 2px solid ${theme.genericDropdown.disabledColor};
        pointer-events: none;
    `};
`;

StyledGenericDropdown.propTypes = {
    isDisabled: PropTypes.bool,
    isListCollapsed: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
        genericDropdown: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

StyledGenericDropdown.defaultProps = {
    isDisabled: false,
    theme: defaultTheme,
};
