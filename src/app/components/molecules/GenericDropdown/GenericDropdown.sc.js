import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const DisplayList = styled.div`
    position: absolute;
    float: right;
    color: ${({ theme }) => theme.genericDropdown.colorDivider};

    ${({ listOpen, theme }) => listOpen && css`
        color: ${theme.genericDropdown.colorDividerSelected};
    `};

    ${({ isDisabled, theme }) => isDisabled && css`
        color: ${theme.genericDropdown.colorDisabled};
    `};
`;

DisplayList.propTypes = {
    isDisabled: PropTypes.bool,
    listOpen: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
        genericDropdown: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

DisplayList.defaultProps = {
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
    position: relative;
    appearance: none;
    border: unset;
    outline: none;
    background: ${({ theme }) => theme.genericDropdown.backgroundColor};
    color: ${({ theme }) => theme.genericDropdown.colorHeader};
    width: 100%;

    ${({ isDisabled, theme }) => isDisabled && css`
        color: ${theme.genericDropdown.colorDisabled};
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
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.genericDropdown.backgroundColor};
    border-bottom: 2px solid ${({ theme }) => theme.genericDropdown.colorDivider};
    padding: 3px;
    width: 100%;

    ${({ listOpen, theme }) => listOpen && css`
        border-bottom: 2px solid ${theme.genericDropdown.colorDividerSelected};
    `};

    ${({ isDisabled, theme }) => isDisabled && css`
        color: ${theme.genericDropdown.colorDisabled};
        border-bottom: 2px solid ${theme.genericDropdown.colorDisabled};
        pointer-events: none;
    `};
`;

StyledGenericDropdown.propTypes = {
    isDisabled: PropTypes.bool,
    listOpen: PropTypes.bool.isRequired,
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
