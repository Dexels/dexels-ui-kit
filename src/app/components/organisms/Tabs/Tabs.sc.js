import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import { ELEVATIONS } from '../../../utils/constants';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const TabHeader = styled.button`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h3)};
    outline: none;
    border: 0;
    border-bottom: 2px solid transparent;
    background-color: transparent;
    cursor: pointer;
    padding: 0 8px;
    width: fit-content;
    text-align: center;
    color: ${({ theme }) => theme.tabs.tabHeaderColor};

    ${({ isFullWidth }) => isFullWidth && css`
        width: 100%;
    `};

    ${({ isActive, theme }) => isActive && css`
        border-bottom-color: ${theme.tabs.tabHeaderColor};
    `};
`;

TabHeader.propTypes = {
    isActive: PropTypes.bool.isRequired,
    isFullWidth: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
        tabs: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

TabHeader.defaultProps = {
    theme: defaultTheme,
};

export const TabHeaderList = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    display: flex;
    flex-wrap: nowrap;
    border-bottom: 1px solid ${({ theme }) => theme.tabs.tabHeaderListBorderColor};
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
    elevation: PropTypes.oneOf(Object.values(ELEVATIONS)).isRequired,
};
