import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const TabHeader = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h3)};
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.tabs.colorTabHeader};
    font-family: ${({ theme }) => theme.textStyling(theme.availableTextStyles().h3)};

    ${({ isActive }) => isActive && css`
        border-bottom: 2px solid ${({ theme }) => theme.tabs.colorTabHeader};
    `};
`;

TabHeader.propTypes = {
    isActive: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
        tabs: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

TabHeader.defaultProps = {
    isActive: false,
    theme: defaultTheme,
};

export const TabHeaderList = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    display: flex;
    margin: 0;
    border-bottom: 1px solid lightgray;
    width: 100%;
`;

TabHeaderList.propTypes = {
    theme: PropTypes.shape({
        tabs: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

TabHeaderList.defaultProps = {
    theme: defaultTheme,
};

export const TabPanel = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    width: ${({ width }) => width};
    min-height: 40vh;
    color: inherit;
`;

TabPanel.propTypes = {
    theme: PropTypes.shape({
        tabs: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

TabPanel.defaultProps = {
    theme: defaultTheme,
};

export const TabsComponent = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h1)};
    width: 100%;
    font-family: inherit;
    font-size: inherit;
`;

TabsComponent.propTypes = {
    theme: PropTypes.shape({
        tabs: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

TabsComponent.defaultProps = {
    theme: defaultTheme,
};

export const StyledTabs = styled.div`
    ${({ elevation }) => getElevation(elevation)};
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.tabs.backgroundColor};
    padding: ${({ theme }) => theme.tabs.padding};
`;

StyledTabs.propTypes = {
    theme: PropTypes.shape({
        tabs: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

StyledTabs.defaultProps = {
    theme: defaultTheme,
};
