import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const TabHeader = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h3)};
    width: fit-content;
    text-align: center;
    color: ${({ theme }) => theme.tabs.colorTabHeader};

    ${({ hasFullwidthTabHeader }) => hasFullwidthTabHeader && css`
        width: 100%;
    `};

    ${({ isActive }) => isActive && css`
        border-bottom: 2px solid ${({ theme }) => theme.tabs.colorTabHeader};
    `};
`;

TabHeader.propTypes = {
    hasFullwidthTabHeader: PropTypes.bool.isRequired,
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

export const StyledTabs = styled.div`
    ${({ elevation }) => getElevation(elevation)};
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
